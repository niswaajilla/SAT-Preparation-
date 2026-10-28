import React, { useState, useMemo } from 'react';
import { 
  Presentation, 
  Printer, 
  Shuffle, 
  Clock, 
  MessageSquare, 
  ChevronRight, 
  ChevronLeft, 
  Eye, 
  EyeOff, 
  Play, 
  Pause, 
  RotateCcw, 
  Download, 
  CheckCircle2, 
  BookOpen, 
  Sparkles,
  Layers
} from 'lucide-react';
import { ModuleData, Question, Difficulty } from '../types';
import { allModules, getRandomQuizQuestions } from '../data';
import { MathText } from './MathText';

interface TeachingModeViewProps {
  onBackToLearnMode: () => void;
}

export const TeachingModeView: React.FC<TeachingModeViewProps> = ({
  onBackToLearnMode
}) => {
  const [activeTab, setActiveTab] = useState<'projector' | 'print' | 'generator' | 'lesson_plan'>('projector');
  const [selectedModuleId, setSelectedModuleId] = useState<string>(allModules[0].id);

  const currentModule = useMemo(() => {
    return allModules.find(m => m.id === selectedModuleId) || allModules[0];
  }, [selectedModuleId]);

  /* ==============================================================
     1. PROJECTION MODE STATE
     ============================================================== */
  const [projSetType, setProjSetType] = useState<'entry' | 'practice' | 'exit'>('entry');
  const [projIndex, setProjIndex] = useState<number>(0);
  const [showTeacherKey, setShowTeacherKey] = useState<boolean>(false);
  const [timerSeconds, setTimerSeconds] = useState<number>(120); // 2 minutes per question
  const [timerRunning, setTimerRunning] = useState<boolean>(false);

  const projectionQuestions = useMemo(() => {
    if (projSetType === 'entry') return currentModule.entryTicket;
    if (projSetType === 'practice') return currentModule.practiceQuestions;
    return currentModule.exitTicket;
  }, [currentModule, projSetType]);

  // Projector countdown timer
  React.useEffect(() => {
    let interval: any = null;
    if (timerRunning && timerSeconds > 0) {
      interval = setInterval(() => {
        setTimerSeconds(prev => prev - 1);
      }, 1000);
    } else if (timerSeconds === 0) {
      setTimerRunning(false);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [timerRunning, timerSeconds]);

  /* ==============================================================
     2. PRINT WORKSHEET STATE
     ============================================================== */
  const [printTab, setPrintTab] = useState<'student_sheet' | 'teacher_key'>('student_sheet');
  const [includeTranslationInPrint, setIncludeTranslationInPrint] = useState(false);

  const handlePrint = () => {
    window.print();
  };

  /* ==============================================================
     3. RANDOM QUIZ GENERATOR STATE
     ============================================================== */
  const [genCount, setGenCount] = useState<number>(10);
  const [genDifficulty, setGenDifficulty] = useState<Difficulty | 'all'>('all');
  const [genSelectedModules, setGenSelectedModules] = useState<string[]>([allModules[0].id]);
  const [generatedQuestions, setGeneratedQuestions] = useState<Question[]>([]);
  const [genGenerated, setGenGenerated] = useState<boolean>(false);

  const handleGenerateQuiz = () => {
    const questions = getRandomQuizQuestions({
      moduleIds: genSelectedModules.length > 0 ? genSelectedModules : undefined,
      count: genCount,
      difficulty: genDifficulty
    });
    setGeneratedQuestions(questions);
    setGenGenerated(true);
  };

  const handleToggleModuleForGen = (modId: string) => {
    setGenSelectedModules(prev => {
      if (prev.includes(modId)) {
        if (prev.length === 1) return prev; // keep at least 1
        return prev.filter(id => id !== modId);
      }
      return [...prev, modId];
    });
  };

  return (
    <div className="space-y-8 pb-20">
      
      {/* Top Banner & Module Selector */}
      <div className="no-print bg-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 text-xs font-semibold mb-3 border border-teal-500/30">
            <Presentation className="w-3.5 h-3.5 text-teal-400" />
            <span>Mode Mengajar – Toolkit Guru Profesional</span>
          </div>
          <h1 className="text-xl sm:text-2xl font-bold tracking-tight">
            Perangkat Pengajaran &amp; Bahan Kelas
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-xl leading-relaxed">
            Siapkan slide proyeksi tanpa kunci jawaban untuk siswa, cetak lembar soal mandiri, buat kuis acak, dan jalankan alur pelajaran 45 menit.
          </p>
        </div>

        {/* Module Picker */}
        <div className="w-full md:w-72 space-y-1.5 shrink-0">
          <label className="text-xs font-semibold text-slate-400">Pilih Modul Pembelajaran:</label>
          <select
            value={selectedModuleId}
            onChange={(e) => {
              setSelectedModuleId(e.target.value);
              setProjIndex(0);
              setTimerRunning(false);
              setTimerSeconds(120);
            }}
            className="w-full px-3.5 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-white text-xs font-medium focus:ring-2 focus:ring-teal-500 focus:outline-none"
          >
            <optgroup label="Math Modules">
              {allModules.filter(m => m.domain === 'math').map(m => (
                <option key={m.id} value={m.id}>{m.title}</option>
              ))}
            </optgroup>
            <optgroup label="Reading & Writing Modules">
              {allModules.filter(m => m.domain === 'reading_writing').map(m => (
                <option key={m.id} value={m.id}>{m.title}</option>
              ))}
            </optgroup>
          </select>
        </div>
      </div>

      {/* Toolkit Tabs Navigation */}
      <div className="no-print flex items-center gap-2 p-1 bg-slate-100 dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 overflow-x-auto text-xs font-semibold">
        <button
          onClick={() => setActiveTab('projector')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl transition-all shrink-0 ${
            activeTab === 'projector'
              ? 'bg-white dark:bg-slate-900 text-teal-700 dark:text-teal-300 shadow-sm'
              : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
          }`}
        >
          <Presentation className="w-4 h-4" />
          <span>1. Tampilan Siap Proyeksi</span>
        </button>

        <button
          onClick={() => setActiveTab('print')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl transition-all shrink-0 ${
            activeTab === 'print'
              ? 'bg-white dark:bg-slate-900 text-teal-700 dark:text-teal-300 shadow-sm'
              : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
          }`}
        >
          <Printer className="w-4 h-4" />
          <span>2. Cetak / Simpan PDF</span>
        </button>

        <button
          onClick={() => setActiveTab('generator')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl transition-all shrink-0 ${
            activeTab === 'generator'
              ? 'bg-white dark:bg-slate-900 text-teal-700 dark:text-teal-300 shadow-sm'
              : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
          }`}
        >
          <Shuffle className="w-4 h-4" />
          <span>3. Generator Set Soal Acak</span>
        </button>

        <button
          onClick={() => setActiveTab('lesson_plan')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl transition-all shrink-0 ${
            activeTab === 'lesson_plan'
              ? 'bg-white dark:bg-slate-900 text-teal-700 dark:text-teal-300 shadow-sm'
              : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
          }`}
        >
          <Clock className="w-4 h-4" />
          <span>4. Alur 45 Menit &amp; Bank Diskusi</span>
        </button>
      </div>

      {/* ========================================================================= */}
      {/* 1. TAMPILAN SIAP PROYEKSI (PROJECTION MODE)                              */}
      {/* ========================================================================= */}
      {activeTab === 'projector' && (
        <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-10 shadow-lg space-y-6">
          
          {/* Projector Controls Strip */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 dark:border-slate-800 pb-4">
            
            {/* Set Selector */}
            <div className="flex items-center gap-1.5 p-1 bg-slate-100 dark:bg-slate-800 rounded-xl text-xs font-semibold">
              <button
                onClick={() => { setProjSetType('entry'); setProjIndex(0); }}
                className={`px-3 py-1.5 rounded-lg ${projSetType === 'entry' ? 'bg-white dark:bg-slate-900 text-teal-600 shadow-sm' : 'text-slate-500'}`}
              >
                Entry Ticket (5)
              </button>
              <button
                onClick={() => { setProjSetType('practice'); setProjIndex(0); }}
                className={`px-3 py-1.5 rounded-lg ${projSetType === 'practice' ? 'bg-white dark:bg-slate-900 text-teal-600 shadow-sm' : 'text-slate-500'}`}
              >
                Latihan Soal (12)
              </button>
              <button
                onClick={() => { setProjSetType('exit'); setProjIndex(0); }}
                className={`px-3 py-1.5 rounded-lg ${projSetType === 'exit' ? 'bg-white dark:bg-slate-900 text-teal-600 shadow-sm' : 'text-slate-500'}`}
              >
                Exit Ticket (5)
              </button>
            </div>

            {/* Classroom Timer Widget */}
            <div className="flex items-center gap-2">
              <div className="px-3.5 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 font-mono font-bold text-sm text-slate-800 dark:text-slate-200 flex items-center gap-2">
                <Clock className="w-4 h-4 text-teal-500" />
                <span>
                  {Math.floor(timerSeconds / 60)}:{timerSeconds % 60 < 10 ? `0${timerSeconds % 60}` : timerSeconds % 60}
                </span>
              </div>
              <button
                onClick={() => setTimerRunning(!timerRunning)}
                className="p-2 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:opacity-90"
                title={timerRunning ? 'Jeda Timer' : 'Mulai Timer'}
              >
                {timerRunning ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
              </button>
              <button
                onClick={() => { setTimerRunning(false); setTimerSeconds(120); }}
                className="p-2 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-500 hover:bg-slate-100"
                title="Reset Timer ke 2 Menit"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Teacher Toggle for Answer Key */}
            <button
              onClick={() => setShowTeacherKey(!showTeacherKey)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                showTeacherKey
                  ? 'bg-amber-100 dark:bg-amber-950 text-amber-900 dark:text-amber-200 border border-amber-300'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200'
              }`}
            >
              {showTeacherKey ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              <span>{showTeacherKey ? 'Sembunyikan Kunci Guru' : 'Tampilkan Kunci & Solusi Guru'}</span>
            </button>
          </div>

          {/* Jumbo Slide Card */}
          {(() => {
            const currentQ = projectionQuestions[projIndex];
            if (!currentQ) return null;

            return (
              <div className="space-y-8 min-h-[420px] flex flex-col justify-between">
                <div className="space-y-6">
                  
                  {/* Slide Sub-Header */}
                  <div className="flex items-center justify-between text-xs font-semibold text-slate-400">
                    <span>{currentModule.title} • {currentQ.subtopic}</span>
                    <span className="font-mono bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full text-slate-700 dark:text-slate-300">
                      Soal {projIndex + 1} dari {projectionQuestions.length}
                    </span>
                  </div>

                  {/* Passage if Reading */}
                  {currentQ.passage && (
                    <div className="p-6 rounded-3xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-base sm:text-lg leading-relaxed text-slate-800 dark:text-slate-200 italic font-serif">
                      "{currentQ.passage}"
                    </div>
                  )}

                  {/* Jumbo Prompt */}
                  <div className="space-y-3">
                    <div className="text-lg sm:text-2xl font-bold text-slate-900 dark:text-white leading-relaxed">
                      <MathText text={currentQ.prompt} />
                    </div>
                    {currentQ.promptId && (
                      <details className="text-sm text-slate-500 dark:text-slate-400 select-none">
                        <summary className="cursor-pointer inline-flex items-center gap-1.5 font-medium text-teal-600 dark:text-teal-400 hover:underline">
                          <span>🇮🇩 Tampilkan Terjemahan Soal (Bahasa Indonesia)</span>
                        </summary>
                        <div className="mt-2 p-4 rounded-2xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-base font-normal italic">
                          <MathText text={currentQ.promptId} />
                        </div>
                      </details>
                    )}
                  </div>

                  {/* Jumbo Options */}
                  {currentQ.options && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                      {currentQ.options.map((opt, idx) => {
                        const letter = String.fromCharCode(65 + idx);
                        const isCorrect = letter === currentQ.correctAnswer;

                        return (
                          <div
                            key={idx}
                            className={`p-5 rounded-2xl border text-sm sm:text-base flex items-center gap-4 transition-all ${
                              showTeacherKey && isCorrect
                                ? 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-500 text-emerald-900 dark:text-emerald-200 font-bold ring-2 ring-emerald-500/30'
                                : 'bg-white dark:bg-slate-800/60 border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200'
                            }`}
                          >
                            <span className={`w-9 h-9 rounded-xl flex items-center justify-center font-bold text-sm shrink-0 ${
                              showTeacherKey && isCorrect
                                ? 'bg-emerald-600 text-white'
                                : 'bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300'
                            }`}>
                              {letter}
                            </span>
                            <div className="leading-snug">
                              <MathText text={opt} />
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}

                  {/* TEACHER SECRET REVEAL PANEL */}
                  {showTeacherKey && (
                    <div className="p-6 rounded-3xl bg-amber-50/60 dark:bg-amber-950/30 border border-amber-300 dark:border-amber-900 space-y-3 text-xs sm:text-sm animate-in fade-in">
                      <div className="flex items-center gap-2 text-amber-900 dark:text-amber-200 font-bold">
                        <Sparkles className="w-4 h-4 text-amber-600" />
                        <span>Kunci Jawaban: {currentQ.correctAnswer}</span>
                      </div>
                      <div className="text-slate-800 dark:text-slate-200 leading-relaxed">
                        <MathText text={currentQ.explanation} />
                      </div>
                      {currentQ.studentPitfall && (
                        <div className="pt-2 text-rose-700 dark:text-rose-400 italic">
                          <strong>Waspadai di kelas:</strong> {currentQ.studentPitfall}
                        </div>
                      )}
                    </div>
                  )}

                </div>

                {/* Slide Bottom Switcher */}
                <div className="flex items-center justify-between pt-6 border-t border-slate-100 dark:border-slate-800">
                  <button
                    onClick={() => {
                      setProjIndex(prev => Math.max(0, prev - 1));
                      setTimerSeconds(120);
                    }}
                    disabled={projIndex === 0}
                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold border border-slate-200 dark:border-slate-700 disabled:opacity-30"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    <span>Soal Sebelumnya</span>
                  </button>

                  <div className="flex items-center gap-1.5">
                    {projectionQuestions.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => {
                          setProjIndex(idx);
                          setTimerSeconds(120);
                        }}
                        className={`w-7 h-7 rounded-lg text-xs font-bold transition-all ${
                          projIndex === idx
                            ? 'bg-teal-600 text-white'
                            : 'bg-slate-100 dark:bg-slate-800 text-slate-500'
                        }`}
                      >
                        {idx + 1}
                      </button>
                    ))}
                  </div>

                  <button
                    onClick={() => {
                      setProjIndex(prev => Math.min(projectionQuestions.length - 1, prev + 1));
                      setTimerSeconds(120);
                    }}
                    disabled={projIndex === projectionQuestions.length - 1}
                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold bg-slate-900 dark:bg-white text-white dark:text-slate-900 disabled:opacity-30"
                  >
                    <span>Soal Berikutnya</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>

              </div>
            );
          })()}

        </div>
      )}

      {/* ========================================================================= */}
      {/* 2. CETAK / SIMPAN PDF (PRINTABLE WORKSHEETS)                             */}
      {/* ========================================================================= */}
      {activeTab === 'print' && (
        <div className="space-y-6">
          
          {/* Action Bar */}
          <div className="no-print bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-sm">
            <div className="flex items-center gap-2 p-1 bg-slate-100 dark:bg-slate-800 rounded-xl text-xs font-semibold">
              <button
                onClick={() => setPrintTab('student_sheet')}
                className={`px-3 py-1.5 rounded-lg ${printTab === 'student_sheet' ? 'bg-white dark:bg-slate-900 text-teal-600 shadow-sm' : 'text-slate-500'}`}
              >
                Lembar Soal Siswa (Tanpa Kunci)
              </button>
              <button
                onClick={() => setPrintTab('teacher_key')}
                className={`px-3 py-1.5 rounded-lg ${printTab === 'teacher_key' ? 'bg-white dark:bg-slate-900 text-teal-600 shadow-sm' : 'text-slate-500'}`}
              >
                Lembar Kunci &amp; Panduan Guru
              </button>
            </div>

            <div className="flex items-center gap-4">
              <label className="flex items-center gap-2 text-xs font-medium text-slate-700 dark:text-slate-300 cursor-pointer select-none">
                <input 
                  type="checkbox" 
                  checked={includeTranslationInPrint} 
                  onChange={e => setIncludeTranslationInPrint(e.target.checked)} 
                  className="rounded text-teal-600 focus:ring-teal-500 w-4 h-4" 
                />
                <span>Sertakan Terjemahan ID (Bilingual)</span>
              </label>

              <button
                onClick={handlePrint}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs shadow-md"
              >
                <Printer className="w-4 h-4" />
                <span>Cetak Sekarang / Simpan PDF</span>
              </button>
            </div>
          </div>

          {/* Printable Document Canvas */}
          <div className="print-card bg-white text-slate-900 p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-sm space-y-8 font-sans max-w-4xl mx-auto">
            
            {/* Header Ujian */}
            <div className="border-b-2 border-slate-900 pb-4 flex justify-between items-start">
              <div>
                <h2 className="text-xl font-extrabold uppercase tracking-wide">
                  SAT Teacher Lab – {currentModule.title}
                </h2>
                <p className="text-xs text-slate-600 mt-0.5">
                  {printTab === 'student_sheet' ? 'Lembar Kerja Latihan Mandiri Siswa' : 'Lembar Kunci Jawaban & Panduan Pembahasan Guru'}
                </p>
              </div>

              {printTab === 'student_sheet' ? (
                <div className="text-xs text-right space-y-1 font-mono">
                  <div>Nama: _______________________</div>
                  <div>Tanggal: _____________________</div>
                  <div>Kelas: ______________________</div>
                  <div>Skor: ______ / {currentModule.practiceQuestions.length}</div>
                </div>
              ) : (
                <div className="text-xs text-right font-mono text-teal-800 font-bold bg-teal-50 p-2 rounded-lg border border-teal-200">
                  TEACHER MASTER KEY
                </div>
              )}
            </div>

            {/* Questions List */}
            <div className="space-y-6">
              {currentModule.practiceQuestions.map((q, idx) => (
                <div key={q.id} className="space-y-2 border-b border-slate-100 pb-4">
                  <div className="flex items-baseline justify-between text-xs text-slate-500 mb-1">
                    <span className="font-bold text-slate-900">Soal #{idx + 1} ({q.subtopic})</span>
                    <span className="capitalize text-[10px] bg-slate-100 px-2 py-0.5 rounded">Level: {q.difficulty}</span>
                  </div>

                  {q.passage && (
                    <div className="p-3 bg-slate-50 border-l-2 border-slate-400 text-xs italic text-slate-700 leading-relaxed font-serif">
                      "{q.passage}"
                    </div>
                  )}

                  <div className="text-sm font-semibold text-slate-900">
                    <MathText text={q.prompt} />
                  </div>

                  {includeTranslationInPrint && q.promptId && (
                    <div className="text-xs italic text-slate-600 bg-slate-50 p-2 rounded border border-slate-200">
                      <span className="font-semibold not-italic text-slate-700 mr-1.5">[ID]:</span>
                      <MathText text={q.promptId} />
                    </div>
                  )}

                  {q.options ? (
                    <div className="grid grid-cols-2 gap-2 pt-1 text-xs">
                      {q.options.map((opt, oIdx) => {
                        const letter = String.fromCharCode(65 + oIdx);
                        const isCorrect = letter === q.correctAnswer;

                        return (
                          <div 
                            key={oIdx}
                            className={`p-2 rounded border flex items-center gap-2 ${
                              printTab === 'teacher_key' && isCorrect 
                                ? 'bg-teal-50 border-teal-500 font-bold text-teal-900' 
                                : 'border-slate-200 text-slate-800'
                            }`}
                          >
                            <span className="w-5 h-5 rounded-full border border-slate-400 flex items-center justify-center font-bold text-[10px]">
                              {letter}
                            </span>
                            <MathText text={opt} />
                          </div>
                        );
                      })}
                    </div>
                  ) : (
                    <div className="pt-2 text-xs text-slate-500">
                      {printTab === 'student_sheet' ? (
                        <div className="w-48 h-8 border border-dashed border-slate-400 rounded flex items-center px-2 text-[10px] text-slate-400">
                          Tulis jawaban di sini:
                        </div>
                      ) : (
                        <div className="font-mono font-bold text-teal-800">
                          Kunci Isian: {q.correctAnswer}
                        </div>
                      )}
                    </div>
                  )}

                  {/* Teacher Key & Explanation only shown in teacher tab */}
                  {printTab === 'teacher_key' && (
                    <div className="mt-2 p-3 bg-slate-50 border border-slate-200 rounded-lg text-xs space-y-1.5">
                      <div className="font-mono font-bold text-emerald-700">
                        Kunci Benar: {q.correctAnswer}
                      </div>
                      <div className="text-slate-700 leading-relaxed">
                        <MathText text={q.explanation} />
                      </div>
                      {q.studentPitfall && (
                        <div className="text-rose-700 italic">
                          <strong>Miskonsepsi Siswa:</strong> {q.studentPitfall}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Answer Grid Box at bottom of student sheet */}
            {printTab === 'student_sheet' && (
              <div className="pt-4 border-t-2 border-slate-900">
                <span className="text-xs font-bold uppercase tracking-wider block mb-2">
                  Lembar Jawaban Siswa (Bubble Grid):
                </span>
                <div className="grid grid-cols-6 gap-2 text-center text-xs font-mono">
                  {currentModule.practiceQuestions.map((_, i) => (
                    <div key={i} className="p-1 border border-slate-300 rounded">
                      <span className="text-[10px] text-slate-400 block">#{i + 1}</span>
                      <span className="font-bold">A  B  C  D</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 3. GENERATOR SET SOAL ACAK                                               */}
      {/* ========================================================================= */}
      {activeTab === 'generator' && (
        <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-sm space-y-8">
          
          <div className="border-b border-slate-100 dark:border-slate-800 pb-4">
            <span className="text-[11px] font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400 block mb-1">
              Custom Drill Worksheet Generator
            </span>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              Generator Lembar Kerja Soal Acak
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              Pilih modul, tingkat kesulitan, dan jumlah soal untuk menghasilkan kuis dadakan bagi kelas Anda.
            </p>
          </div>

          {/* Generator Parameters */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700">
            
            {/* Question Count */}
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-2">
                Jumlah Soal:
              </label>
              <div className="grid grid-cols-4 gap-2">
                {[5, 10, 15, 20].map((num) => (
                  <button
                    key={num}
                    onClick={() => setGenCount(num)}
                    className={`py-2 rounded-xl text-xs font-bold border transition-all ${
                      genCount === num
                        ? 'bg-teal-600 text-white border-teal-600 shadow-sm'
                        : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700'
                    }`}
                  >
                    {num}
                  </button>
                ))}
              </div>
            </div>

            {/* Difficulty Filter */}
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-2">
                Tingkat Kesulitan:
              </label>
              <select
                value={genDifficulty}
                onChange={(e) => setGenDifficulty(e.target.value as any)}
                className="w-full px-3.5 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs font-semibold"
              >
                <option value="all">Semua Level (Easy, Medium, Hard)</option>
                <option value="easy">Easy Sahaja</option>
                <option value="medium">Medium Sahaja</option>
                <option value="hard">Hard Sahaja (Tantangan Mahir)</option>
              </select>
            </div>

            {/* Generate Action Button */}
            <div className="flex items-end">
              <button
                onClick={handleGenerateQuiz}
                className="w-full py-2.5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs shadow-md flex items-center justify-center gap-2"
              >
                <Shuffle className="w-4 h-4" />
                <span>Hasilkan Set Soal Sekarang</span>
              </button>
            </div>
          </div>

          {/* Module Selection Pills */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs font-semibold text-slate-600 dark:text-slate-400">
              <span>Pilih Modul Sumber ({genSelectedModules.length} Modul Terpilih):</span>
              <button
                onClick={() => setGenSelectedModules(allModules.map(m => m.id))}
                className="text-teal-600 dark:text-teal-400 hover:underline"
              >
                Pilih Semua
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              {allModules.map((m) => {
                const isSelected = genSelectedModules.includes(m.id);
                return (
                  <button
                    key={m.id}
                    onClick={() => handleToggleModuleForGen(m.id)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-medium border transition-all ${
                      isSelected
                        ? 'bg-teal-50 dark:bg-teal-950/50 border-teal-500 text-teal-800 dark:text-teal-200 font-bold'
                        : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-500'
                    }`}
                  >
                    {m.title}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Generated Questions Preview */}
          {genGenerated && (
            <div className="space-y-6 pt-6 border-t border-slate-100 dark:border-slate-800 animate-in fade-in">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-base text-slate-900 dark:text-white flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                  Kuis Berhasil Dihasilkan ({generatedQuestions.length} Soal Teracak)
                </h3>
                <button
                  onClick={handlePrint}
                  className="px-4 py-2 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold text-xs shadow-sm flex items-center gap-1.5"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>Cetak Lembar Kuis Ini</span>
                </button>
              </div>

              <div className="space-y-4">
                {generatedQuestions.map((q, idx) => (
                  <div key={q.id} className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 space-y-2 text-xs">
                    <div className="flex items-center justify-between font-bold">
                      <span className="text-teal-700 dark:text-teal-400">Soal #{idx + 1} ({q.subtopic})</span>
                      <span className="font-mono text-emerald-600">Kunci: {q.correctAnswer}</span>
                    </div>
                    {q.passage && (
                      <p className="text-slate-600 dark:text-slate-400 italic">"{q.passage}"</p>
                    )}
                    <div className="text-slate-900 dark:text-white font-medium">
                      <MathText text={q.prompt} />
                    </div>
                    {q.promptId && (
                      <div className="text-[11px] text-slate-500 italic">
                        <span className="font-semibold not-italic">[ID]:</span> <MathText text={q.promptId} />
                      </div>
                    )}
                    {q.options && (
                      <div className="grid grid-cols-2 gap-2 pt-1">
                        {q.options.map((opt, oIdx) => (
                          <div key={oIdx} className="p-2 rounded bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                            <strong>{String.fromCharCode(65 + oIdx)}.</strong> <MathText text={opt} />
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      )}

      {/* ========================================================================= */}
      {/* 4. ALUR PELAJARAN 45 MENIT & BANK DISKUSI                                 */}
      {/* ========================================================================= */}
      {activeTab === 'lesson_plan' && (
        <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-sm space-y-8">
          
          <div className="border-b border-slate-100 dark:border-slate-800 pb-4">
            <span className="text-[11px] font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400 block mb-1">
              Classroom Pacing &amp; Discourse Bank
            </span>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              Saran Alur Pelajaran 45 Menit: {currentModule.title}
            </h2>
          </div>

          {/* 45-Minute Lesson Timeline */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            
            {/* Step 1: Warm Up */}
            <div className="p-5 rounded-2xl bg-teal-50 dark:bg-teal-950/30 border border-teal-200 dark:border-teal-900 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-teal-700 dark:text-teal-300">
                  {currentModule.lessonPlan.warmUp.duration}
                </span>
                <span className="w-2 h-2 rounded-full bg-teal-500" />
              </div>
              <h4 className="font-bold text-sm text-slate-900 dark:text-white">
                1. Pembuka (Warm-up)
              </h4>
              <p className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                Fokus: {currentModule.lessonPlan.warmUp.focus}
              </p>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                {currentModule.lessonPlan.warmUp.activity}
              </p>
            </div>

            {/* Step 2: Direct Instruction */}
            <div className="p-5 rounded-2xl bg-indigo-50 dark:bg-indigo-950/30 border border-indigo-200 dark:border-indigo-900 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-indigo-700 dark:text-indigo-300">
                  {currentModule.lessonPlan.conceptInstruction.duration}
                </span>
                <span className="w-2 h-2 rounded-full bg-indigo-500" />
              </div>
              <h4 className="font-bold text-sm text-slate-900 dark:text-white">
                2. Penjelasan Konsep
              </h4>
              <p className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                Fokus: {currentModule.lessonPlan.conceptInstruction.focus}
              </p>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                {currentModule.lessonPlan.conceptInstruction.activity}
              </p>
            </div>

            {/* Step 3: Guided Practice */}
            <div className="p-5 rounded-2xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-amber-700 dark:text-amber-300">
                  {currentModule.lessonPlan.guidedPractice.duration}
                </span>
                <span className="w-2 h-2 rounded-full bg-amber-500" />
              </div>
              <h4 className="font-bold text-sm text-slate-900 dark:text-white">
                3. Latihan Terbimbing
              </h4>
              <p className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                Fokus: {currentModule.lessonPlan.guidedPractice.focus}
              </p>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                {currentModule.lessonPlan.guidedPractice.activity}
              </p>
            </div>

            {/* Step 4: Exit & Wrap Up */}
            <div className="p-5 rounded-2xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-900 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-emerald-700 dark:text-emerald-300">
                  {currentModule.lessonPlan.exitWrapUp.duration}
                </span>
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
              </div>
              <h4 className="font-bold text-sm text-slate-900 dark:text-white">
                4. Penutup (Exit Ticket)
              </h4>
              <p className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                Fokus: {currentModule.lessonPlan.exitWrapUp.focus}
              </p>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                {currentModule.lessonPlan.exitWrapUp.activity}
              </p>
            </div>
          </div>

          {/* Discussion Prompts Bank */}
          <div className="space-y-4 pt-4 border-t border-slate-100 dark:border-slate-800">
            <div className="flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-teal-600" />
              <h3 className="font-bold text-base text-slate-900 dark:text-white">
                Bank Pertanyaan Diskusi &amp; Debat Konseptual Kelas
              </h3>
            </div>

            <div className="space-y-4">
              {currentModule.discussionPrompts.map((disc) => (
                <div key={disc.id} className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700 space-y-2 text-xs sm:text-sm">
                  <span className="text-xs font-bold text-teal-700 dark:text-teal-400 block">
                    Topik Diskusi: {disc.topic}
                  </span>
                  <p className="font-semibold text-slate-900 dark:text-white leading-relaxed">
                    "{disc.prompt}"
                  </p>
                  <div className="p-3 rounded-xl bg-white dark:bg-slate-900 text-xs text-slate-600 dark:text-slate-400 leading-relaxed border border-slate-200/60 dark:border-slate-800">
                    <strong className="text-slate-800 dark:text-slate-200">Target Insight Guru:</strong> {disc.targetInsight}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      )}

    </div>
  );
};
