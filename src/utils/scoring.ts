/**
 * Scoring and pedagogical diagnostic utility functions
 */

export interface ScoreResult {
  score: number;
  total: number;
  percentage: number;
  passed: boolean;
  performanceBand: 'Mastery' | 'Proficient' | 'Developing' | 'Needs Review';
  recommendation: string;
}

export interface DeltaAnalysis {
  entryScore: number;
  exitScore: number;
  total: number;
  entryPercentage: number;
  exitPercentage: number;
  deltaPercentage: number;
  isImproved: boolean;
  masteryAchieved: boolean;
  recommendation: string;
}

export function calculateScore(correctCount: number, totalQuestions: number): ScoreResult {
  if (totalQuestions <= 0) {
    return {
      score: 0,
      total: 0,
      percentage: 0,
      passed: false,
      performanceBand: 'Needs Review',
      recommendation: 'Belum ada data pengerjaan.'
    };
  }

  const percentage = Math.round((correctCount / totalQuestions) * 100);
  const passed = percentage >= 70;

  let performanceBand: 'Mastery' | 'Proficient' | 'Developing' | 'Needs Review';
  let recommendation: string;

  if (percentage >= 90) {
    performanceBand = 'Mastery';
    recommendation = 'Penguasaan konsep dan strategi sangat solid. Siap digunakan langsung sebagai materi ajar tingkat lanjut.';
  } else if (percentage >= 70) {
    performanceBand = 'Proficient';
    recommendation = 'Penguasaan baik. Tinjau kembali analisis distraktor sebelum mengajarkannya di kelas.';
  } else if (percentage >= 50) {
    performanceBand = 'Developing';
    recommendation = 'Masih terdapat beberapa celah konsep. Disarankan meninjau ulang contoh soal dan catatan pedagogi.';
  } else {
    performanceBand = 'Needs Review';
    recommendation = 'Skor di bawah batas penguasaan minimal (70%). Wajib ulangi materi dan tinjau Error Log.';
  }

  return {
    score: correctCount,
    total: totalQuestions,
    percentage,
    passed,
    performanceBand,
    recommendation
  };
}

export function analyzeEntryExitDelta(
  entryCorrect: number,
  exitCorrect: number,
  total: number
): DeltaAnalysis {
  const entryPerc = Math.round((entryCorrect / total) * 100);
  const exitPerc = Math.round((exitCorrect / total) * 100);
  const delta = exitPerc - entryPerc;
  const masteryAchieved = exitPerc >= 70;

  let recommendation: string;
  if (exitPerc >= 85 && delta >= 0) {
    recommendation = 'Performa sangat memuaskan dengan lonjakan pemahaman. Modul ini tuntas dan Anda siap menyajikan bahan ini ke siswa.';
  } else if (exitPerc >= 70) {
    recommendation = 'Ambang batas kelulusan modul tercapai (≥70%). Anda dapat melanjutkan ke modul berikutnya, namun perhatikan catatan kesalahan.';
  } else {
    recommendation = 'Skor Exit Ticket < 70%. Sangat direkomendasikan mengulang materi dan mengulas kembali miskonsepsi siswa sebelum lanjut.';
  }

  return {
    entryScore: entryCorrect,
    exitScore: exitCorrect,
    total,
    entryPercentage: entryPerc,
    exitPercentage: exitPerc,
    deltaPercentage: delta,
    isImproved: delta > 0,
    masteryAchieved,
    recommendation
  };
}

export function formatPacingTime(seconds: number): string {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  if (mins === 0) {
    return `${secs} detik`;
  }
  return `${mins} menit ${secs} detik`;
}

export function normalizeMathAnswer(ans: string): string {
  if (!ans) return '';
  // Remove whitespace and leading/trailing spaces
  const cleaned = ans.trim().replace(/\s+/g, '');
  // Normalize fractions e.g. 7/2 vs 3.5
  if (cleaned.includes('/')) {
    const [num, den] = cleaned.split('/').map(Number);
    if (!isNaN(num) && !isNaN(den) && den !== 0) {
      return (num / den).toString();
    }
  }
  const numeric = parseFloat(cleaned);
  if (!isNaN(numeric)) {
    // Round to 4 decimal places for floating comparisons
    return (Math.round(numeric * 10000) / 10000).toString();
  }
  return cleaned.toLowerCase();
}

export function isAnswerCorrect(userAns: string, correctAns: string): boolean {
  if (!userAns || !correctAns) return false;
  const user = userAns.trim();
  const correct = correctAns.trim();
  
  if (user.toUpperCase() === correct.toUpperCase()) return true;

  // For numeric/student-produced answers
  const normUser = normalizeMathAnswer(user);
  const normCorrect = normalizeMathAnswer(correct);
  return normUser === normCorrect;
}
