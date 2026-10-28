import test from 'node:test';
import assert from 'node:assert/strict';
import { calculateScore, analyzeEntryExitDelta, normalizeMathAnswer, isAnswerCorrect } from './scoring';

test('calculateScore calculates percentages and pass status correctly', () => {
  const resultPass = calculateScore(4, 5);
  assert.equal(resultPass.percentage, 80);
  assert.equal(resultPass.passed, true);
  assert.equal(resultPass.performanceBand, 'Proficient');

  const resultFail = calculateScore(3, 5);
  assert.equal(resultFail.percentage, 60);
  assert.equal(resultFail.passed, false);
  assert.equal(resultFail.performanceBand, 'Developing');

  const resultMastery = calculateScore(10, 10);
  assert.equal(resultMastery.percentage, 100);
  assert.equal(resultMastery.performanceBand, 'Mastery');
});

test('analyzeEntryExitDelta computes progression and pedagogical guidance', () => {
  const delta1 = analyzeEntryExitDelta(2, 4, 5); // 40% -> 80%
  assert.equal(delta1.entryPercentage, 40);
  assert.equal(delta1.exitPercentage, 80);
  assert.equal(delta1.deltaPercentage, 40);
  assert.equal(delta1.isImproved, true);
  assert.equal(delta1.masteryAchieved, true);

  const deltaFail = analyzeEntryExitDelta(2, 3, 5); // 40% -> 60%
  assert.equal(deltaFail.masteryAchieved, false);
  assert.match(deltaFail.recommendation, /Skor Exit Ticket < 70%/);
});

test('normalizeMathAnswer handles fractions and decimals equivalent values', () => {
  assert.equal(normalizeMathAnswer(' 1/2 '), '0.5');
  assert.equal(normalizeMathAnswer('0.5'), '0.5');
  assert.equal(normalizeMathAnswer('7/2'), '3.5');
  assert.equal(normalizeMathAnswer('3.500'), '3.5');
});

test('isAnswerCorrect validates both multiple choice and student produced responses', () => {
  assert.equal(isAnswerCorrect('A', 'a'), true);
  assert.equal(isAnswerCorrect('B', 'C'), false);
  assert.equal(isAnswerCorrect('3/4', '0.75'), true);
  assert.equal(isAnswerCorrect(' -4 ', '-4'), true);
  assert.equal(isAnswerCorrect('12.5', '25/2'), true);
});
