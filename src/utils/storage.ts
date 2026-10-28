import { UserProgressState, ErrorLogItem, ModuleProgress } from '../types';

const STORAGE_KEY = 'sat_teacher_lab_progress_v1';

export const initialProgressState: UserProgressState = {
  modules: {},
  errorLog: [],
  theme: 'light',
  activeAppMode: 'learn',
  questionLanguage: 'en',
};

export function loadProgress(): UserProgressState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return initialProgressState;
    const parsed = JSON.parse(raw);
    return {
      ...initialProgressState,
      ...parsed,
      modules: parsed.modules || {},
      errorLog: Array.isArray(parsed.errorLog) ? parsed.errorLog : [],
      questionLanguage: (parsed.questionLanguage === 'id' || parsed.questionLanguage === 'en') ? parsed.questionLanguage : 'en',
    };
  } catch (err) {
    console.error('Failed to load progress from localStorage:', err);
    return initialProgressState;
  }
}

export function saveProgress(state: UserProgressState): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (err) {
    console.error('Failed to save progress to localStorage:', err);
  }
}

export function resetAllProgress(): UserProgressState {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (err) {
    console.error('Failed to clear storage:', err);
  }
  return initialProgressState;
}

export function exportProgressAsJSON(state: UserProgressState): void {
  const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(state, null, 2));
  const downloadAnchor = document.createElement('a');
  downloadAnchor.setAttribute('href', dataStr);
  downloadAnchor.setAttribute('download', `sat_teacher_lab_backup_${new Date().toISOString().slice(0, 10)}.json`);
  document.body.appendChild(downloadAnchor);
  downloadAnchor.click();
  downloadAnchor.remove();
}

export function parseImportedJSON(jsonString: string): UserProgressState {
  const parsed = JSON.parse(jsonString);
  if (!parsed || typeof parsed !== 'object') {
    throw new Error('Format file JSON tidak valid.');
  }
  return {
    ...initialProgressState,
    ...parsed,
    modules: parsed.modules || {},
    errorLog: Array.isArray(parsed.errorLog) ? parsed.errorLog : [],
  };
}
