import React, { useState } from 'react';
import { 
  Calculator, 
  BookOpenCheck, 
  Award, 
  TrendingUp, 
  CheckCircle2, 
  Clock, 
  ArrowRight, 
  AlertTriangle, 
  BarChart3,
  Flame,
  ChevronRight,
  BookMarked
} from 'lucide-react';
import { UserProgressState, ModuleData, Domain } from '../types';
import { allModules } from '../data';

interface DashboardProps {
  state: UserProgressState;
  onSelectModule: (moduleId: string) => void;
  onOpenErrorLog: () => void;
}

export const Dashboard: React.FC<DashboardProps> = ({
  state,
  onSelectModule,
  onOpenErrorLog
}) => {
  const [activeTab, setActiveTab] = useState<'all' | 'math' | 'reading_writing'>('all');

  // Compute overall stats
  const totalModules = allModules.length;
  let completedCount = 0;
  let inProgressCount = 0;
  let totalExitScore = 0;
  let exitTestsCount = 0;
  let totalEntryScore = 0;
  let entryTestsCount = 0;
  let totalPracticeAttempts = 0;
  let totalPracticeAccuracy = 0;

  allModules.forEach(mod => {
    const prog = state.modules[mod.id];
    if (prog) {
      if (prog.stagesCompleted?.includes(5)) {
        completedCount++;
      } else if (prog.stagesCompleted?.length > 0) {
        inProgressCount++;
      }

      if (prog.exitAttempt) {
        totalExitScore += Math.round((prog.exitAttempt.score / prog.exitAttempt.total) * 100);
        exitTestsCount++;
      }
      if (prog.entryAttempt) {
        totalEntryScore += Math.round((prog.entryAttempt.score / prog.entryAttempt.total) * 100);
        entryTestsCount++;
      }
      if (prog.practiceAttempt) {
        totalPracticeAccuracy += prog.practiceAttempt.accuracy;
        totalPracticeAttempts++;
      }
    }
  });

  const avgExitScore = exitTestsCount > 0 ? Math.round(totalExitScore / exitTestsCount) : null;
  const avgEntryScore = entryTestsCount > 0 ? Math.round(totalEntryScore / entryTestsCount) : null;
  const scoreDelta = (avgExitScore !== null && avgEntryScore !== null) ? avgExitScore - avgEntryScore : null;
  const avgPracticeAccuracy = totalPracticeAttempts > 0 ? Math.round(totalPracticeAccuracy / totalPracticeAttempts) : null;

  const filteredModules = allModules.filter(m => {
    if (activeTab === 'all') return true;
    return m.domain === activeTab;
  });

  // Strength and weakness analysis
  const mathModules = allModules.filter(m => m.domain === 'math');
  const rwModules = allModules.filter(m => m.domain === 'reading_writing');

  return (
    <div className="space-y-10 pb-16">
      
      {/* Hero Welcome & KPIs */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-teal-950 text-white rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xl border border-slate-700/50 relative overflow-hidden">
        <div className="absolute right-0 top-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 text-xs font-semibold mb-4 border border-teal-500/30">
            <Flame className="w-3.5 h-3.5 text-teal-400" />
            <span>Digital SAT Diagnostic &amp; Instructional Mastery</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight mb-3">
            Selamat Datang di SAT Teacher Lab
          </h1>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8">
            Asah penguasaan materi hingga level tertinggi, pahami pola miskonsepsi siswa, dan siapkan perangkat ajar profesional siap pakai untuk kelas Anda.
          </p>

          {/* Quick Metrics Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-slate-700/60">
            <div className="bg-slate-800/60 rounded-2xl p-4 border border-slate-700/40">
              <span className="text-xs text-slate-400 font-medium block">Modul Tuntas</span>
              <div className="flex items-baseline gap-1 mt-1">
                <span className="text-2xl font-bold text-white">{completedCount}</span>
                <span className="text-xs text-slate-400 font-medium">/ {totalModules}</span>
              </div>
            </div>

            <div className="bg-slate-800/60 rounded-2xl p-4 border border-slate-700/40">
              <span className="text-xs text-slate-400 font-medium block">Rata-rata Exit Score</span>
              <div className="flex items-baseline gap-1 mt-1">
                <span className="text-2xl font-bold text-emerald-400">
                  {avgExitScore !== null ? `${avgExitScore}%` : '—'}
                </span>
                {scoreDelta !== null && (
                  <span className={`text-[11px] font-semibold ${scoreDelta >= 0 ? 'text-teal-400' : 'text-rose-400'}`}>
                    ({scoreDelta >= 0 ? `+${scoreDelta}%` : `${scoreDelta}%`})
                  </span>
                )}
              </div>
            </div>

            <div className="bg-slate-800/60 rounded-2xl p-4 border border-slate-700/40">
              <span className="text-xs text-slate-400 font-medium block">Akurasi Latihan</span>
              <div className="flex items-baseline gap-1 mt-1">
                <span className="text-2xl font-bold text-teal-300">
                  {avgPracticeAccuracy !== null ? `${avgPracticeAccuracy}%` : '—'}
                </span>
              </div>
            </div>

            <div 
              onClick={onOpenErrorLog}
              className="bg-slate-800/60 rounded-2xl p-4 border border-slate-700/40 cursor-pointer hover:border-rose-500/50 hover:bg-slate-800 transition-all"
              role="button"
              tabIndex={0}
            >
              <span className="text-xs text-slate-400 font-medium block">Error Log</span>
              <div className="flex items-baseline gap-1.5 mt-1">
                <span className="text-2xl font-bold text-rose-400">{state.errorLog.length}</span>
                <span className="text-xs text-slate-400">soal tersimpan</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Section Header & Filters */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-4">
        <div>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">
            Daftar Modul Belajar &amp; Latihan
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
            Setiap modul memiliki 5 tahap terstruktur: Entry Ticket → Materi → Contoh Soal → Latihan → Exit Ticket.
          </p>
        </div>

        {/* Tab Filter */}
        <div className="flex items-center p-1 bg-slate-200/80 dark:bg-slate-800/80 rounded-xl text-xs font-semibold">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              activeTab === 'all'
                ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
            }`}
          >
            Semua ({allModules.length})
          </button>
          <button
            onClick={() => setActiveTab('math')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
              activeTab === 'math'
                ? 'bg-white dark:bg-slate-900 text-teal-700 dark:text-teal-300 shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
            }`}
          >
            <Calculator className="w-3.5 h-3.5" />
            <span>Math (6)</span>
          </button>
          <button
            onClick={() => setActiveTab('reading_writing')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
              activeTab === 'reading_writing'
                ? 'bg-white dark:bg-slate-900 text-indigo-700 dark:text-indigo-300 shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
            }`}
          >
            <BookOpenCheck className="w-3.5 h-3.5" />
            <span>Reading &amp; Writing (5)</span>
          </button>
        </div>
      </div>

      {/* Module Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredModules.map((module) => {
          const prog = state.modules[module.id];
          const stages = prog?.stagesCompleted || [];
          const isCompleted = stages.includes(5);
          const isInProgress = stages.length > 0 && !isCompleted;
          const entryScore = prog?.entryAttempt ? Math.round((prog.entryAttempt.score / prog.entryAttempt.total) * 100) : null;
          const exitScore = prog?.exitAttempt ? Math.round((prog.exitAttempt.score / prog.exitAttempt.total) * 100) : null;
          const practiceAcc = prog?.practiceAttempt ? prog.practiceAttempt.accuracy : null;

          return (
            <div 
              key={module.id}
              className="group bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 flex flex-col justify-between hover:shadow-lg hover:border-teal-500/40 dark:hover:border-teal-500/40 transition-all duration-200"
            >
              <div>
                {/* Header Badge */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className={`text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-md ${
                    module.domain === 'math'
                      ? 'bg-teal-50 text-teal-700 dark:bg-teal-950/60 dark:text-teal-300 border border-teal-200 dark:border-teal-800'
                      : 'bg-indigo-50 text-indigo-700 dark:bg-indigo-950/60 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800'
                  }`}>
                    {module.domain === 'math' ? 'Math' : 'Reading & Writing'}
                  </span>

                  {isCompleted ? (
                    <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-200 dark:border-emerald-800">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      Tuntas
                    </span>
                  ) : isInProgress ? (
                    <span className="text-[11px] font-bold text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/60 px-2 py-0.5 rounded border border-amber-200 dark:border-amber-800">
                      Tahap {Math.max(...stages) + 1} / 5
                    </span>
                  ) : (
                    <span className="text-[11px] font-medium text-slate-400 dark:text-slate-500">
                      Belum Dimulai
                    </span>
                  )}
                </div>

                <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                  {module.title}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 line-clamp-2 leading-relaxed">
                  {module.description}
                </p>

                {/* 5-Stage Stepper Dots */}
                <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800/80">
                  <div className="flex items-center justify-between text-[10px] text-slate-400 mb-1.5 font-medium">
                    <span>Tahapan Belajar:</span>
                    <span>{stages.length} dari 5 selesai</span>
                  </div>
                  <div className="grid grid-cols-5 gap-1.5">
                    {[1, 2, 3, 4, 5].map((stg) => {
                      const isDone = stages.includes(stg);
                      return (
                        <div 
                          key={stg} 
                          className={`h-1.5 rounded-full transition-colors ${
                            isDone 
                              ? 'bg-teal-500' 
                              : 'bg-slate-200 dark:bg-slate-800'
                          }`}
                          title={`Tahap ${stg}: ${
                            stg === 1 ? 'Entry Ticket' :
                            stg === 2 ? 'Materi' :
                            stg === 3 ? 'Contoh Soal' :
                            stg === 4 ? 'Latihan Soal' : 'Exit Ticket'
                          }`}
                        />
                      );
                    })}
                  </div>
                </div>

                {/* Score Delta Strip */}
                {(entryScore !== null || exitScore !== null || practiceAcc !== null) && (
                  <div className="mt-4 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-700/60 space-y-2 text-xs">
                    {entryScore !== null && exitScore !== null && (
                      <div className="flex items-center justify-between">
                        <span className="text-slate-500 dark:text-slate-400">Entry vs Exit:</span>
                        <div className="flex items-center gap-1.5 font-bold">
                          <span className="text-slate-700 dark:text-slate-300">{entryScore}%</span>
                          <span className="text-slate-400">→</span>
                          <span className="text-emerald-600 dark:text-emerald-400">{exitScore}%</span>
                          <span className={`text-[10px] ${exitScore - entryScore >= 0 ? 'text-teal-600' : 'text-rose-500'}`}>
                            ({exitScore - entryScore >= 0 ? `+${exitScore - entryScore}%` : `${exitScore - entryScore}%`})
                          </span>
                        </div>
                      </div>
                    )}

                    {practiceAcc !== null && (
                      <div className="flex items-center justify-between">
                        <span className="text-slate-500 dark:text-slate-400">Akurasi Latihan (12 soal):</span>
                        <span className="font-bold text-slate-800 dark:text-slate-200">{practiceAcc}%</span>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Action Button */}
              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
                  <Clock className="w-3.5 h-3.5 text-slate-400" />
                  <span>Target: {module.targetPacingSeconds}s / soal</span>
                </div>

                <button
                  onClick={() => onSelectModule(module.id)}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-teal-600 hover:bg-teal-700 text-white shadow-sm transition-all group-hover:translate-x-0.5"
                >
                  <span>{isCompleted ? 'Review Modul' : isInProgress ? 'Lanjutkan' : 'Mulai Belajar'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Strength & Weakness Matrix */}
      <section className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-sm">
        <div className="flex items-center gap-2 mb-6">
          <BarChart3 className="w-5 h-5 text-teal-600 dark:text-teal-400" />
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">
            Peta Kekuatan &amp; Kelemahan Penguasaan Materi
          </h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Math Progress Bars */}
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-2">
              <span className="text-sm font-bold text-slate-800 dark:text-slate-200 flex items-center gap-2">
                <Calculator className="w-4 h-4 text-teal-600" />
                Math Domain
              </span>
              <span className="text-xs text-slate-500">Exit Ticket Accuracy</span>
            </div>

            <div className="space-y-3">
              {mathModules.map((m) => {
                const prog = state.modules[m.id];
                const exitScore = prog?.exitAttempt ? Math.round((prog.exitAttempt.score / prog.exitAttempt.total) * 100) : null;
                const scoreVal = exitScore !== null ? exitScore : 0;
                const isPassed = scoreVal >= 70;

                return (
                  <div key={m.id} className="space-y-1">
                    <div className="flex justify-between text-xs font-medium">
                      <span className="text-slate-700 dark:text-slate-300">{m.title}</span>
                      <span className={exitScore !== null ? (isPassed ? 'text-emerald-600 dark:text-emerald-400 font-bold' : 'text-amber-500 font-bold') : 'text-slate-400'}>
                        {exitScore !== null ? `${exitScore}%` : 'Belum diuji'}
                      </span>
                    </div>
                    <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-2 overflow-hidden">
                      <div 
                        className={`h-full rounded-full transition-all duration-500 ${
                          exitScore === null 
                            ? 'w-0' 
                            : isPassed 
                            ? 'bg-teal-500' 
                            : 'bg-amber-500'
                        }`}
                        style={{ width: `${scoreVal}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Reading & Writing Progress Bars */}
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-2">
              <span className="text-sm font-bold text-slate-800 dark:text-slate-200 flex items-center gap-2">
                <BookOpenCheck className="w-4 h-4 text-indigo-600" />
                Reading &amp; Writing Domain
              </span>
              <span className="text-xs text-slate-500">Exit Ticket Accuracy</span>
            </div>

            <div className="space-y-3">
              {rwModules.map((m) => {
                const prog = state.modules[m.id];
                const exitScore = prog?.exitAttempt ? Math.round((prog.exitAttempt.score / prog.exitAttempt.total) * 100) : null;
                const scoreVal = exitScore !== null ? exitScore : 0;
                const isPassed = scoreVal >= 70;

                return (
                  <div key={m.id} className="space-y-1">
                    <div className="flex justify-between text-xs font-medium">
                      <span className="text-slate-700 dark:text-slate-300">{m.title}</span>
                      <span className={exitScore !== null ? (isPassed ? 'text-emerald-600 dark:text-emerald-400 font-bold' : 'text-amber-500 font-bold') : 'text-slate-400'}>
                        {exitScore !== null ? `${exitScore}%` : 'Belum diuji'}
                      </span>
                    </div>
                    <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-2 overflow-hidden">
                      <div 
                        className={`h-full rounded-full transition-all duration-500 ${
                          exitScore === null 
                            ? 'w-0' 
                            : isPassed 
                            ? 'bg-indigo-500' 
                            : 'bg-amber-500'
                        }`}
                        style={{ width: `${scoreVal}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
