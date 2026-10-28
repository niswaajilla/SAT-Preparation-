import React, { useState, useEffect, useMemo, useRef } from 'react';
import { 
  ArrowLeft, 
  CheckCircle2, 
  HelpCircle, 
  Flag, 
  Clock, 
  Sparkles, 
  ChevronRight, 
  ChevronLeft, 
  RotateCcw, 
  AlertTriangle, 
  Lightbulb, 
  BookmarkPlus, 
  BookOpen, 
  Check, 
  Star,
  Zap,
  Target
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { ModuleData, Question, UserProgressState, ErrorLogItem } from '../types';
import { MathText } from './MathText';
import { isAnswerCorrect, calculateScore, analyzeEntryExitDelta, formatPacingTime } from '../utils/scoring';
import { GeminiModal } from './GeminiModal';

interface ModuleViewProps {
  module: ModuleData;
  state: UserProgressState;
  onUpdateState: (newState: UserProgressState) => void;
  onBackToDashboard: () => void;
  onGoToNextModule?: () => void;
}

export const ModuleView: React.FC<ModuleViewProps> = ({
  module,
  state,
  onUpdateState,
  onBackToDashboard,
  onGoToNextModule
}) => {
  const currentModuleProgress = state.modules[module.id] || { stagesCompleted: [] };
  const stagesCompleted = currentModuleProgress.stagesCompleted || [];

  // Determine active stage (1 to 5)
  // If not started, stage 1. If completed stage 1, allow moving to stage 2, etc.
  const initialStage = useMemo(() => {
    if (stagesCompleted.length === 0) return 1;
    const maxDone = Math.max(...stagesCompleted);
    return Math.min(maxDone + 1, 5);
  }, [module.id]);

  const [activeStage, setActiveStage] = useState<number>(initialStage);

  // Gemini Modal State
  const [geminiQuestion, setGeminiQuestion] = useState<Question | null>(null);

  // Reset stage state when module changes
  useEffect(() => {
    setActiveStage(initialStage);
  }, [module.id]);

  const markStageCompleted = (stageNumber: number) => {
    const existing = new Set(stagesCompleted);
    existing.add(stageNumber);
    const updatedStages = Array.from(existing).sort((a, b) => a - b);
    
    onUpdateState({
      ...state,
      modules: {
        ...state.modules,
        [module.id]: {
          ...currentModuleProgress,
          stagesCompleted: updatedStages
        }
      }
    });
  };

  /* ==============================================================
     STAGE 1: ENTRY TICKET STATE
     ============================================================== */
  const [entryIndex, setEntryIndex] = useState<number>(0);
  const [entryAnswers, setEntryAnswers] = useState<Record<string, string>>({});
  const [entrySubmitted, setEntrySubmitted] = useState<boolean>(!!currentModuleProgress.entryAttempt);
  const [entryConfidence, setEntryConfidence] = useState<number>(currentModuleProgress.entryAttempt?.confidence || 4);
  const [entryDoubtTopic, setEntryDoubtTopic] = useState<string>(currentModuleProgress.entryAttempt?.doubtTopic || '');

  /* ==============================================================
     STAGE 2: MATERI STATE
     ============================================================== */
  const [activeConceptTab, setActiveConceptTab] = useState<number>(0);

  /* ==============================================================
     STAGE 3: CONTOH SOAL STATE
     ============================================================== */
  const [workedExampleIndex, setWorkedExampleIndex] = useState<number>(0);
  const [showWorkedSolution, setShowWorkedSolution] = useState<Record<string, boolean>>({});
  const [workedSelectedMethod, setWorkedSelectedMethod] = useState<Record<string, number>>({});

  /* ==============================================================
     STAGE 4: LATIHAN SOAL (PRACTICE) STATE
     ============================================================== */
  const [practiceIndex, setPracticeIndex] = useState<number>(0);
  const [practiceAnswers, setPracticeAnswers] = useState<Record<string, string>>({});
  const [practiceFlags, setPracticeFlags] = useState<Record<string, boolean>>({});
  const [practiceHintsShown, setPracticeHintsShown] = useState<Record<string, boolean>>({});
  const [practiceSubmitted, setPracticeSubmitted] = useState<boolean>(!!currentModuleProgress.practiceAttempt);
  const [timerEnabled, setTimerEnabled] = useState<boolean>(true);
  const [secondsElapsed, setSecondsElapsed] = useState<number>(0);
  const [loggedToErrorLog, setLoggedToErrorLog] = useState<Record<string, boolean>>({});
  const [showErrorLogPromptFor, setShowErrorLogPromptFor] = useState<Question | null>(null);
  const [errorCategoryInput, setErrorCategoryInput] = useState<'konsep' | 'ceroboh' | 'waktu' | 'strategi'>('konsep');
  const [errorTeacherNotesInput, setErrorTeacherNotesInput] = useState<string>('');

  // Practice Timer
  useEffect(() => {
    let interval: any = null;
    if (activeStage === 4 && !practiceSubmitted && timerEnabled) {
      interval = setInterval(() => {
        setSecondsElapsed(prev => prev + 1);
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [activeStage, practiceSubmitted, timerEnabled]);

  /* ==============================================================
     STAGE 5: EXIT TICKET STATE
     ============================================================== */
  const [exitIndex, setExitIndex] = useState<number>(0);
  const [exitAnswers, setExitAnswers] = useState<Record<string, string>>({});
  const [exitSubmitted, setExitSubmitted] = useState<boolean>(!!currentModuleProgress.exitAttempt);
  const [exitConfidence, setExitConfidence] = useState<number>(currentModuleProgress.exitAttempt?.confidence || 4);
  const [exitDeepenTopic, setExitDeepenTopic] = useState<string>(currentModuleProgress.exitAttempt?.deepenTopic || '');

  // Confetti on Stage 5 pass
  useEffect(() => {
    if (activeStage === 5 && exitSubmitted) {
      const exitCorrect = module.exitTicket.filter(q => isAnswerCorrect(exitAnswers[q.id], q.correctAnswer)).length;
      if (exitCorrect / module.exitTicket.length >= 0.7) {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      }
    }
  }, [activeStage, exitSubmitted]);

  // Save Entry Ticket
  const handleSubmitEntryTicket = () => {
    let correctCount = 0;
    module.entryTicket.forEach(q => {
      if (isAnswerCorrect(entryAnswers[q.id], q.correctAnswer)) {
        correctCount++;
      }
    });

    const updatedModuleProgress = {
      ...currentModuleProgress,
      entryAttempt: {
        score: correctCount,
        total: module.entryTicket.length,
        confidence: entryConfidence,
        doubtTopic: entryDoubtTopic,
        completedAt: new Date().toISOString()
      }
    };

    markStageCompleted(1);
    setEntrySubmitted(true);
    onUpdateState({
      ...state,
      modules: {
        ...state.modules,
        [module.id]: updatedModuleProgress
      }
    });
  };

  // Save Practice Drill
  const handleSubmitPractice = () => {
    let correctCount = 0;
    module.practiceQuestions.forEach(q => {
      if (isAnswerCorrect(practiceAnswers[q.id], q.correctAnswer)) {
        correctCount++;
      }
    });

    const accuracy = Math.round((correctCount / module.practiceQuestions.length) * 100);

    const updatedModuleProgress = {
      ...currentModuleProgress,
      practiceAttempt: {
        score: correctCount,
        total: module.practiceQuestions.length,
        timeSpentSeconds: secondsElapsed,
        accuracy,
        completedAt: new Date().toISOString()
      }
    };

    markStageCompleted(4);
    setPracticeSubmitted(true);
    onUpdateState({
      ...state,
      modules: {
        ...state.modules,
        [module.id]: updatedModuleProgress
      }
    });
  };

  // Save Exit Ticket
  const handleSubmitExitTicket = () => {
    let correctCount = 0;
    module.exitTicket.forEach(q => {
      if (isAnswerCorrect(exitAnswers[q.id], q.correctAnswer)) {
        correctCount++;
      }
    });

    const updatedModuleProgress = {
      ...currentModuleProgress,
      exitAttempt: {
        score: correctCount,
        total: module.exitTicket.length,
        confidence: exitConfidence,
        deepenTopic: exitDeepenTopic,
        completedAt: new Date().toISOString()
      }
    };

    markStageCompleted(5);
    setExitSubmitted(true);
    onUpdateState({
      ...state,
      modules: {
        ...state.modules,
        [module.id]: updatedModuleProgress
      }
    });
  };

  // Add question to Error Log
  const handleSaveToErrorLog = () => {
    if (!showErrorLogPromptFor) return;
    const q = showErrorLogPromptFor;
    const userAns = practiceAnswers[q.id] || '';

    const newErrorItem: ErrorLogItem = {
      id: `err-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`,
      questionId: q.id,
      moduleId: module.id,
      moduleTitle: module.title,
      questionText: q.prompt,
      options: q.options,
      userAnswer: userAns,
      correctAnswer: q.correctAnswer,
      explanation: q.explanation,
      distractorNote: q.distractorAnalysis ? q.distractorAnalysis[userAns] : undefined,
      errorCategory: errorCategoryInput,
      teacherNotes: errorTeacherNotesInput,
      timestamp: new Date().toISOString(),
      reviewed: false
    };

    onUpdateState({
      ...state,
      errorLog: [newErrorItem, ...state.errorLog]
    });

    setLoggedToErrorLog(prev => ({ ...prev, [q.id]: true }));
    setShowErrorLogPromptFor(null);
    setErrorTeacherNotesInput('');
  };

  const renderQuestionPrompt = (q: Question, customClass?: string) => {
    const isIdMode = state.questionLanguage === 'id';
    const mainText = isIdMode ? (q.promptId || q.prompt) : q.prompt;
    const translationText = isIdMode ? (q.promptId ? q.prompt : undefined) : q.promptId;

    return (
      <div className="space-y-2">
        <div className={customClass || "text-sm sm:text-base font-semibold text-slate-900 dark:text-white leading-relaxed"}>
          <MathText text={mainText} />
        </div>
        {translationText && (
          <details className="text-xs text-slate-500 dark:text-slate-400 select-none group">
            <summary className="cursor-pointer inline-flex items-center gap-1 font-medium text-teal-600 dark:text-teal-400 hover:underline">
              <span>{isIdMode ? '🇺🇸 Original SAT English Prompt' : '🇮🇩 Terjemahan Bahasa Indonesia'}</span>
            </summary>
            <div className="mt-1.5 p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 text-slate-600 dark:text-slate-300 italic font-sans text-xs">
              <MathText text={translationText} />
            </div>
          </details>
        )}
      </div>
    );
  };

  const stages = [
    { num: 1, title: 'Entry Ticket', subtitle: '5 Soal Diagnostik' },
    { num: 2, title: 'Materi & Catatan Guru', subtitle: 'Konsep & Pedagogi' },
    { num: 3, title: 'Contoh Soal', subtitle: '3 Soal & Multi-Metode' },
    { num: 4, title: 'Latihan Soal', subtitle: '12 Soal Latihan & Timer' },
    { num: 5, title: 'Exit Ticket', subtitle: '5 Soal & Evaluasi Delta' }
  ];

  return (
    <div className="space-y-6 pb-20">
      
      {/* Top Header & Breadcrumb */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-4">
        <div className="flex items-center gap-3">
          <button
            onClick={onBackToDashboard}
            className="p-2 rounded-xl text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            title="Kembali ke Dashboard"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div>
            <div className="flex items-center gap-2">
              <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${
                module.domain === 'math'
                  ? 'bg-teal-50 text-teal-700 dark:bg-teal-950 dark:text-teal-300'
                  : 'bg-indigo-50 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300'
              }`}>
                {module.domain === 'math' ? 'Math' : 'Reading & Writing'}
              </span>
              <h1 className="text-xl font-extrabold text-slate-900 dark:text-white">
                {module.title}
              </h1>
            </div>
          </div>
        </div>

        {/* Next Module Quick Action if finished */}
        {stagesCompleted.includes(5) && onGoToNextModule && (
          <button
            onClick={onGoToNextModule}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm"
          >
            <span>Modul Berikutnya</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* 5-Stage Stepper Header */}
      <nav aria-label="Alur Pembelajaran Modul" className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-2 sm:p-3 shadow-sm overflow-x-auto">
        <div className="flex items-center justify-between min-w-[620px] gap-2">
          {stages.map((stg) => {
            const isCompleted = stagesCompleted.includes(stg.num);
            const isActive = activeStage === stg.num;
            // Can click if completed or is next available stage
            const canNavigate = isCompleted || stg.num === 1 || stagesCompleted.includes(stg.num - 1);

            return (
              <button
                key={stg.num}
                onClick={() => { if (canNavigate) setActiveStage(stg.num); }}
                disabled={!canNavigate}
                className={`flex-1 flex items-center gap-3 p-2.5 rounded-xl transition-all text-left ${
                  isActive
                    ? 'bg-teal-50 dark:bg-teal-950/50 border border-teal-500/40 text-teal-900 dark:text-teal-200 shadow-sm'
                    : canNavigate
                    ? 'hover:bg-slate-50 dark:hover:bg-slate-800/60 text-slate-700 dark:text-slate-300'
                    : 'opacity-40 cursor-not-allowed text-slate-400'
                }`}
              >
                <div className={`w-7 h-7 rounded-lg flex items-center justify-center font-bold text-xs shrink-0 ${
                  isCompleted
                    ? 'bg-emerald-500 text-white'
                    : isActive
                    ? 'bg-teal-600 text-white ring-2 ring-teal-400/40'
                    : 'bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                }`}>
                  {isCompleted ? <Check className="w-4 h-4" /> : stg.num}
                </div>
                <div className="overflow-hidden">
                  <div className="text-xs font-bold truncate leading-tight">
                    {stg.title}
                  </div>
                  <div className="text-[10px] text-slate-500 truncate">
                    {stg.subtitle}
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </nav>

      {/* ========================================================================= */}
      {/* STAGE 1: ENTRY TICKET                                                     */}
      {/* ========================================================================= */}
      {activeStage === 1 && (
        <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-sm space-y-6">
          
          <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-4">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400 block mb-1">
                Tahap 1 – Self-Assessment Diagnostik
              </span>
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                Entry Ticket (5 Soal Tanpa Kunci)
              </h2>
            </div>
            <div className="text-xs font-semibold text-slate-500">
              Soal {entryIndex + 1} dari {module.entryTicket.length}
            </div>
          </div>

          {!entrySubmitted ? (
            <>
              {/* Question Card */}
              {(() => {
                const currentQ = module.entryTicket[entryIndex];
                const chosen = entryAnswers[currentQ.id];

                return (
                  <div className="space-y-6">
                    {currentQ.passage && (
                      <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed italic">
                        "{currentQ.passage}"
                      </div>
                    )}

                    {renderQuestionPrompt(currentQ)}

                    {/* Options */}
                    {currentQ.options && (
                      <div className="space-y-3 pt-2">
                        {currentQ.options.map((opt, idx) => {
                          const letter = String.fromCharCode(65 + idx);
                          const isSelected = chosen === letter;

                          return (
                            <button
                              key={idx}
                              onClick={() => setEntryAnswers(prev => ({ ...prev, [currentQ.id]: letter }))}
                              className={`w-full text-left p-4 rounded-2xl border text-xs sm:text-sm flex items-center gap-3.5 transition-all ${
                                isSelected
                                  ? 'border-teal-500 bg-teal-50 dark:bg-teal-950/40 text-teal-900 dark:text-teal-200 font-semibold ring-1 ring-teal-500'
                                  : 'border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/60 text-slate-700 dark:text-slate-300'
                              }`}
                            >
                              <span className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${
                                isSelected
                                  ? 'bg-teal-600 text-white'
                                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                              }`}>
                                {letter}
                              </span>
                              <MathText text={opt} />
                            </button>
                          );
                        })}
                      </div>
                    )}

                    {/* Navigation Buttons */}
                    <div className="flex items-center justify-between pt-6 border-t border-slate-100 dark:border-slate-800">
                      <button
                        onClick={() => setEntryIndex(prev => Math.max(0, prev - 1))}
                        disabled={entryIndex === 0}
                        className="px-4 py-2 rounded-xl text-xs font-semibold border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 disabled:opacity-30"
                      >
                        Sebelumnya
                      </button>

                      {entryIndex < module.entryTicket.length - 1 ? (
                        <button
                          onClick={() => setEntryIndex(prev => prev + 1)}
                          className="px-5 py-2 rounded-xl text-xs font-semibold bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900"
                        >
                          Selanjutnya
                        </button>
                      ) : (
                        <button
                          onClick={handleSubmitEntryTicket}
                          disabled={Object.keys(entryAnswers).length < module.entryTicket.length}
                          className="px-5 py-2.5 rounded-xl text-xs font-bold bg-teal-600 hover:bg-teal-700 text-white shadow-sm disabled:opacity-40"
                        >
                          Selesaikan Entry Ticket
                        </button>
                      )}
                    </div>
                  </div>
                );
              })()}
            </>
          ) : (
            /* Entry Ticket Completed Summary & Reflection */
            <div className="space-y-6 animate-in fade-in">
              {(() => {
                const correctCount = module.entryTicket.filter(q => isAnswerCorrect(entryAnswers[q.id], q.correctAnswer)).length;
                const scoreResult = calculateScore(correctCount, module.entryTicket.length);

                return (
                  <div className="space-y-6">
                    <div className="p-6 rounded-2xl bg-teal-50 dark:bg-teal-950/30 border border-teal-200 dark:border-teal-900 flex flex-col sm:flex-row items-center justify-between gap-4">
                      <div>
                        <span className="text-xs font-semibold text-teal-800 dark:text-teal-300 block">
                          Skor Entry Ticket Awal Anda:
                        </span>
                        <div className="text-3xl font-extrabold text-teal-900 dark:text-white mt-1">
                          {scoreResult.score} / {scoreResult.total} ({scoreResult.percentage}%)
                        </div>
                        <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                          {scoreResult.recommendation}
                        </p>
                      </div>

                      <div className="px-4 py-2 rounded-xl bg-white dark:bg-slate-800 border border-teal-200 dark:border-teal-800 text-center">
                        <span className="text-[10px] uppercase tracking-wider text-slate-400 font-bold block">Status Awal</span>
                        <span className="text-sm font-bold text-teal-600 dark:text-teal-400">{scoreResult.performanceBand}</span>
                      </div>
                    </div>

                    {/* Teacher Self-Reflection Fields */}
                    <div className="p-6 rounded-2xl bg-white dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-4 text-xs sm:text-sm">
                      <h4 className="font-bold text-slate-900 dark:text-white">
                        Refleksi Mandiri Sebelum Mempelajari Materi
                      </h4>

                      <div>
                        <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-2">
                          Tingkat Percaya Diri Saya pada Topik Ini (1 - 5):
                        </label>
                        <div className="flex items-center gap-2">
                          {[1, 2, 3, 4, 5].map((num) => (
                            <button
                              key={num}
                              onClick={() => {
                                setEntryConfidence(num);
                                markStageCompleted(1);
                              }}
                              className={`w-9 h-9 rounded-xl font-bold flex items-center justify-center transition-all ${
                                entryConfidence === num
                                  ? 'bg-amber-500 text-white shadow-sm'
                                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200'
                              }`}
                            >
                              <Star className={`w-4 h-4 ${entryConfidence >= num ? 'fill-current' : ''}`} />
                            </button>
                          ))}
                          <span className="ml-2 text-xs text-slate-500">
                            {entryConfidence === 5 ? 'Sangat Yakin' : entryConfidence === 1 ? 'Sangat Ragu' : 'Cukup Yakin'}
                          </span>
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                          Bagian mana yang paling saya ragukan dari topik ini?
                        </label>
                        <input
                          type="text"
                          value={entryDoubtTopic}
                          onChange={(e) => setEntryDoubtTopic(e.target.value)}
                          placeholder="Misal: lupa membalik tanda pertidaksamaan saat membagi negatif, atau membedakan infinite solutions..."
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                        />
                      </div>
                    </div>

                    <div className="flex justify-end pt-4">
                      <button
                        onClick={() => {
                          markStageCompleted(1);
                          setActiveStage(2);
                        }}
                        className="px-6 py-3 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs sm:text-sm shadow-md flex items-center gap-2"
                      >
                        <span>Lanjut ke Tahap 2: Materi &amp; Catatan Guru</span>
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                );
              })()}
            </div>
          )}

        </div>
      )}

      {/* ========================================================================= */}
      {/* STAGE 2: MATERI & CATATAN UNTUK GURU                                      */}
      {/* ========================================================================= */}
      {activeStage === 2 && (
        <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-sm space-y-8">
          
          <div className="border-b border-slate-100 dark:border-slate-800 pb-4">
            <span className="text-[11px] font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400 block mb-1">
              Tahap 2 – Konsep Lanjutan &amp; Wawasan Pedagogi
            </span>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              Materi Inti &amp; Catatan untuk Guru
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              Bahan bacaan ringkas dan padat untuk level pengajar, dilengkapi bedah miskonsepsi siswa dan analogi pengajaran.
            </p>
          </div>

          {/* Subtopic Tabs */}
          <div className="flex items-center gap-2 border-b border-slate-100 dark:border-slate-800 pb-2 overflow-x-auto">
            {module.conceptSections.map((sec, idx) => (
              <button
                key={sec.id}
                onClick={() => setActiveConceptTab(idx)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all shrink-0 ${
                  activeConceptTab === idx
                    ? 'bg-teal-600 text-white shadow-sm'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200'
                }`}
              >
                {sec.title}
              </button>
            ))}
          </div>

          {/* Active Concept Body */}
          {(() => {
            const sec = module.conceptSections[activeConceptTab];
            if (!sec) return null;

            return (
              <div className="space-y-6">
                
                {/* Summary Box */}
                <div className="text-sm leading-relaxed text-slate-800 dark:text-slate-200 bg-slate-50 dark:bg-slate-800/40 p-4 rounded-2xl border border-slate-200/80 dark:border-slate-700/80">
                  <p>{sec.summary}</p>
                </div>

                {/* Formulas / Rules Box */}
                {sec.formulaBox && sec.formulaBox.length > 0 && (
                  <div className="p-5 rounded-2xl bg-teal-50/50 dark:bg-teal-950/20 border border-teal-200 dark:border-teal-900 space-y-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-teal-800 dark:text-teal-300 flex items-center gap-1.5">
                      <Zap className="w-4 h-4 text-teal-600" />
                      Rumus Kunci &amp; Aturan Baku
                    </span>
                    <ul className="space-y-1.5 text-xs sm:text-sm text-slate-800 dark:text-slate-200 font-mono">
                      {sec.formulaBox.map((formula, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2">
                          <span className="text-teal-500 font-bold">•</span>
                          <span><MathText text={formula} /></span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Two Columns: Common Mistakes vs Pro Tips */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="p-5 rounded-2xl bg-rose-50/50 dark:bg-rose-950/20 border border-rose-200 dark:border-rose-900/60 space-y-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-rose-800 dark:text-rose-300 flex items-center gap-1.5">
                      <AlertTriangle className="w-4 h-4 text-rose-600" />
                      Common Mistakes (Kesalahan Umum)
                    </span>
                    <ul className="space-y-2 text-xs text-slate-700 dark:text-slate-300">
                      {sec.commonMistakes.map((mis, mIdx) => (
                        <li key={mIdx} className="flex items-start gap-2">
                          <span className="text-rose-500 font-bold">✕</span>
                          <span><MathText text={mis} /></span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-5 rounded-2xl bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-900/60 space-y-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 dark:text-emerald-300 flex items-center gap-1.5">
                      <Lightbulb className="w-4 h-4 text-emerald-600" />
                      Tips &amp; Trik Digital SAT
                    </span>
                    <ul className="space-y-2 text-xs text-slate-700 dark:text-slate-300">
                      {sec.proTips.map((tip, tIdx) => (
                        <li key={tIdx} className="flex items-start gap-2">
                          <span className="text-emerald-500 font-bold">✓</span>
                          <span><MathText text={tip} /></span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* DEDICATED TEACHER NOTES PANEL */}
                <div className="p-6 rounded-3xl bg-gradient-to-br from-amber-500/10 via-amber-500/5 to-transparent border border-amber-300 dark:border-amber-800/80 space-y-5">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-xl bg-amber-500 text-white flex items-center justify-center shadow-sm">
                      <BookmarkPlus className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="font-bold text-sm text-slate-900 dark:text-white">
                        Panel Khusus: Catatan untuk Guru (Pedagogy Toolkit)
                      </h3>
                      <p className="text-[11px] text-slate-500">
                        Strategi penyampaian di kelas, miskonsepsi siswa, dan pemantik diskusi
                      </p>
                    </div>
                  </div>

                  {/* Student Misconceptions */}
                  <div className="space-y-1.5">
                    <span className="text-xs font-bold text-amber-900 dark:text-amber-300 uppercase tracking-wider">
                      Miskonsepsi Siswa yang Kerap Terjadi:
                    </span>
                    <ul className="space-y-1 text-xs text-slate-700 dark:text-slate-300">
                      {sec.teacherNotes.studentMisconceptions.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-amber-600 font-bold">•</span>
                          <span><MathText text={item} /></span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Alternative Approaches */}
                  <div className="space-y-2">
                    <span className="text-xs font-bold text-amber-900 dark:text-amber-300 uppercase tracking-wider">
                      Pendekatan Alternatif Menjelaskan Konsep (2-3 Cara):
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {sec.teacherNotes.alternativeApproaches.map((app, idx) => (
                        <div key={idx} className="p-3 rounded-xl bg-white dark:bg-slate-800 border border-amber-200 dark:border-amber-900/60 text-xs">
                          <div className="font-bold text-slate-900 dark:text-white mb-1">
                            {idx + 1}. {app.name}
                          </div>
                          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                            {app.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Classroom Analogy */}
                  <div className="p-3.5 rounded-xl bg-amber-100/60 dark:bg-amber-950/40 text-xs text-amber-950 dark:text-amber-200 leading-relaxed">
                    <span className="font-bold block mb-1">Contoh Analogi di Kelas:</span>
                    <p className="italic">"{sec.teacherNotes.classroomAnalogy}"</p>
                  </div>

                  {/* Spark Questions */}
                  <div className="space-y-1.5">
                    <span className="text-xs font-bold text-amber-900 dark:text-amber-300 uppercase tracking-wider">
                      Pertanyaan Pemantik untuk Diskusi Kelas:
                    </span>
                    <ul className="space-y-1 text-xs text-slate-700 dark:text-slate-300">
                      {sec.teacherNotes.sparkQuestions.map((q, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-amber-600 font-bold">?</span>
                          <span className="italic font-medium"><MathText text={q} /></span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Proceed Button */}
                <div className="flex justify-between items-center pt-6 border-t border-slate-100 dark:border-slate-800">
                  <button
                    onClick={() => setActiveStage(1)}
                    className="px-4 py-2 rounded-xl text-xs font-semibold border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300"
                  >
                    Kembali ke Entry Ticket
                  </button>

                  <button
                    onClick={() => {
                      markStageCompleted(2);
                      setActiveStage(3);
                    }}
                    className="px-6 py-3 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs sm:text-sm shadow-md flex items-center gap-2"
                  >
                    <span>Lanjut ke Tahap 3: Contoh Soal &amp; Multi-Metode</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>

              </div>
            );
          })()}

        </div>
      )}

      {/* ========================================================================= */}
      {/* STAGE 3: CONTOH SOAL (WORKED EXAMPLES)                                    */}
      {/* ========================================================================= */}
      {activeStage === 3 && (
        <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-sm space-y-6">
          
          <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-4">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400 block mb-1">
                Tahap 3 – Bedah Contoh Soal Digital SAT
              </span>
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                Contoh Soal dengan Berbagai Metode Penyelesaian
              </h2>
            </div>
            <div className="flex items-center gap-2">
              {module.workedExamples.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setWorkedExampleIndex(idx)}
                  className={`w-7 h-7 rounded-lg text-xs font-bold transition-all ${
                    workedExampleIndex === idx
                      ? 'bg-teal-600 text-white'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                  }`}
                >
                  {idx + 1}
                </button>
              ))}
            </div>
          </div>

          {/* Current Example */}
          {(() => {
            const ex = module.workedExamples[workedExampleIndex];
            if (!ex) return null;
            const isRevealed = !!showWorkedSolution[ex.id];
            const activeMethodIdx = workedSelectedMethod[ex.id] || 0;

            return (
              <div className="space-y-6">
                
                {/* Passage if present */}
                {ex.passage && (
                  <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed italic">
                    "{ex.passage}"
                  </div>
                )}

                {/* Prompt */}
                {renderQuestionPrompt(ex)}

                {/* Options */}
                {ex.options && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {ex.options.map((opt, idx) => {
                      const letter = String.fromCharCode(65 + idx);
                      const isCorrect = letter === ex.correctAnswer;

                      return (
                        <div
                          key={idx}
                          className={`p-3 rounded-xl border text-xs sm:text-sm flex items-center gap-3 ${
                            isRevealed && isCorrect
                              ? 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-500 text-emerald-900 dark:text-emerald-200 font-bold'
                              : 'bg-white dark:bg-slate-800/60 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300'
                          }`}
                        >
                          <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                            isRevealed && isCorrect ? 'bg-emerald-600 text-white' : 'bg-slate-100 dark:bg-slate-700'
                          }`}>
                            {letter}
                          </span>
                          <MathText text={opt} />
                        </div>
                      );
                    })}
                  </div>
                )}

                {/* Reveal Solution Button */}
                <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-slate-100 dark:border-slate-800">
                  <button
                    onClick={() => setShowWorkedSolution(prev => ({ ...prev, [ex.id]: !prev[ex.id] }))}
                    className="px-4 py-2.5 rounded-xl font-bold text-xs bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:opacity-90 shadow-sm"
                  >
                    {isRevealed ? 'Sembunyikan Pembahasan' : 'Tampilkan Pembahasan (Coba Dulu)'}
                  </button>

                  <button
                    onClick={() => setGeminiQuestion(ex)}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-teal-50 dark:bg-teal-950 text-teal-700 dark:text-teal-300 border border-teal-200 dark:border-teal-800 hover:bg-teal-100"
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Tanya Gemini untuk Soal Ini</span>
                  </button>
                </div>

                {/* SOLUTION BODY */}
                {isRevealed && (
                  <div className="p-6 rounded-3xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 space-y-6 animate-in fade-in">
                    
                    {/* Key and Main Explanation */}
                    <div className="space-y-2">
                      <div className="inline-block px-3 py-1 rounded-lg bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 text-xs font-mono font-bold">
                        Kunci Jawaban: {ex.correctAnswer}
                      </div>
                      <div className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed">
                        <MathText text={ex.explanation} />
                      </div>
                    </div>

                    {/* MULTIPLE METHODS COMPARISON */}
                    {ex.methods && ex.methods.length > 0 && (
                      <div className="space-y-3 pt-3 border-t border-slate-200 dark:border-slate-700">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                            Perbandingan Beberapa Metode Penyelesaian:
                          </span>
                        </div>

                        {/* Method Tabs */}
                        <div className="flex items-center gap-2">
                          {ex.methods.map((m, mIdx) => (
                            <button
                              key={mIdx}
                              onClick={() => setWorkedSelectedMethod(prev => ({ ...prev, [ex.id]: mIdx }))}
                              className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-2 transition-all ${
                                activeMethodIdx === mIdx
                                  ? 'bg-teal-600 text-white shadow-sm'
                                  : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700'
                              }`}
                            >
                              <span>{m.title}</span>
                              <span className={`text-[10px] px-1.5 py-0.2 rounded font-bold ${
                                m.speedRating === 'Fast' 
                                  ? 'bg-emerald-400 text-emerald-950' 
                                  : 'bg-slate-200 text-slate-800 dark:bg-slate-700 dark:text-slate-200'
                              }`}>
                                {m.speedRating}
                              </span>
                            </button>
                          ))}
                        </div>

                        {/* Method Steps */}
                        {(() => {
                          const method = ex.methods[activeMethodIdx];
                          if (!method) return null;

                          return (
                            <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2 text-xs sm:text-sm">
                              <div className="font-bold text-teal-700 dark:text-teal-400 flex items-center justify-between">
                                <span>{method.title}</span>
                                <span className="text-xs font-normal text-slate-500">
                                  Efisiensi: <strong className="text-emerald-600 dark:text-emerald-400">{method.speedRating}</strong>
                                </span>
                              </div>
                              <ul className="space-y-1 text-slate-700 dark:text-slate-300">
                                {method.steps.map((st, sIdx) => (
                                  <li key={sIdx} className="leading-relaxed">
                                    <MathText text={st} />
                                  </li>
                                ))}
                              </ul>
                            </div>
                          );
                        })()}
                      </div>
                    )}

                    {/* Teacher Pitfall and Distractor Breakdown */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3 border-t border-slate-200 dark:border-slate-700">
                      
                      {ex.studentPitfall && (
                        <div className="p-4 rounded-2xl bg-rose-50/60 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-900 text-xs">
                          <span className="font-bold text-rose-800 dark:text-rose-300 block mb-1">
                            Kesalahan yang Mungkin Dilakukan Siswa:
                          </span>
                          <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                            <MathText text={ex.studentPitfall} />
                          </p>
                        </div>
                      )}

                      {ex.distractorAnalysis && (
                        <div className="p-4 rounded-2xl bg-amber-50/60 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900 text-xs">
                          <span className="font-bold text-amber-800 dark:text-amber-300 block mb-1">
                            Mengapa Pilihan Pengecoh Menggoda:
                          </span>
                          <div className="space-y-1.5 text-slate-700 dark:text-slate-300">
                            {Object.entries(ex.distractorAnalysis).map(([opt, desc]) => (
                              <div key={opt}>
                                <strong className="text-amber-700 dark:text-amber-400">{opt}:</strong>{' '}
                                <MathText text={desc} />
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                    </div>

                  </div>
                )}

                {/* Example Navigation */}
                <div className="flex items-center justify-between pt-6 border-t border-slate-100 dark:border-slate-800">
                  <button
                    onClick={() => setWorkedExampleIndex(prev => Math.max(0, prev - 1))}
                    disabled={workedExampleIndex === 0}
                    className="px-4 py-2 rounded-xl text-xs font-semibold border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 disabled:opacity-30"
                  >
                    Contoh Sebelumnya
                  </button>

                  {workedExampleIndex < module.workedExamples.length - 1 ? (
                    <button
                      onClick={() => setWorkedExampleIndex(prev => prev + 1)}
                      className="px-5 py-2 rounded-xl text-xs font-semibold bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900"
                    >
                      Contoh Berikutnya ({workedExampleIndex + 2} / 3)
                    </button>
                  ) : (
                    <button
                      onClick={() => {
                        markStageCompleted(3);
                        setActiveStage(4);
                      }}
                      className="px-6 py-2.5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs shadow-md flex items-center gap-2"
                    >
                      <span>Lanjut ke Tahap 4: Latihan Soal Mandiri</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  )}
                </div>

              </div>
            );
          })()}

        </div>
      )}

      {/* ========================================================================= */}
      {/* STAGE 4: LATIHAN SOAL (12 SOAL DENGAN TIMER & ERROR LOG)                  */}
      {/* ========================================================================= */}
      {activeStage === 4 && (
        <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-sm space-y-6">
          
          {/* Practice Top Header with Timer */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-100 dark:border-slate-800 pb-4">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400 block mb-1">
                Tahap 4 – Latihan Soal Mandiri (12 Soal Dominan Medium-Hard)
              </span>
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                Drill Soal Digital SAT &amp; Error Logging
              </h2>
            </div>

            {/* Timer and Pacing Widget */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setTimerEnabled(!timerEnabled)}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-mono font-bold transition-all ${
                  timerEnabled
                    ? 'bg-teal-50 dark:bg-teal-950 text-teal-700 dark:text-teal-300 border border-teal-200 dark:border-teal-800'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-400'
                }`}
                title={timerEnabled ? 'Klik untuk matikan timer' : 'Klik untuk hidupkan timer'}
              >
                <Clock className="w-3.5 h-3.5" />
                <span>{formatPacingTime(secondsElapsed)}</span>
              </button>

              <div className="text-[11px] text-slate-400 hidden sm:block">
                Target: {module.targetPacingSeconds}s/soal
              </div>
            </div>
          </div>

          {!practiceSubmitted ? (
            <>
              {/* Question Number Palette */}
              <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-700/80 flex items-center justify-between gap-2 overflow-x-auto">
                <div className="flex items-center gap-1.5">
                  {module.practiceQuestions.map((q, idx) => {
                    const isAnswered = !!practiceAnswers[q.id];
                    const isCurrent = practiceIndex === idx;
                    const isFlagged = practiceFlags[q.id];

                    return (
                      <button
                        key={q.id}
                        onClick={() => setPracticeIndex(idx)}
                        className={`relative w-8 h-8 rounded-xl font-bold text-xs transition-all ${
                          isCurrent
                            ? 'bg-teal-600 text-white ring-2 ring-teal-400/50 shadow-sm'
                            : isAnswered
                            ? 'bg-slate-200 dark:bg-slate-700 text-slate-900 dark:text-white'
                            : 'bg-white dark:bg-slate-800 text-slate-500 border border-slate-200 dark:border-slate-700'
                        }`}
                      >
                        {idx + 1}
                        {isFlagged && (
                          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-amber-500 ring-2 ring-white dark:ring-slate-900" />
                        )}
                      </button>
                    );
                  })}
                </div>

                {/* Flag current question button */}
                <button
                  onClick={() => {
                    const qId = module.practiceQuestions[practiceIndex].id;
                    setPracticeFlags(prev => ({ ...prev, [qId]: !prev[qId] }));
                  }}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                    practiceFlags[module.practiceQuestions[practiceIndex].id]
                      ? 'bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300 border border-amber-300'
                      : 'border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:bg-slate-100'
                  }`}
                >
                  <Flag className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Tandai untuk Ditinjau</span>
                </button>
              </div>

              {/* Current Practice Question Card */}
              {(() => {
                const q = module.practiceQuestions[practiceIndex];
                const chosen = practiceAnswers[q.id];
                const isHintShown = practiceHintsShown[q.id];

                return (
                  <div className="space-y-6">
                    
                    {/* Subtopic & Difficulty Badge */}
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                        {q.subtopic}
                      </span>
                      <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${
                        q.difficulty === 'hard' ? 'bg-rose-100 text-rose-700 dark:bg-rose-950 dark:text-rose-300' :
                        q.difficulty === 'medium' ? 'bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-300' :
                        'bg-teal-100 text-teal-700 dark:bg-teal-950 dark:text-teal-300'
                      }`}>
                        Level: {q.difficulty}
                      </span>
                    </div>

                    {q.passage && (
                      <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed italic">
                        "{q.passage}"
                      </div>
                    )}

                    {renderQuestionPrompt(q)}

                    {/* Hint Button & Display */}
                    {q.hint && (
                      <div className="space-y-2">
                        {!isHintShown ? (
                          <button
                            onClick={() => setPracticeHintsShown(prev => ({ ...prev, [q.id]: true }))}
                            className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-600 dark:text-amber-400 hover:underline"
                          >
                            <HelpCircle className="w-3.5 h-3.5" />
                            <span>Butuh Petunjuk? (Tampilkan Hint 1x)</span>
                          </button>
                        ) : (
                          <div className="p-3 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900/60 text-xs text-amber-900 dark:text-amber-200 leading-relaxed">
                            <strong>Hint:</strong> <MathText text={q.hint} />
                          </div>
                        )}
                      </div>
                    )}

                    {/* Answer Inputs (MCQ vs Student-Produced) */}
                    {q.type === 'multiple_choice' && q.options ? (
                      <div className="space-y-3 pt-2">
                        {q.options.map((opt, idx) => {
                          const letter = String.fromCharCode(65 + idx);
                          const isSelected = chosen === letter;

                          return (
                            <button
                              key={idx}
                              onClick={() => setPracticeAnswers(prev => ({ ...prev, [q.id]: letter }))}
                              className={`w-full text-left p-4 rounded-2xl border text-xs sm:text-sm flex items-center gap-3.5 transition-all ${
                                isSelected
                                  ? 'border-teal-500 bg-teal-50 dark:bg-teal-950/40 text-teal-900 dark:text-teal-200 font-semibold ring-1 ring-teal-500'
                                  : 'border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/60 text-slate-700 dark:text-slate-300'
                              }`}
                            >
                              <span className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${
                                isSelected
                                  ? 'bg-teal-600 text-white'
                                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                              }`}>
                                {letter}
                              </span>
                              <MathText text={opt} />
                            </button>
                          );
                        })}
                      </div>
                    ) : (
                      /* Student Produced Response (Numeric Text Input) */
                      <div className="space-y-2 pt-2">
                        <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300">
                          Jawaban Isian Singkat (Ketikkan angka atau pecahan):
                        </label>
                        <input
                          type="text"
                          value={chosen || ''}
                          onChange={(e) => setPracticeAnswers(prev => ({ ...prev, [q.id]: e.target.value }))}
                          placeholder="Misal: 14 atau 7/2 atau 3.5"
                          className="w-full sm:w-64 px-4 py-3 rounded-2xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-base font-mono font-bold text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                        />
                      </div>
                    )}

                    {/* Navigation Buttons */}
                    <div className="flex items-center justify-between pt-6 border-t border-slate-100 dark:border-slate-800">
                      <button
                        onClick={() => setPracticeIndex(prev => Math.max(0, prev - 1))}
                        disabled={practiceIndex === 0}
                        className="px-4 py-2 rounded-xl text-xs font-semibold border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 disabled:opacity-30"
                      >
                        Sebelumnya
                      </button>

                      {practiceIndex < module.practiceQuestions.length - 1 ? (
                        <button
                          onClick={() => setPracticeIndex(prev => prev + 1)}
                          className="px-5 py-2 rounded-xl text-xs font-semibold bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900"
                        >
                          Soal Berikutnya ({practiceIndex + 2} / {module.practiceQuestions.length})
                        </button>
                      ) : (
                        <button
                          onClick={handleSubmitPractice}
                          className="px-6 py-2.5 rounded-xl text-xs font-bold bg-teal-600 hover:bg-teal-700 text-white shadow-md"
                        >
                          Selesaikan Latihan ({Object.keys(practiceAnswers).length} / 12 Terjawab)
                        </button>
                      )}
                    </div>

                  </div>
                );
              })()}
            </>
          ) : (
            /* Practice Results & Error Logging Hub */
            <div className="space-y-6 animate-in fade-in">
              {(() => {
                const totalQ = module.practiceQuestions.length;
                const correctList: Question[] = [];
                const wrongList: Question[] = [];

                module.practiceQuestions.forEach(q => {
                  if (isAnswerCorrect(practiceAnswers[q.id], q.correctAnswer)) {
                    correctList.push(q);
                  } else {
                    wrongList.push(q);
                  }
                });

                const accuracy = Math.round((correctList.length / totalQ) * 100);
                const avgSeconds = totalQ > 0 ? Math.round(secondsElapsed / totalQ) : 0;

                return (
                  <div className="space-y-6">
                    {/* Score summary card */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-6 rounded-3xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
                      <div>
                        <span className="text-xs text-slate-500 font-medium block">Skor Latihan</span>
                        <div className="text-2xl font-extrabold text-slate-900 dark:text-white mt-1">
                          {correctList.length} / {totalQ} ({accuracy}%)
                        </div>
                      </div>
                      <div>
                        <span className="text-xs text-slate-500 font-medium block">Total Waktu Pengerjaan</span>
                        <div className="text-2xl font-extrabold text-teal-600 dark:text-teal-400 mt-1 font-mono">
                          {formatPacingTime(secondsElapsed)}
                        </div>
                      </div>
                      <div>
                        <span className="text-xs text-slate-500 font-medium block">Rata-rata Waktu per Soal</span>
                        <div className="text-2xl font-extrabold text-slate-900 dark:text-white mt-1 font-mono">
                          {avgSeconds} detik
                        </div>
                      </div>
                    </div>

                    {/* Breakdown of Missed Questions with Error Log Trigger */}
                    {wrongList.length > 0 ? (
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <h3 className="font-bold text-sm text-slate-900 dark:text-white flex items-center gap-2">
                            <AlertTriangle className="w-4 h-4 text-rose-500" />
                            Daftar Soal yang Belum Tepat ({wrongList.length} Soal):
                          </h3>
                          <span className="text-xs text-slate-500">
                            Simpan ke Error Log untuk refleksi penyebab kesalahan
                          </span>
                        </div>

                        <div className="space-y-4">
                          {wrongList.map((q, idx) => {
                            const userAns = practiceAnswers[q.id] || '(Kosong)';
                            const isLogged = loggedToErrorLog[q.id];

                            return (
                              <div 
                                key={q.id}
                                className="p-5 rounded-2xl bg-white dark:bg-slate-850 border border-slate-200 dark:border-slate-700 space-y-3"
                              >
                                <div className="flex items-center justify-between gap-2">
                                  <span className="text-xs font-bold px-2 py-0.5 rounded bg-rose-50 dark:bg-rose-950 text-rose-700 dark:text-rose-300">
                                    Soal #{module.practiceQuestions.findIndex(item => item.id === q.id) + 1} ({q.subtopic})
                                  </span>

                                  {isLogged ? (
                                    <span className="text-xs font-bold text-emerald-600 flex items-center gap-1">
                                      <CheckCircle2 className="w-3.5 h-3.5" />
                                      Tersimpan di Error Log
                                    </span>
                                  ) : (
                                    <button
                                      onClick={() => setShowErrorLogPromptFor(q)}
                                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-rose-50 hover:bg-rose-100 dark:bg-rose-950/60 text-rose-700 dark:text-rose-300 border border-rose-200 dark:border-rose-800"
                                    >
                                      <BookmarkPlus className="w-3.5 h-3.5" />
                                      <span>+ Catat ke Error Log</span>
                                    </button>
                                  )}
                                </div>

                                {renderQuestionPrompt(q, "text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200")}

                                <div className="flex items-center gap-3 text-xs font-mono p-2 rounded-lg bg-slate-50 dark:bg-slate-800">
                                  <span className="text-rose-600">Jawaban Anda: {userAns}</span>
                                  <span className="text-slate-300">|</span>
                                  <span className="text-emerald-600">Kunci Benar: {q.correctAnswer}</span>
                                </div>

                                <div className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed bg-slate-50/50 dark:bg-slate-900/40 p-3 rounded-xl">
                                  <strong className="block mb-1 text-slate-700 dark:text-slate-300">Pembahasan:</strong>
                                  <MathText text={q.explanation} />
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    ) : (
                      <div className="p-8 text-center rounded-2xl bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-900 text-emerald-800 dark:text-emerald-200">
                        <CheckCircle2 className="w-10 h-10 mx-auto text-emerald-500 mb-2" />
                        <h4 className="font-bold text-base">Luar Biasa! Skor Sempurna (12/12)</h4>
                        <p className="text-xs mt-1 text-emerald-700 dark:text-emerald-300">
                          Seluruh soal latihan dikerjakan dengan benar tanpa ada kesalahan.
                        </p>
                      </div>
                    )}

                    {/* Bottom Action */}
                    <div className="flex justify-between items-center pt-6 border-t border-slate-100 dark:border-slate-800">
                      <button
                        onClick={() => {
                          setPracticeSubmitted(false);
                          setPracticeIndex(0);
                        }}
                        className="px-4 py-2 rounded-xl text-xs font-semibold border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 flex items-center gap-1.5"
                      >
                        <RotateCcw className="w-3.5 h-3.5" />
                        <span>Ulangi Latihan</span>
                      </button>

                      <button
                        onClick={() => {
                          markStageCompleted(4);
                          setActiveStage(5);
                        }}
                        className="px-6 py-3 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs sm:text-sm shadow-md flex items-center gap-2"
                      >
                        <span>Lanjut ke Tahap 5: Exit Ticket</span>
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>

                  </div>
                );
              })()}
            </div>
          )}

        </div>
      )}

      {/* ========================================================================= */}
      {/* STAGE 5: EXIT TICKET & ENTRY VS EXIT COMPARISON                           */}
      {/* ========================================================================= */}
      {activeStage === 5 && (
        <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-sm space-y-6">
          
          <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-4">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400 block mb-1">
                Tahap 5 – Post-Assessment &amp; Analisis Tuntas
              </span>
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                Exit Ticket (5 Soal Baru Setara Entry Ticket)
              </h2>
            </div>
            <div className="text-xs font-semibold text-slate-500">
              Soal {exitIndex + 1} dari {module.exitTicket.length}
            </div>
          </div>

          {!exitSubmitted ? (
            <>
              {(() => {
                const currentQ = module.exitTicket[exitIndex];
                const chosen = exitAnswers[currentQ.id];

                return (
                  <div className="space-y-6">
                    {currentQ.passage && (
                      <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed italic">
                        "{currentQ.passage}"
                      </div>
                    )}

                    {renderQuestionPrompt(currentQ)}

                    {currentQ.options && (
                      <div className="space-y-3 pt-2">
                        {currentQ.options.map((opt, idx) => {
                          const letter = String.fromCharCode(65 + idx);
                          const isSelected = chosen === letter;

                          return (
                            <button
                              key={idx}
                              onClick={() => setExitAnswers(prev => ({ ...prev, [currentQ.id]: letter }))}
                              className={`w-full text-left p-4 rounded-2xl border text-xs sm:text-sm flex items-center gap-3.5 transition-all ${
                                isSelected
                                  ? 'border-teal-500 bg-teal-50 dark:bg-teal-950/40 text-teal-900 dark:text-teal-200 font-semibold ring-1 ring-teal-500'
                                  : 'border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/60 text-slate-700 dark:text-slate-300'
                              }`}
                            >
                              <span className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${
                                isSelected
                                  ? 'bg-teal-600 text-white'
                                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                              }`}>
                                {letter}
                              </span>
                              <MathText text={opt} />
                            </button>
                          );
                        })}
                      </div>
                    )}

                    {/* Navigation Buttons */}
                    <div className="flex items-center justify-between pt-6 border-t border-slate-100 dark:border-slate-800">
                      <button
                        onClick={() => setExitIndex(prev => Math.max(0, prev - 1))}
                        disabled={exitIndex === 0}
                        className="px-4 py-2 rounded-xl text-xs font-semibold border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 disabled:opacity-30"
                      >
                        Sebelumnya
                      </button>

                      {exitIndex < module.exitTicket.length - 1 ? (
                        <button
                          onClick={() => setExitIndex(prev => prev + 1)}
                          className="px-5 py-2 rounded-xl text-xs font-semibold bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900"
                        >
                          Selanjutnya
                        </button>
                      ) : (
                        <button
                          onClick={handleSubmitExitTicket}
                          disabled={Object.keys(exitAnswers).length < module.exitTicket.length}
                          className="px-6 py-2.5 rounded-xl text-xs font-bold bg-teal-600 hover:bg-teal-700 text-white shadow-md disabled:opacity-40"
                        >
                          Selesaikan Exit Ticket &amp; Evaluasi Delta
                        </button>
                      )}
                    </div>
                  </div>
                );
              })()}
            </>
          ) : (
            /* FINAL ASSESSMENT: ENTRY VS EXIT COMPARISON & PEDAGOGICAL ANALYSIS */
            <div className="space-y-8 animate-in fade-in">
              {(() => {
                const entryAttempt = currentModuleProgress.entryAttempt;
                const entryCorrect = entryAttempt ? entryAttempt.score : 0;
                const exitCorrect = module.exitTicket.filter(q => isAnswerCorrect(exitAnswers[q.id], q.correctAnswer)).length;
                const deltaResult = analyzeEntryExitDelta(entryCorrect, exitCorrect, 5);

                return (
                  <div className="space-y-8">
                    
                    {/* Visual Comparison Delta Banner */}
                    <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-teal-950 text-white border border-slate-700 space-y-6">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div>
                          <span className="text-xs font-semibold uppercase tracking-wider text-teal-400 block mb-1">
                            Laporan Hasil Evaluasi Modul
                          </span>
                          <h3 className="text-xl sm:text-2xl font-bold">
                            Perbandingan Entry Ticket vs Exit Ticket
                          </h3>
                        </div>

                        <div className={`px-4 py-2 rounded-2xl text-xs font-bold border ${
                          deltaResult.masteryAchieved
                            ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40'
                            : 'bg-amber-500/20 text-amber-300 border-amber-500/40'
                        }`}>
                          {deltaResult.masteryAchieved ? 'Status: MODUL TUNTAS' : 'Status: PERLU PERBAIKAN'}
                        </div>
                      </div>

                      {/* Visual Score Bars */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                        <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700 space-y-2">
                          <div className="flex justify-between text-xs">
                            <span className="text-slate-400">Entry Ticket (Sebelum Belajar):</span>
                            <span className="font-bold text-slate-200">{deltaResult.entryScore}/5 ({deltaResult.entryPercentage}%)</span>
                          </div>
                          <div className="w-full bg-slate-700 rounded-full h-3 overflow-hidden">
                            <div 
                              className="bg-slate-400 h-full rounded-full transition-all duration-700" 
                              style={{ width: `${deltaResult.entryPercentage}%` }}
                            />
                          </div>
                        </div>

                        <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700 space-y-2">
                          <div className="flex justify-between text-xs">
                            <span className="text-slate-400">Exit Ticket (Setelah Belajar):</span>
                            <span className="font-bold text-emerald-400">{deltaResult.exitScore}/5 ({deltaResult.exitPercentage}%)</span>
                          </div>
                          <div className="w-full bg-slate-700 rounded-full h-3 overflow-hidden">
                            <div 
                              className={`h-full rounded-full transition-all duration-700 ${
                                deltaResult.masteryAchieved ? 'bg-emerald-400' : 'bg-amber-400'
                              }`} 
                              style={{ width: `${deltaResult.exitPercentage}%` }}
                            />
                          </div>
                        </div>
                      </div>

                      {/* Delta Calculation */}
                      <div className="p-4 rounded-2xl bg-slate-800/50 border border-slate-700/60 flex items-center justify-between text-xs sm:text-sm">
                        <span className="text-slate-300 font-medium">Perubahan Pemahaman (Delta):</span>
                        <div className="flex items-center gap-1.5 font-bold font-mono">
                          <span className={`text-base ${deltaResult.deltaPercentage >= 0 ? 'text-teal-400' : 'text-rose-400'}`}>
                            {deltaResult.deltaPercentage >= 0 ? `+${deltaResult.deltaPercentage}%` : `${deltaResult.deltaPercentage}%`}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Pedagogical Recommendation Box */}
                    <div className={`p-6 rounded-3xl border ${
                      deltaResult.masteryAchieved 
                        ? 'bg-teal-50/60 dark:bg-teal-950/20 border-teal-200 dark:border-teal-900' 
                        : 'bg-amber-50/60 dark:bg-amber-950/20 border-amber-200 dark:border-amber-900'
                    } space-y-3`}>
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
                        Rekomendasi Langkah Berikutnya:
                      </span>
                      <p className="text-sm font-semibold text-slate-800 dark:text-slate-200 leading-relaxed">
                        {deltaResult.recommendation}
                      </p>
                    </div>

                    {/* Teacher Reflection Box */}
                    <div className="p-6 rounded-3xl bg-white dark:bg-slate-850 border border-slate-200 dark:border-slate-700 space-y-4 text-xs sm:text-sm">
                      <h4 className="font-bold text-slate-900 dark:text-white">
                        Refleksi Akhir Guru
                      </h4>

                      <div>
                        <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-2">
                          Kepercayaan diri saya untuk mengajarkan materi ini di kelas (1 - 5):
                        </label>
                        <div className="flex items-center gap-2">
                          {[1, 2, 3, 4, 5].map((num) => (
                            <button
                              key={num}
                              onClick={() => setExitConfidence(num)}
                              className={`w-9 h-9 rounded-xl font-bold flex items-center justify-center transition-all ${
                                exitConfidence === num
                                  ? 'bg-teal-600 text-white shadow-sm'
                                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200'
                              }`}
                            >
                              <Star className={`w-4 h-4 ${exitConfidence >= num ? 'fill-current' : ''}`} />
                            </button>
                          ))}
                          <span className="ml-2 text-xs text-slate-500">
                            {exitConfidence === 5 ? 'Sangat Siap Mengajar' : exitConfidence === 1 ? 'Perlu Pendalaman' : 'Cukup Siap'}
                          </span>
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                          Satu hal spesifik yang masih perlu saya perdalam sebelum mengajar:
                        </label>
                        <input
                          type="text"
                          value={exitDeepenTopic}
                          onChange={(e) => setExitDeepenTopic(e.target.value)}
                          placeholder="Misal: variasi trik Desmos untuk soal no-solution, atau penjelasan kofungsi radian..."
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                        />
                      </div>
                    </div>

                    {/* Exit Ticket Answer Keys Breakdown */}
                    <div className="space-y-4">
                      <h4 className="font-bold text-sm text-slate-900 dark:text-white">
                        Kunci &amp; Pembahasan 5 Soal Exit Ticket:
                      </h4>
                      <div className="space-y-3">
                        {module.exitTicket.map((q, idx) => {
                          const userAns = exitAnswers[q.id];
                          const isCorrect = isAnswerCorrect(userAns, q.correctAnswer);

                          return (
                            <div key={q.id} className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 space-y-2 text-xs">
                              <div className="flex items-center justify-between">
                                <span className="font-bold text-slate-700 dark:text-slate-300">
                                  Exit Soal #{idx + 1} ({q.subtopic})
                                </span>
                                <span className={`font-bold px-2 py-0.5 rounded ${
                                  isCorrect ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300' : 'bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300'
                                }`}>
                                  Jawaban Anda: {userAns || '—'} (Kunci: {q.correctAnswer})
                                </span>
                              </div>
                              {renderQuestionPrompt(q, "text-slate-800 dark:text-slate-200 font-medium")}
                              <div className="text-slate-600 dark:text-slate-400 italic">
                                <MathText text={q.explanation} />
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-slate-100 dark:border-slate-800">
                      <button
                        onClick={onBackToDashboard}
                        className="px-5 py-2.5 rounded-xl text-xs font-semibold border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300"
                      >
                        Kembali ke Dashboard
                      </button>

                      {onGoToNextModule && (
                        <button
                          onClick={onGoToNextModule}
                          className="px-6 py-3 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs sm:text-sm shadow-md flex items-center gap-2"
                        >
                          <span>Lanjut ke Modul Pembelajaran Berikutnya</span>
                          <ChevronRight className="w-4 h-4" />
                        </button>
                      )}
                    </div>

                  </div>
                );
              })()}
            </div>
          )}

        </div>
      )}

      {/* ERROR LOG MODAL ENTRY PROMPT (When clicked from missed question) */}
      {showErrorLogPromptFor && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in">
          <div className="bg-white dark:bg-slate-900 rounded-3xl max-w-md w-full p-6 shadow-2xl border border-slate-200 dark:border-slate-800 space-y-4">
            <h4 className="font-bold text-sm text-slate-900 dark:text-white flex items-center gap-2">
              <BookmarkPlus className="w-4 h-4 text-rose-600" />
              Catat Soal Ini ke Error Log
            </h4>
            
            <p className="text-xs text-slate-600 dark:text-slate-400">
              Pilih klasifikasi penyebab kekeliruan Anda untuk memetakan kebiasaan berpikir:
            </p>

            <div className="grid grid-cols-2 gap-2">
              {(['konsep', 'ceroboh', 'waktu', 'strategi'] as const).map(cat => (
                <button
                  key={cat}
                  onClick={() => setErrorCategoryInput(cat)}
                  className={`p-2.5 rounded-xl border text-xs font-bold capitalize transition-all ${
                    errorCategoryInput === cat
                      ? 'bg-rose-50 dark:bg-rose-950/50 border-rose-500 text-rose-700 dark:text-rose-300'
                      : 'border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Catatan Refleksi Pribadi:
              </label>
              <textarea
                value={errorTeacherNotesInput}
                onChange={(e) => setErrorTeacherNotesInput(e.target.value)}
                placeholder="Contoh: Terburu-buru saat eliminasi tanda minus, atau terkecoh oleh kata 'except'..."
                className="w-full p-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-rose-500"
                rows={3}
              />
            </div>

            <div className="flex justify-end gap-2 pt-2">
              <button
                onClick={() => setShowErrorLogPromptFor(null)}
                className="px-4 py-2 rounded-xl text-xs font-semibold border border-slate-200 dark:border-slate-700 text-slate-600"
              >
                Batal
              </button>
              <button
                onClick={handleSaveToErrorLog}
                className="px-5 py-2 rounded-xl text-xs font-bold bg-rose-600 hover:bg-rose-700 text-white shadow-sm"
              >
                Simpan ke Buku Catatan
              </button>
            </div>
          </div>
        </div>
      )}

      {/* GEMINI AI ASSISTANT MODAL */}
      {geminiQuestion && (
        <GeminiModal
          isOpen={!!geminiQuestion}
          onClose={() => setGeminiQuestion(null)}
          question={geminiQuestion}
        />
      )}

    </div>
  );
};
