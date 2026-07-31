#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = path.join(__dirname, '..');
const QUIZ_DIR = path.join(ROOT, 'quiz');

const EXPECTED = {
  'easy.html': { string: 12, array: 12, loop: 12, dom: 8, event: 6 },
  'medium.html': { string: 10, array: 10, loop: 10, dom: 10, event: 10 },
  'hard.html': { string: 8, array: 10, loop: 8, dom: 12, event: 12 },
};

function extractQuestions(html) {
  const marker = 'const questions = ';
  const start = html.indexOf(marker);
  if (start === -1) {
    throw new Error('questions array not found');
  }
  let i = start + marker.length;
  while (i < html.length && /\s/.test(html[i])) i += 1;
  if (html[i] !== '[') {
    throw new Error('questions value is not an array');
  }
  let depth = 0;
  let inString = false;
  let quote = null;
  let escaped = false;
  const from = i;
  for (; i < html.length; i += 1) {
    const ch = html[i];
    if (inString) {
      if (escaped) {
        escaped = false;
        continue;
      }
      if (ch === '\\') {
        escaped = true;
        continue;
      }
      if (ch === quote) {
        inString = false;
        quote = null;
      }
      continue;
    }
    if (ch === '"' || ch === "'") {
      inString = true;
      quote = ch;
      continue;
    }
    if (ch === '[') depth += 1;
    if (ch === ']') {
      depth -= 1;
      if (depth === 0) {
        const literal = html.slice(from, i + 1);
        return vm.runInNewContext('(' + literal + ')');
      }
    }
  }
  throw new Error('unclosed questions array');
}

function validateFile(fileName) {
  const filePath = path.join(QUIZ_DIR, fileName);
  if (!fs.existsSync(filePath)) {
    throw new Error('missing file: ' + fileName);
  }
  const html = fs.readFileSync(filePath, 'utf8');
  if (/cdn\.|unpkg|jsdelivr|googleapis/i.test(html)) {
    throw new Error(fileName + ': must not use external CDN');
  }
  const questions = extractQuestions(html);
  const errors = [];

  if (questions.length !== 50) {
    errors.push('expected 50 questions, got ' + questions.length);
  }

  const ids = new Set();
  const counts = {};
  for (const q of questions) {
    if (ids.has(q.id)) errors.push('duplicate id ' + q.id);
    ids.add(q.id);
    if (!['string', 'array', 'loop', 'dom', 'event'].includes(q.topic)) {
      errors.push('invalid topic on id ' + q.id + ': ' + q.topic);
    }
    counts[q.topic] = (counts[q.topic] || 0) + 1;
    if (!Array.isArray(q.choices) || q.choices.length !== 4) {
      errors.push('id ' + q.id + ' must have 4 choices');
    }
    if (typeof q.correctIndex !== 'number' || q.correctIndex < 0 || q.correctIndex > 3) {
      errors.push('id ' + q.id + ' invalid correctIndex');
    }
    if (!q.question || !q.explanation) {
      errors.push('id ' + q.id + ' missing question or explanation');
    }
  }

  const expected = EXPECTED[fileName];
  for (const [topic, n] of Object.entries(expected)) {
    if (counts[topic] !== n) {
      errors.push('topic ' + topic + ': got ' + counts[topic] + ', expected ' + n);
    }
  }

  if (!html.includes('Nộp bài')) {
    errors.push('missing submit button label');
  }

  return { fileName, counts, errors };
}

function main() {
  let failed = false;
  for (const fileName of Object.keys(EXPECTED)) {
    try {
      const result = validateFile(fileName);
      if (result.errors.length) {
        failed = true;
        console.error('FAIL', fileName);
        result.errors.forEach((e) => console.error('  -', e));
      } else {
        console.log('PASS', fileName, result.counts);
      }
    } catch (err) {
      failed = true;
      console.error('FAIL', fileName, err.message);
    }
  }
  if (failed) {
    process.exit(1);
  }
  console.log('All quiz files valid.');
}

main();
