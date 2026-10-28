export type Domain = 'math' | 'reading_writing';

export type Difficulty = 'easy' | 'medium' | 'hard';

export type QuestionType = 'multiple_choice' | 'student_produced';

export interface SolutionMethod {
  title: string; // e.g. "Metode Aljabar Formal", "Metode Desmos / Grafik", "Metode Substitusi Jawaban (Backsolving)"
  steps: string[];
  speedRating: 'Fast' | 'Standard' | 'Situational';
  notes?: string;
}

export interface Question {
  id: string;
  moduleId: string;
  type: QuestionType;
  prompt: string; // Official Digital SAT English prompt
  promptId?: string; // Optional Indonesian translation for scaffolding
  passage?: string; // 25-60 words for Reading & Writing questions
  options?: string[]; // 4 options for multiple choice
  correctAnswer: string; // 'A', 'B', 'C', 'D' or numeric string like '12' or '3/4'
  explanation: string;
  distractorAnalysis?: Record<string, string>; // e.g. { A: "...", C: "...", D: "..." }
  subtopic: string;
  difficulty: Difficulty;
  hint?: string;
  methods?: SolutionMethod[];
  studentPitfall?: string; // Common student mistake on this exact question
}

export interface AlternativeApproach {
  name: string;
  description: string;
}

export interface TeacherNotes {
  studentMisconceptions: string[];
  alternativeApproaches: AlternativeApproach[];
  classroomAnalogy: string;
  sparkQuestions: string[];
}

export interface ModuleConcept {
  id: string;
  title: string;
  summary: string;
  formulaBox?: string[];
  commonMistakes: string[];
  proTips: string[];
  teacherNotes: TeacherNotes;
}

export interface TeacherDiscussionPrompt {
  id: string;
  topic: string;
  prompt: string;
  targetInsight: string;
}

export interface LessonPlan45Min {
  warmUp: { duration: string; focus: string; activity: string };
  conceptInstruction: { duration: string; focus: string; activity: string };
  guidedPractice: { duration: string; focus: string; activity: string };
  exitWrapUp: { duration: string; focus: string; activity: string };
}

export interface ModuleData {
  id: string;
  title: string;
  domain: Domain;
  description: string;
  targetPacingSeconds: number; // e.g. 95 for math, 71 for reading_writing
  entryTicket: Question[]; // 5 diagnostic questions
  conceptSections: ModuleConcept[];
  workedExamples: Question[]; // 3 worked examples with multiple methods & distractor breakdown
  practiceQuestions: Question[]; // 12 questions (dominant medium-hard, student produced included for Math)
  exitTicket: Question[]; // 5 diagnostic questions
  discussionPrompts: TeacherDiscussionPrompt[];
  lessonPlan: LessonPlan45Min;
}

export interface ErrorLogItem {
  id: string;
  questionId: string;
  moduleId: string;
  moduleTitle: string;
  questionText: string;
  options?: string[];
  userAnswer: string;
  correctAnswer: string;
  explanation: string;
  distractorNote?: string;
  errorCategory: 'konsep' | 'ceroboh' | 'waktu' | 'strategi';
  teacherNotes: string;
  timestamp: string;
  reviewed: boolean;
}

export interface ModuleProgress {
  stagesCompleted: number[]; // 1, 2, 3, 4, 5
  entryAttempt?: {
    score: number;
    total: number;
    confidence: number;
    doubtTopic: string;
    completedAt: string;
  };
  practiceAttempt?: {
    score: number;
    total: number;
    timeSpentSeconds: number;
    accuracy: number;
    completedAt: string;
  };
  exitAttempt?: {
    score: number;
    total: number;
    confidence: number;
    deepenTopic: string;
    completedAt: string;
  };
}

export interface UserProgressState {
  modules: Record<string, ModuleProgress>;
  errorLog: ErrorLogItem[];
  theme: 'light' | 'dark';
  activeAppMode: 'learn' | 'teach'; // Mode Belajar vs Mode Mengajar
  questionLanguage?: 'en' | 'id'; // 'en' (default: Digital SAT English) | 'id' (Indonesian translation)
  lastActiveModuleId?: string;
}
