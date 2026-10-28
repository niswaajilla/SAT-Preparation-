import React, { useState } from 'react';
import { Sparkles, X, Loader2, Send, Lightbulb, Copy, Check } from 'lucide-react';
import { askGeminiTeacherAssistant } from '../utils/gemini';
import { Question } from '../types';
import { MathText } from './MathText';

interface GeminiModalProps {
  isOpen: boolean;
  onClose: () => void;
  question: Question;
}

export const GeminiModal: React.FC<GeminiModalProps> = ({
  isOpen,
  onClose,
  question
}) => {
  const [mode, setMode] = useState<'pedagogy_explanation' | 'similar_question' | 'distractor_deepdive'>('pedagogy_explanation');
  const [customPrompt, setCustomPrompt] = useState('');
  const [response, setResponse] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);

  if (!isOpen) return null;

  const handleAsk = async (selectedMode = mode) => {
    setIsLoading(true);
    setResponse('');
    try {
      const res = await askGeminiTeacherAssistant({
        prompt: customPrompt,
        questionText: question.prompt,
        passage: question.passage,
        correctAnswer: question.correctAnswer,
        explanation: question.explanation,
        mode: selectedMode
      });
      setResponse(res);
    } catch (err: any) {
      setResponse('Terjadi kendala saat menghubungi asisten AI.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopy = () => {
    if (!response) return;
    navigator.clipboard.writeText(response);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white dark:bg-slate-900 rounded-3xl max-w-2xl w-full max-h-[90vh] flex flex-col shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden">
        
        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between bg-gradient-to-r from-teal-500/10 via-transparent to-transparent">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-teal-500/20 text-teal-600 dark:text-teal-400 flex items-center justify-center">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-bold text-sm text-slate-900 dark:text-white flex items-center gap-1.5">
                Tanya Asisten Guru Gemini
              </h3>
              <p className="text-[11px] text-slate-500">
                Eksplorasi strategi pedagogis, buat soal klona, atau bedah distraktor
              </p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-5 flex-1 text-xs sm:text-sm">
          
          {/* Reference Question Capsule */}
          <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
              Soal Rujukan ({question.subtopic})
            </span>
            {question.passage && (
              <p className="text-xs text-slate-600 dark:text-slate-300 italic mb-2 border-l-2 border-teal-500 pl-2">
                "{question.passage}"
              </p>
            )}
            <div className="font-semibold text-slate-800 dark:text-slate-200">
              <MathText text={question.prompt} />
            </div>
            <div className="mt-2 text-xs font-mono text-emerald-600 dark:text-emerald-400">
              Kunci: {question.correctAnswer}
            </div>
          </div>

          {/* Mode Selector Buttons */}
          <div className="grid grid-cols-3 gap-2">
            <button
              onClick={() => { setMode('pedagogy_explanation'); handleAsk('pedagogy_explanation'); }}
              className={`p-2.5 rounded-xl border text-left transition-all ${
                mode === 'pedagogy_explanation'
                  ? 'border-teal-500 bg-teal-50 dark:bg-teal-950/40 text-teal-800 dark:text-teal-200'
                  : 'border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400'
              }`}
            >
              <Lightbulb className="w-3.5 h-3.5 mb-1 text-teal-600" />
              <div className="font-bold text-xs">Ide Mengajar</div>
              <div className="text-[10px] text-slate-500 leading-tight">Analogi &amp; penjelasan alternatif</div>
            </button>

            <button
              onClick={() => { setMode('similar_question'); handleAsk('similar_question'); }}
              className={`p-2.5 rounded-xl border text-left transition-all ${
                mode === 'similar_question'
                  ? 'border-teal-500 bg-teal-50 dark:bg-teal-950/40 text-teal-800 dark:text-teal-200'
                  : 'border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 mb-1 text-teal-600" />
              <div className="font-bold text-xs">Buat Soal Serupa</div>
              <div className="text-[10px] text-slate-500 leading-tight">1 soal klona untuk kuis besok</div>
            </button>

            <button
              onClick={() => { setMode('distractor_deepdive'); handleAsk('distractor_deepdive'); }}
              className={`p-2.5 rounded-xl border text-left transition-all ${
                mode === 'distractor_deepdive'
                  ? 'border-teal-500 bg-teal-50 dark:bg-teal-950/40 text-teal-800 dark:text-teal-200'
                  : 'border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400'
              }`}
            >
              <Send className="w-3.5 h-3.5 mb-1 text-teal-600" />
              <div className="font-bold text-xs">Bedah Distraktor</div>
              <div className="text-[10px] text-slate-500 leading-tight">Miskonsepsi psikometri opsi</div>
            </button>
          </div>

          {/* Custom Prompt Input */}
          <div className="flex gap-2">
            <input
              type="text"
              value={customPrompt}
              onChange={(e) => setCustomPrompt(e.target.value)}
              placeholder="Atau ketik instruksi khusus untuk guru di sini..."
              className="flex-1 px-3.5 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500 text-xs"
              onKeyDown={(e) => { if (e.key === 'Enter') handleAsk(); }}
            />
            <button
              onClick={() => handleAsk()}
              disabled={isLoading}
              className="px-4 py-2 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-semibold text-xs flex items-center gap-1.5 disabled:opacity-50"
            >
              {isLoading ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Send className="w-3.5 h-3.5" />}
              <span>Kirim</span>
            </button>
          </div>

          {/* AI Response Box */}
          {isLoading && (
            <div className="p-8 flex flex-col items-center justify-center gap-2 text-slate-500">
              <Loader2 className="w-6 h-6 animate-spin text-teal-500" />
              <span className="text-xs">Menyusun respon pedagogis profesional...</span>
            </div>
          )}

          {response && !isLoading && (
            <div className="relative p-4 rounded-2xl bg-teal-50/50 dark:bg-slate-800/80 border border-teal-200 dark:border-teal-900 text-slate-800 dark:text-slate-200 leading-relaxed whitespace-pre-wrap font-sans text-xs sm:text-sm">
              <button
                onClick={handleCopy}
                className="absolute top-3 right-3 p-1.5 rounded-lg bg-white dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-100 shadow-sm border border-slate-200 dark:border-slate-600"
                title="Salin ke clipboard"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
              {response}
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
