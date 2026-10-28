import React, { useState } from 'react';
import { 
  GraduationCap, 
  BookOpen, 
  Presentation, 
  BookMarked, 
  Download, 
  Upload, 
  RotateCcw, 
  Sun, 
  Moon,
  Sparkles,
  Languages
} from 'lucide-react';
import { UserProgressState } from '../types';

interface NavbarProps {
  state: UserProgressState;
  onModeChange: (mode: 'learn' | 'teach') => void;
  onThemeToggle: () => void;
  onOpenErrorLog: () => void;
  onExport: () => void;
  onImport: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onReset: () => void;
  onGoHome: () => void;
  onToggleLanguage?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  state,
  onModeChange,
  onThemeToggle,
  onOpenErrorLog,
  onExport,
  onImport,
  onReset,
  onGoHome,
  onToggleLanguage
}) => {
  const [showResetConfirm, setShowResetConfirm] = useState(false);
  const errorCount = state.errorLog.length;

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
          
          {/* Logo & Brand */}
          <div 
            onClick={onGoHome}
            className="flex items-center gap-2 sm:gap-3 cursor-pointer group select-none shrink-0"
            role="button"
            tabIndex={0}
            onKeyDown={(e) => { if (e.key === 'Enter') onGoHome(); }}
            aria-label="Kembali ke Dashboard SAT Teacher Lab"
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-tr from-teal-600 to-emerald-500 flex items-center justify-center text-white shadow-sm shadow-teal-500/20 group-hover:scale-105 transition-transform">
              <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-bold text-sm sm:text-lg tracking-tight text-slate-900 dark:text-white whitespace-nowrap">
                  SAT Teacher Lab
                </span>
                <span className="hidden sm:inline-block text-[10px] font-semibold uppercase px-1.5 py-0.5 rounded bg-teal-100 text-teal-800 dark:bg-teal-950 dark:text-teal-300 border border-teal-200 dark:border-teal-800">
                  Pro
                </span>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 hidden lg:block">
                Mastery &amp; Classroom Toolkit
              </p>
            </div>
          </div>

          {/* Mode Switcher Pill */}
          <div className="flex items-center p-1 bg-slate-100 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shrink-0">
            <button
              onClick={() => onModeChange('learn')}
              className={`flex items-center gap-1.5 px-2.5 sm:px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                state.activeAppMode === 'learn'
                  ? 'bg-white dark:bg-slate-900 text-teal-700 dark:text-teal-300 shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Mode Belajar</span>
              <span className="sm:hidden">Belajar</span>
            </button>
            <button
              onClick={() => onModeChange('teach')}
              className={`flex items-center gap-1.5 px-2.5 sm:px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                state.activeAppMode === 'teach'
                  ? 'bg-white dark:bg-slate-900 text-teal-700 dark:text-teal-300 shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Presentation className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Mode Mengajar</span>
              <span className="sm:hidden">Mengajar</span>
            </button>
          </div>

          {/* Actions & Utilities */}
          <div className="flex items-center gap-2">

            {/* Language Toggle: English (Digital SAT) / Bahasa Indonesia */}
            {onToggleLanguage && (
              <button
                onClick={() => onToggleLanguage()}
                className="flex items-center gap-1.5 px-2 sm:px-2.5 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-200 hover:border-teal-500 hover:text-teal-600 transition-colors"
                title="Ganti Bahasa Soal: English (Standar Digital SAT) / Terjemahan Indonesia"
                aria-label="Ganti bahasa soal"
              >
                <Languages className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
                <span className="font-mono text-[11px] font-bold">
                  {state.questionLanguage === 'id' ? '🇮🇩 ID' : '🇺🇸 EN'}
                </span>
                <span className="hidden xl:inline text-[10px] text-slate-400 dark:text-slate-400 font-normal">
                  {state.questionLanguage === 'id' ? 'Soal Indo' : 'SAT EN'}
                </span>
              </button>
            )}
            
            {/* Error Log button */}
            <button
              onClick={onOpenErrorLog}
              className="relative flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 text-xs font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
              title="Buka Buku Catatan Kesalahan"
              aria-label={`Buku Catatan Kesalahan, ${errorCount} soal tersimpan`}
            >
              <BookMarked className="w-3.5 h-3.5 text-rose-500" />
              <span className="hidden md:inline">Error Log</span>
              {errorCount > 0 && (
                <span className="ml-1 px-1.5 py-0.2 bg-rose-100 text-rose-700 dark:bg-rose-950 dark:text-rose-300 rounded-full text-[10px] font-bold">
                  {errorCount}
                </span>
              )}
            </button>

            {/* Export / Import Dropdown / Actions */}
            <button
              onClick={onExport}
              className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              title="Ekspor Progres (Download Backup JSON)"
              aria-label="Ekspor data progres"
            >
              <Download className="w-4 h-4" />
            </button>

            <label 
              className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
              title="Impor Progres (Upload File JSON)"
              aria-label="Impor data progres"
            >
              <Upload className="w-4 h-4" />
              <input 
                type="file" 
                accept=".json" 
                onChange={onImport} 
                className="hidden" 
              />
            </label>

            {/* Reset Progress */}
            <button
              onClick={() => setShowResetConfirm(true)}
              className="p-2 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-950/40 transition-colors"
              title="Reset Semua Progres"
              aria-label="Reset semua progres"
            >
              <RotateCcw className="w-4 h-4" />
            </button>

            {/* Theme Toggle */}
            <button
              onClick={onThemeToggle}
              className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              title="Ganti Tema (Terang / Gelap)"
              aria-label="Ganti tema terang atau gelap"
            >
              {state.theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-slate-600" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Reset Confirmation Modal */}
      {showResetConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-150">
          <div className="bg-white dark:bg-slate-900 rounded-2xl max-w-md w-full p-6 shadow-xl border border-slate-200 dark:border-slate-800">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
              Reset Semua Progres?
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
              Tindakan ini akan menghapus seluruh data skor Entry/Exit Ticket, catatan refleksi, hasil latihan soal, dan riwayat Error Log. Data yang telah dihapus tidak dapat dipulihkan kecuali Anda memiliki file backup JSON.
            </p>
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setShowResetConfirm(false)}
                className="px-4 py-2 rounded-xl text-sm font-semibold border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                Batal
              </button>
              <button
                onClick={() => {
                  onReset();
                  setShowResetConfirm(false);
                }}
                className="px-4 py-2 rounded-xl text-sm font-semibold bg-rose-600 hover:bg-rose-700 text-white shadow-sm"
              >
                Ya, Reset Progres
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
