import React, { useState } from 'react';
import { 
  X, 
  Trash2, 
  CheckCircle2, 
  RotateCcw, 
  Filter, 
  Tag, 
  AlertCircle,
  HelpCircle,
  Clock,
  Sparkles
} from 'lucide-react';
import { ErrorLogItem, UserProgressState } from '../types';
import { MathText } from './MathText';
import { isAnswerCorrect } from '../utils/scoring';

interface ErrorLogModalProps {
  isOpen: boolean;
  onClose: () => void;
  state: UserProgressState;
  onUpdateState: (newState: UserProgressState) => void;
}

export const ErrorLogModal: React.FC<ErrorLogModalProps> = ({
  isOpen,
  onClose,
  state,
  onUpdateState
}) => {
  const [filterCategory, setFilterCategory] = useState<string>('all');
  const [filterModule, setFilterModule] = useState<string>('all');
  const [retryItem, setRetryItem] = useState<ErrorLogItem | null>(null);
  const [retryAnswer, setRetryAnswer] = useState<string>('');
  const [retryResult, setRetryResult] = useState<{ isCorrect: boolean; showExplanation: boolean } | null>(null);
  const [editingNotesId, setEditingNotesId] = useState<string | null>(null);
  const [editedNotes, setEditedNotes] = useState<string>('');

  if (!isOpen) return null;

  const items = state.errorLog;

  const filteredItems = items.filter(item => {
    if (filterCategory !== 'all' && item.errorCategory !== filterCategory) return false;
    if (filterModule !== 'all' && item.moduleId !== filterModule) return false;
    return true;
  });

  const handleDelete = (id: string) => {
    const updated = items.filter(item => item.id !== id);
    onUpdateState({
      ...state,
      errorLog: updated
    });
  };

  const handleToggleReviewed = (id: string) => {
    const updated = items.map(item => {
      if (item.id === id) {
        return { ...item, reviewed: !item.reviewed };
      }
      return item;
    });
    onUpdateState({
      ...state,
      errorLog: updated
    });
  };

  const handleSaveNotes = (id: string) => {
    const updated = items.map(item => {
      if (item.id === id) {
        return { ...item, teacherNotes: editedNotes };
      }
      return item;
    });
    onUpdateState({
      ...state,
      errorLog: updated
    });
    setEditingNotesId(null);
  };

  const handleStartRetry = (item: ErrorLogItem) => {
    setRetryItem(item);
    setRetryAnswer('');
    setRetryResult(null);
  };

  const handleCheckRetry = () => {
    if (!retryItem) return;
    const correct = isAnswerCorrect(retryAnswer, retryItem.correctAnswer);
    setRetryResult({
      isCorrect: correct,
      showExplanation: true
    });
  };

  // Category counts
  const countKonsep = items.filter(i => i.errorCategory === 'konsep').length;
  const countCeroboh = items.filter(i => i.errorCategory === 'ceroboh').length;
  const countWaktu = items.filter(i => i.errorCategory === 'waktu').length;
  const countStrategi = items.filter(i => i.errorCategory === 'strategi').length;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white dark:bg-slate-900 rounded-3xl max-w-4xl w-full max-h-[92vh] flex flex-col shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden">
        
        {/* Modal Header */}
        <div className="px-6 py-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between bg-slate-50/50 dark:bg-slate-800/40">
          <div>
            <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500 animate-pulse" />
              Buku Catatan Kesalahan (Error Log)
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Kompilasi soal-soal latihan yang belum tepat, lengkap dengan analisis penyebab dan refleksi guru.
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-xl text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-200/60 dark:hover:bg-slate-700"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Category Pills & Quick Filter */}
        <div className="px-6 py-3 border-b border-slate-100 dark:border-slate-800/80 bg-slate-50 dark:bg-slate-900/50 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="font-semibold text-slate-600 dark:text-slate-400 flex items-center gap-1">
              <Filter className="w-3.5 h-3.5" /> Kategori:
            </span>
            <button
              onClick={() => setFilterCategory('all')}
              className={`px-2.5 py-1 rounded-lg font-medium transition-all ${
                filterCategory === 'all'
                  ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900'
                  : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700'
              }`}
            >
              Semua ({items.length})
            </button>
            <button
              onClick={() => setFilterCategory('konsep')}
              className={`px-2.5 py-1 rounded-lg font-medium transition-all ${
                filterCategory === 'konsep'
                  ? 'bg-rose-600 text-white'
                  : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700'
              }`}
            >
              Konsep ({countKonsep})
            </button>
            <button
              onClick={() => setFilterCategory('ceroboh')}
              className={`px-2.5 py-1 rounded-lg font-medium transition-all ${
                filterCategory === 'ceroboh'
                  ? 'bg-amber-600 text-white'
                  : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700'
              }`}
            >
              Ceroboh ({countCeroboh})
            </button>
            <button
              onClick={() => setFilterCategory('waktu')}
              className={`px-2.5 py-1 rounded-lg font-medium transition-all ${
                filterCategory === 'waktu'
                  ? 'bg-blue-600 text-white'
                  : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700'
              }`}
            >
              Waktu ({countWaktu})
            </button>
            <button
              onClick={() => setFilterCategory('strategi')}
              className={`px-2.5 py-1 rounded-lg font-medium transition-all ${
                filterCategory === 'strategi'
                  ? 'bg-purple-600 text-white'
                  : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700'
              }`}
            >
              Strategi ({countStrategi})
            </button>
          </div>
        </div>

        {/* Main List */}
        <div className="p-6 overflow-y-auto space-y-4 flex-1">
          {filteredItems.length === 0 ? (
            <div className="py-16 text-center text-slate-400 space-y-2">
              <CheckCircle2 className="w-10 h-10 mx-auto text-emerald-500 opacity-80" />
              <p className="font-semibold text-sm text-slate-600 dark:text-slate-300">
                Tidak ada catatan kesalahan yang cocok
              </p>
              <p className="text-xs text-slate-400 max-w-sm mx-auto">
                Setiap Anda menjawab salah pada latihan soal, Anda dapat menyimpannya ke Error Log untuk dipelajari kembali polanya.
              </p>
            </div>
          ) : (
            filteredItems.map((item) => {
              const isEditingNotes = editingNotesId === item.id;

              return (
                <div 
                  key={item.id}
                  className={`p-5 rounded-2xl border transition-all ${
                    item.reviewed 
                      ? 'bg-slate-50/60 dark:bg-slate-900/40 border-slate-200/80 dark:border-slate-800 opacity-75' 
                      : 'bg-white dark:bg-slate-850 border-slate-200 dark:border-slate-700 shadow-sm'
                  }`}
                >
                  {/* Top Bar of Card */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                        {item.moduleTitle}
                      </span>
                      <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${
                        item.errorCategory === 'konsep' ? 'bg-rose-100 text-rose-700 dark:bg-rose-950 dark:text-rose-300' :
                        item.errorCategory === 'ceroboh' ? 'bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-300' :
                        item.errorCategory === 'waktu' ? 'bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300' :
                        'bg-purple-100 text-purple-700 dark:bg-purple-950 dark:text-purple-300'
                      }`}>
                        {item.errorCategory}
                      </span>
                      {item.reviewed && (
                        <span className="text-[10px] font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950 px-1.5 py-0.5 rounded">
                          Sudah Direview
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleStartRetry(item)}
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-semibold bg-teal-50 dark:bg-teal-950/60 text-teal-700 dark:text-teal-300 border border-teal-200 dark:border-teal-800 hover:bg-teal-100"
                        title="Kerjakan ulang soal ini"
                      >
                        <RotateCcw className="w-3 h-3" />
                        <span>Coba Ulang</span>
                      </button>

                      <button
                        onClick={() => handleToggleReviewed(item.id)}
                        className="p-1.5 text-slate-400 hover:text-emerald-600 rounded-lg"
                        title={item.reviewed ? 'Tandai belum selesai direview' : 'Tandai selesai direview'}
                      >
                        <CheckCircle2 className={`w-4 h-4 ${item.reviewed ? 'text-emerald-500' : ''}`} />
                      </button>

                      <button
                        onClick={() => handleDelete(item.id)}
                        className="p-1.5 text-slate-400 hover:text-rose-600 rounded-lg"
                        title="Hapus dari Error Log"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Question Text */}
                  <div className="text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-200 mb-3">
                    <MathText text={item.questionText} />
                  </div>

                  {/* Options display if MCQ */}
                  {item.options && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 mb-3">
                      {item.options.map((opt, idx) => {
                        const letter = String.fromCharCode(65 + idx);
                        const isCorrect = letter === item.correctAnswer;
                        const isChosen = letter === item.userAnswer;

                        return (
                          <div 
                            key={idx}
                            className={`p-2 rounded-lg text-xs flex items-center gap-2 ${
                              isCorrect 
                                ? 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-200 border border-emerald-200 dark:border-emerald-800 font-semibold' 
                                : isChosen 
                                ? 'bg-rose-50 dark:bg-rose-950/40 text-rose-800 dark:text-rose-200 border border-rose-200 dark:border-rose-800 line-through' 
                                : 'bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                            }`}
                          >
                            <span className="font-bold">{letter}.</span>
                            <MathText text={opt} />
                          </div>
                        );
                      })}
                    </div>
                  )}

                  {/* Answer Comparison */}
                  <div className="flex items-center gap-4 text-xs font-mono py-1.5 px-3 rounded-lg bg-slate-50 dark:bg-slate-800/60 mb-3">
                    <span className="text-rose-600 dark:text-rose-400">
                      Jawaban Anda: <strong>{item.userAnswer || '—'}</strong>
                    </span>
                    <span className="text-slate-300">|</span>
                    <span className="text-emerald-600 dark:text-emerald-400">
                      Kunci Sebenarnya: <strong>{item.correctAnswer}</strong>
                    </span>
                  </div>

                  {/* Teacher Reflection Notes */}
                  <div className="p-3 rounded-xl bg-amber-50/60 dark:bg-amber-950/20 border border-amber-200/60 dark:border-amber-900/40 text-xs">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-bold text-amber-800 dark:text-amber-300 flex items-center gap-1">
                        <Tag className="w-3 h-3" />
                        Catatan Refleksi Saya:
                      </span>
                      {!isEditingNotes && (
                        <button
                          onClick={() => {
                            setEditingNotesId(item.id);
                            setEditedNotes(item.teacherNotes || '');
                          }}
                          className="text-[10px] font-semibold text-amber-700 dark:text-amber-400 hover:underline"
                        >
                          Edit Catatan
                        </button>
                      )}
                    </div>

                    {isEditingNotes ? (
                      <div className="mt-2 space-y-2">
                        <textarea
                          value={editedNotes}
                          onChange={(e) => setEditedNotes(e.target.value)}
                          placeholder="Tuliskan penyebab kesalahan (misal: tergesa-gesa menghitung x bukan 7x, atau salah tanda minus)..."
                          className="w-full p-2 rounded-lg border border-amber-300 dark:border-amber-800 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 text-xs focus:outline-none focus:ring-1 focus:ring-amber-500"
                          rows={2}
                        />
                        <div className="flex justify-end gap-2">
                          <button
                            onClick={() => setEditingNotesId(null)}
                            className="px-2.5 py-1 rounded text-[11px] font-semibold text-slate-500 hover:bg-slate-100"
                          >
                            Batal
                          </button>
                          <button
                            onClick={() => handleSaveNotes(item.id)}
                            className="px-3 py-1 rounded text-[11px] font-semibold bg-amber-600 text-white"
                          >
                            Simpan
                          </button>
                        </div>
                      </div>
                    ) : (
                      <p className="text-slate-700 dark:text-slate-300 italic">
                        {item.teacherNotes || 'Belum ada catatan khusus.'}
                      </p>
                    )}
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Retry Modal Overlay */}
        {retryItem && (
          <div className="fixed inset-0 z-60 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm animate-in fade-in">
            <div className="bg-white dark:bg-slate-900 rounded-3xl max-w-lg w-full p-6 shadow-2xl border border-slate-200 dark:border-slate-800 space-y-4">
              <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
                <h4 className="font-bold text-sm text-slate-900 dark:text-white flex items-center gap-1.5">
                  <RotateCcw className="w-4 h-4 text-teal-600" />
                  Coba Kerjakan Ulang Soal Ini
                </h4>
                <button
                  onClick={() => setRetryItem(null)}
                  className="p-1 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-slate-200"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200">
                <MathText text={retryItem.questionText} />
              </div>

              {retryItem.options ? (
                <div className="space-y-2">
                  {retryItem.options.map((opt, idx) => {
                    const letter = String.fromCharCode(65 + idx);
                    return (
                      <button
                        key={idx}
                        onClick={() => setRetryAnswer(letter)}
                        className={`w-full text-left p-3 rounded-xl border text-xs flex items-center gap-2.5 transition-all ${
                          retryAnswer === letter
                            ? 'border-teal-500 bg-teal-50 dark:bg-teal-950/40 text-teal-900 dark:text-teal-200 font-bold'
                            : 'border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300'
                        }`}
                      >
                        <span className="w-6 h-6 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-[11px] font-bold">
                          {letter}
                        </span>
                        <MathText text={opt} />
                      </button>
                    );
                  })}
                </div>
              ) : (
                <div>
                  <label className="text-xs text-slate-500 mb-1 block">Tuliskan Jawaban Isian:</label>
                  <input
                    type="text"
                    value={retryAnswer}
                    onChange={(e) => setRetryAnswer(e.target.value)}
                    placeholder="Contoh: 14 atau 7/2"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm font-mono focus:ring-2 focus:ring-teal-500 focus:outline-none"
                  />
                </div>
              )}

              {/* Check Answer Button */}
              {!retryResult ? (
                <button
                  onClick={handleCheckRetry}
                  disabled={!retryAnswer}
                  className="w-full py-2.5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs disabled:opacity-50"
                >
                  Periksa Jawaban
                </button>
              ) : (
                <div className="space-y-3 pt-2">
                  <div className={`p-3 rounded-xl text-xs font-bold flex items-center gap-2 ${
                    retryResult.isCorrect 
                      ? 'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200' 
                      : 'bg-rose-50 dark:bg-rose-950/60 text-rose-700 dark:text-rose-300 border border-rose-200'
                  }`}>
                    {retryResult.isCorrect ? (
                      <>
                        <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                        Hebat! Jawaban Anda sekarang BENAR!
                      </>
                    ) : (
                      <>
                        <AlertCircle className="w-4 h-4 text-rose-500" />
                        Masih kurang tepat. Kunci: {retryItem.correctAnswer}
                      </>
                    )}
                  </div>

                  <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800 text-xs text-slate-700 dark:text-slate-300 leading-relaxed max-h-40 overflow-y-auto">
                    <span className="font-bold block mb-1">Pembahasan:</span>
                    <MathText text={retryItem.explanation} />
                  </div>

                  <button
                    onClick={() => setRetryItem(null)}
                    className="w-full py-2 rounded-xl bg-slate-800 text-white font-semibold text-xs"
                  >
                    Tutup Latihan Ulang
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
