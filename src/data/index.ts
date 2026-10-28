import { ModuleData, Domain, Difficulty, Question, QuestionType } from '../types';
import { linearEquationsModule } from './modules/math/linearEquations';
import { systemsOfEquationsModule } from './modules/math/systemsOfEquations';
import { quadraticEquationsModule } from './modules/math/quadraticEquations';
import { ratiosAndPercentagesModule } from './modules/math/ratiosAndPercentages';
import { geometryTrigModule } from './modules/math/geometryTrig';
import { dataAnalysisModule } from './modules/math/dataAnalysis';
import { wordsInContextModule } from './modules/rw/wordsInContext';
import { standardEnglishConventionsModule } from './modules/rw/standardEnglishConventions';
import { centralIdeasModule } from './modules/rw/centralIdeas';
import { inferencesEvidenceModule } from './modules/rw/inferencesEvidence';
import { transitionsRhetoricalModule } from './modules/rw/transitionsRhetorical';

export const allModules: ModuleData[] = [
  // Math Modules (6)
  linearEquationsModule,
  systemsOfEquationsModule,
  quadraticEquationsModule,
  ratiosAndPercentagesModule,
  geometryTrigModule,
  dataAnalysisModule,
  // Reading & Writing Modules (5)
  wordsInContextModule,
  standardEnglishConventionsModule,
  centralIdeasModule,
  inferencesEvidenceModule,
  transitionsRhetoricalModule
];

export function getModuleById(id: string): ModuleData | undefined {
  return allModules.find(m => m.id === id);
}

export function getModulesByDomain(domain: Domain): ModuleData[] {
  return allModules.filter(m => m.domain === domain);
}

export interface QuizGeneratorOptions {
  moduleIds?: string[];
  count: number;
  difficulty?: Difficulty | 'all';
  type?: 'all' | QuestionType;
}

export function getRandomQuizQuestions(options: QuizGeneratorOptions): Question[] {
  const { moduleIds, count, difficulty = 'all', type = 'all' } = options;

  let pool: Question[] = [];

  const targetModules = moduleIds && moduleIds.length > 0
    ? allModules.filter(m => moduleIds.includes(m.id))
    : allModules;

  targetModules.forEach(mod => {
    // Include practice questions, worked examples, and tickets for maximum variety
    const combined = [...mod.practiceQuestions, ...mod.workedExamples, ...mod.exitTicket];
    pool.push(...combined);
  });

  // Filter by difficulty if specified
  if (difficulty !== 'all') {
    pool = pool.filter(q => q.difficulty === difficulty);
  }

  // Filter by question type if specified
  if (type !== 'all') {
    pool = pool.filter(q => q.type === type);
  }

  // Shuffle pool (Fisher-Yates)
  const shuffled = [...pool];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled.slice(0, count);
}

export function getTotalQuestionCount(): { total: number; mathCount: number; rwCount: number } {
  let mathCount = 0;
  let rwCount = 0;

  allModules.forEach(m => {
    const qCount = m.entryTicket.length + m.workedExamples.length + m.practiceQuestions.length + m.exitTicket.length;
    if (m.domain === 'math') {
      mathCount += qCount;
    } else {
      rwCount += qCount;
    }
  });

  return {
    total: mathCount + rwCount,
    mathCount,
    rwCount
  };
}
