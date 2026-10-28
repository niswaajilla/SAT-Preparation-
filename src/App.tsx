import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Dashboard } from './components/Dashboard';
import { ModuleView } from './components/ModuleView';
import { TeachingModeView } from './components/TeachingModeView';
import { ErrorLogModal } from './components/ErrorLogModal';
import { UserProgressState } from './types';
import { loadProgress, saveProgress, resetAllProgress, exportProgressAsJSON, parseImportedJSON } from './utils/storage';
import { allModules, getModuleById } from './data';

export default function App() {
  const [state, setState] = useState<UserProgressState>(() => loadProgress());
  const [currentModuleId, setCurrentModuleId] = useState<string | null>(() => {
    return new URLSearchParams(window.location.search).get('module');
  });
  const [isErrorLogOpen, setIsErrorLogOpen] = useState<boolean>(false);

  // Sync theme with DOM
  useEffect(() => {
    if (state.theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [state.theme]);

  // Persist state changes
  const handleUpdateState = (newState: UserProgressState) => {
    setState(newState);
    saveProgress(newState);
  };

  // Browser history handling for seamless back button support
  useEffect(() => {
    const handlePopState = (event: PopStateEvent) => {
      if (event.state && event.state.moduleId) {
        setCurrentModuleId(event.state.moduleId);
      } else {
        setCurrentModuleId(null);
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleSelectModule = (moduleId: string) => {
    setCurrentModuleId(moduleId);
    window.history.pushState({ moduleId }, '', `?module=${moduleId}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToDashboard = () => {
    setCurrentModuleId(null);
    window.history.pushState(null, '', window.location.pathname);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleGoToNextModule = () => {
    if (!currentModuleId) return;
    const currentIndex = allModules.findIndex(m => m.id === currentModuleId);
    if (currentIndex >= 0 && currentIndex < allModules.length - 1) {
      const nextMod = allModules[currentIndex + 1];
      handleSelectModule(nextMod.id);
    } else {
      handleBackToDashboard();
    }
  };

  const handleModeChange = (mode: 'learn' | 'teach') => {
    handleUpdateState({
      ...state,
      activeAppMode: mode
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleThemeToggle = () => {
    const newTheme = state.theme === 'dark' ? 'light' : 'dark';
    handleUpdateState({
      ...state,
      theme: newTheme
    });
  };

  const handleExport = () => {
    exportProgressAsJSON(state);
  };

  const handleImport = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const content = event.target?.result as string;
        const imported = parseImportedJSON(content);
        handleUpdateState(imported);
        alert('Progres berhasil diimpor dari file cadangan.');
      } catch (err: any) {
        alert(`Gagal mengimpor file: ${err.message || 'Format tidak valid'}`);
      }
    };
    reader.readAsText(file);
    // Reset file input
    e.target.value = '';
  };

  const handleReset = () => {
    const fresh = resetAllProgress();
    setState(fresh);
    setCurrentModuleId(null);
    window.history.pushState(null, '', window.location.pathname);
  };

  const handleToggleQuestionLanguage = () => {
    const nextLang = state.questionLanguage === 'id' ? 'en' : 'id';
    handleUpdateState({
      ...state,
      questionLanguage: nextLang
    });
  };

  const selectedModule = currentModuleId ? getModuleById(currentModuleId) : null;

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col font-sans transition-colors">
      
      {/* Global Navbar */}
      <Navbar
        state={state}
        onModeChange={handleModeChange}
        onThemeToggle={handleThemeToggle}
        onOpenErrorLog={() => setIsErrorLogOpen(true)}
        onExport={handleExport}
        onImport={handleImport}
        onReset={handleReset}
        onGoHome={handleBackToDashboard}
        onToggleLanguage={handleToggleQuestionLanguage}
      />

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8">
        
        {state.activeAppMode === 'teach' ? (
          /* Mode Mengajar (Classroom Toolkit) */
          <TeachingModeView
            onBackToLearnMode={() => handleModeChange('learn')}
          />
        ) : (
          /* Mode Belajar (Teacher Self-Study & Diagnostic Drills) */
          selectedModule ? (
            <ModuleView
              module={selectedModule}
              state={state}
              onUpdateState={handleUpdateState}
              onBackToDashboard={handleBackToDashboard}
              onGoToNextModule={
                allModules.findIndex(m => m.id === selectedModule.id) < allModules.length - 1
                  ? handleGoToNextModule
                  : undefined
              }
            />
          ) : (
            <Dashboard
              state={state}
              onSelectModule={handleSelectModule}
              onOpenErrorLog={() => setIsErrorLogOpen(true)}
            />
          )
        )}

      </main>

      {/* Global Error Log Modal */}
      <ErrorLogModal
        isOpen={isErrorLogOpen}
        onClose={() => setIsErrorLogOpen(false)}
        state={state}
        onUpdateState={handleUpdateState}
      />

      {/* Footer */}
      <footer className="no-print border-t border-slate-200 dark:border-slate-800 py-6 text-center text-xs text-slate-500 dark:text-slate-400">
        <p>SAT Teacher Lab • Platform Persiapan Mengajar Digital SAT &amp; Penguasaan Materi Guru</p>
      </footer>

    </div>
  );
}
