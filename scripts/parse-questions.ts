/**
 * Local helper to turn an extracted-text exam dump into the JSON array the app
 * consumes. Port of the old parse_questions.py.
 *
 * Usage:
 *   npm run parse -- <input.txt> [output.json]
 *   (defaults: extracted_text_2.txt -> questions.json)
 */
import { readFileSync, writeFileSync } from 'node:fs';

interface Question {
  id: number;
  question: string;
  options: Record<string, string>;
  answer: string;
}

const inputPath = process.argv[2] ?? 'extracted_text_2.txt';
const outputPath = process.argv[3] ?? 'questions.json';

const clean = (s: string): string =>
  s.replace(/ﬁ/g, 'fi').replace(/ﬂ/g, 'fl').replace(/\x0c/g, '');

const text = readFileSync(inputPath, 'utf-8');

const idx = text.lastIndexOf('Correct Answers');
const questionsText = idx === -1 ? text : text.slice(0, idx);
const answersText = idx === -1 ? '' : text.slice(idx);

// Parse the answer key: "12. B" style entries.
const answerMap = new Map<number, string>();
const answerRe = /(\d+)\.\s*([A-E])/g;
const flatAnswers = answersText.replace(/\n/g, ' ');
for (const m of flatAnswers.matchAll(answerRe)) {
  answerMap.set(Number(m[1]), m[2]);
}

// Split into question blocks on "Question N".
const blocks = questionsText.split(/Question \d+/).slice(1);
const optionLabels = ['A.', 'B.', 'C.', 'D.', 'E.'];

const questions: Question[] = [];

blocks.forEach((block, i) => {
  const qNum = i + 1;

  const positions: Array<[string, number]> = [];
  for (const opt of optionLabels) {
    const pos = block.indexOf(opt);
    if (pos !== -1) positions.push([opt, pos]);
  }
  if (positions.length === 0) return;

  positions.sort((a, b) => a[1] - b[1]);

  const questionText = clean(block.slice(0, positions[0][1]).trim());

  const options: Record<string, string> = {};
  for (let j = 0; j < positions.length; j++) {
    const letter = positions[j][0][0];
    const start = positions[j][1] + 2; // skip "A."
    const end = j < positions.length - 1 ? positions[j + 1][1] : block.length;
    options[letter] = clean(block.slice(start, end).trim());
  }

  questions.push({
    id: qNum,
    question: questionText,
    options,
    answer: answerMap.get(qNum) ?? '',
  });
});

writeFileSync(outputPath, JSON.stringify(questions, null, 2) + '\n');
console.log(`Parsed ${questions.length} questions -> ${outputPath}`);
