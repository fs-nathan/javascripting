#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '../..');
const QUIZ_DIR = path.join(ROOT, 'quiz');

const LEVELS = {
  easy: {
    file: 'easy.html',
    title: 'JavaScript Quiz — Level Dễ',
    subtitle: 'String, Array, Vòng lặp, DOM, Event Handling',
    questions: require('./questions-easy.js'),
    expected: { string: 12, array: 12, loop: 12, dom: 8, event: 6 },
  },
  medium: {
    file: 'medium.html',
    title: 'JavaScript Quiz — Level Vừa',
    subtitle: 'String, Array, Vòng lặp, DOM, Event Handling',
    questions: require('./questions-medium.js'),
    expected: { string: 10, array: 10, loop: 10, dom: 10, event: 10 },
  },
  hard: {
    file: 'hard.html',
    title: 'JavaScript Quiz — Level Khó',
    subtitle: 'String, Array, Vòng lặp, DOM, Event Handling',
    questions: require('./questions-hard.js'),
    expected: { string: 8, array: 10, loop: 8, dom: 12, event: 12 },
  },
};

const TOPIC_LABELS = {
  string: 'String',
  array: 'Array',
  loop: 'Vòng lặp',
  dom: 'DOM',
  event: 'Event',
};

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function buildHtml(level) {
  const meta = LEVELS[level];
  const questionsJson = JSON.stringify(meta.questions);
  const expectedJson = JSON.stringify(meta.expected);

  return `<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${escapeHtml(meta.title)}</title>
  <style>
    :root {
      --bg: #f7f5f1;
      --surface: #ffffff;
      --ink: #1a1f2e;
      --muted: #5c6578;
      --accent: #0d6e6e;
      --accent-hover: #095858;
      --border: #d8d4cb;
      --ok: #1b7a3d;
      --ok-bg: #e8f6ee;
      --bad: #b42318;
      --bad-bg: #fef3f2;
      --code-bg: #1e2433;
      --code-fg: #e8ecf4;
      --shadow: 0 1px 3px rgba(26, 31, 46, 0.08);
      --radius: 10px;
      --font: "Segoe UI", system-ui, sans-serif;
      --mono: "SF Mono", "Fira Code", "Consolas", monospace;
    }

    * { box-sizing: border-box; }

    body {
      margin: 0;
      font-family: var(--font);
      color: var(--ink);
      background:
        radial-gradient(ellipse at top left, #e4f0ef 0%, transparent 45%),
        radial-gradient(ellipse at bottom right, #efe8dc 0%, transparent 40%),
        var(--bg);
      line-height: 1.55;
      min-height: 100vh;
    }

    .wrap {
      max-width: 820px;
      margin: 0 auto;
      padding: 1.5rem 1.25rem 4rem;
    }

    header {
      margin-bottom: 1.5rem;
    }

    header h1 {
      margin: 0 0 0.35rem;
      font-size: clamp(1.5rem, 4vw, 2rem);
      letter-spacing: -0.02em;
    }

    header p {
      margin: 0;
      color: var(--muted);
    }

    .toolbar {
      position: sticky;
      top: 0;
      z-index: 10;
      display: flex;
      flex-wrap: wrap;
      gap: 0.75rem;
      align-items: center;
      justify-content: space-between;
      padding: 0.85rem 1rem;
      margin: 0 -0.25rem 1.5rem;
      background: rgba(247, 245, 241, 0.92);
      backdrop-filter: blur(8px);
      border: 1px solid var(--border);
      border-radius: var(--radius);
      box-shadow: var(--shadow);
    }

    .progress {
      font-weight: 600;
      font-size: 0.95rem;
    }

    .progress span { color: var(--accent); }

    .actions { display: flex; gap: 0.5rem; flex-wrap: wrap; }

    button {
      font: inherit;
      cursor: pointer;
      border: none;
      border-radius: 8px;
      padding: 0.55rem 1.1rem;
      background: var(--accent);
      color: #fff;
      font-weight: 600;
    }

    button:hover:not(:disabled) { background: var(--accent-hover); }

    button:disabled {
      opacity: 0.45;
      cursor: not-allowed;
    }

    button.secondary {
      background: transparent;
      color: var(--ink);
      border: 1px solid var(--border);
    }

    button.secondary:hover:not(:disabled) {
      background: #efece4;
    }

    #result {
      display: none;
      padding: 1.25rem 1.35rem;
      margin-bottom: 1.5rem;
      border-radius: var(--radius);
      background: var(--surface);
      border: 2px solid var(--accent);
      box-shadow: var(--shadow);
    }

    #result.visible { display: block; }

    #result h2 {
      margin: 0 0 0.5rem;
      font-size: 1.25rem;
    }

    #result .score-line {
      font-size: 1.1rem;
      margin: 0.25rem 0;
    }

    #result .hint {
      margin: 0.75rem 0 0;
      color: var(--muted);
      font-size: 0.9rem;
    }

    .question {
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: var(--radius);
      padding: 1.15rem 1.25rem 1.25rem;
      margin-bottom: 1rem;
      box-shadow: var(--shadow);
      scroll-margin-top: 5.5rem;
    }

    .question.correct {
      border-color: var(--ok);
      background: var(--ok-bg);
    }

    .question.incorrect {
      border-color: var(--bad);
      background: var(--bad-bg);
    }

    .q-meta {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      align-items: center;
      margin-bottom: 0.55rem;
    }

    .badge {
      display: inline-block;
      font-size: 0.75rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.04em;
      padding: 0.2rem 0.5rem;
      border-radius: 999px;
      background: #e6efef;
      color: var(--accent);
    }

    .q-num {
      font-weight: 700;
      color: var(--muted);
      font-size: 0.9rem;
    }

    .q-text {
      margin: 0 0 0.75rem;
      font-size: 1.02rem;
      font-weight: 600;
    }

    pre.code {
      margin: 0 0 0.9rem;
      padding: 0.85rem 1rem;
      overflow-x: auto;
      background: var(--code-bg);
      color: var(--code-fg);
      border-radius: 8px;
      font-family: var(--mono);
      font-size: 0.85rem;
      line-height: 1.45;
    }

    .choices {
      list-style: none;
      margin: 0;
      padding: 0;
      display: grid;
      gap: 0.45rem;
    }

    .choices label {
      display: flex;
      gap: 0.65rem;
      align-items: flex-start;
      padding: 0.55rem 0.7rem;
      border: 1px solid var(--border);
      border-radius: 8px;
      cursor: pointer;
      background: #fafaf8;
    }

    .choices label:hover {
      border-color: var(--accent);
      background: #f0f7f7;
    }

    .question.submitted .choices label {
      cursor: default;
    }

    .choices input {
      margin-top: 0.2rem;
      flex-shrink: 0;
    }

    .feedback {
      display: none;
      margin-top: 0.9rem;
      padding-top: 0.75rem;
      border-top: 1px dashed var(--border);
      font-size: 0.92rem;
    }

    .question.submitted .feedback { display: block; }

    .feedback .verdict {
      font-weight: 700;
      margin-bottom: 0.35rem;
    }

    .feedback .verdict.ok { color: var(--ok); }
    .feedback .verdict.bad { color: var(--bad); }

    .feedback .answer { margin: 0.25rem 0; }
    .feedback .explain { margin: 0.35rem 0 0; color: var(--muted); }

    .msg {
      color: var(--bad);
      font-size: 0.9rem;
      font-weight: 600;
      min-height: 1.2em;
    }

    footer.nav {
      margin-top: 2rem;
      padding-top: 1rem;
      border-top: 1px solid var(--border);
      color: var(--muted);
      font-size: 0.9rem;
    }

    footer.nav a {
      color: var(--accent);
      font-weight: 600;
      text-decoration: none;
      margin-right: 1rem;
    }

    footer.nav a:hover { text-decoration: underline; }
  </style>
</head>
<body>
  <div class="wrap">
    <header>
      <h1>${escapeHtml(meta.title)}</h1>
      <p>${escapeHtml(meta.subtitle)} · 50 câu · 1 đáp án đúng</p>
    </header>

    <div class="toolbar">
      <div class="progress">Đã chọn: <span id="answeredCount">0</span> / 50</div>
      <div class="actions">
        <button type="button" class="secondary" id="scrollMissingBtn">Tới câu trống</button>
        <button type="button" id="submitBtn" disabled>Nộp bài</button>
      </div>
    </div>
    <p class="msg" id="statusMsg" role="status"></p>

    <div id="result" aria-live="polite">
      <h2>Kết quả</h2>
      <p class="score-line" id="scoreLine"></p>
      <p class="hint">Xem từng câu bên dưới: đáp án đúng và giải thích ngắn.</p>
    </div>

    <form id="quizForm"></form>

    <footer class="nav">
      <a href="easy.html">Dễ</a>
      <a href="medium.html">Vừa</a>
      <a href="hard.html">Khó</a>
    </footer>
  </div>

  <script>
    const TOPIC_LABELS = ${JSON.stringify(TOPIC_LABELS)};
    const EXPECTED_TOPICS = ${expectedJson};
    const questions = ${questionsJson};

    const form = document.getElementById('quizForm');
    const answeredCountEl = document.getElementById('answeredCount');
    const submitBtn = document.getElementById('submitBtn');
    const statusMsg = document.getElementById('statusMsg');
    const resultBox = document.getElementById('result');
    const scoreLine = document.getElementById('scoreLine');
    const scrollMissingBtn = document.getElementById('scrollMissingBtn');

    let submitted = false;

    function escapeHtml(str) {
      return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');
    }

    function getAnswers() {
      const answers = {};
      for (const q of questions) {
        const checked = form.querySelector('input[name="q' + q.id + '"]:checked');
        if (checked) answers[q.id] = Number(checked.value);
      }
      return answers;
    }

    function answeredCount() {
      return Object.keys(getAnswers()).length;
    }

    function updateProgress() {
      const n = answeredCount();
      answeredCountEl.textContent = String(n);
      submitBtn.disabled = submitted || n < questions.length;
      if (!submitted && n === questions.length) {
        statusMsg.textContent = 'Đã trả lời hết — có thể nộp bài.';
        statusMsg.style.color = 'var(--ok)';
      } else if (!submitted) {
        statusMsg.textContent = '';
        statusMsg.style.color = '';
      }
    }

    function firstMissing() {
      const answers = getAnswers();
      return questions.find(function (q) { return answers[q.id] === undefined; });
    }

    function render() {
      const letters = ['A', 'B', 'C', 'D'];
      form.innerHTML = questions.map(function (q) {
        const codeBlock = q.code
          ? '<pre class="code"><code>' + escapeHtml(q.code) + '</code></pre>'
          : '';
        const choices = q.choices.map(function (choice, i) {
          return (
            '<li><label>' +
            '<input type="radio" name="q' + q.id + '" value="' + i + '">' +
            '<span><strong>' + letters[i] + '.</strong> ' + escapeHtml(choice) + '</span>' +
            '</label></li>'
          );
        }).join('');
        return (
          '<article class="question" id="question-' + q.id + '" data-id="' + q.id + '">' +
          '<div class="q-meta">' +
          '<span class="q-num">Câu ' + q.id + '</span>' +
          '<span class="badge">' + escapeHtml(TOPIC_LABELS[q.topic] || q.topic) + '</span>' +
          '</div>' +
          '<p class="q-text">' + escapeHtml(q.question) + '</p>' +
          codeBlock +
          '<ul class="choices">' + choices + '</ul>' +
          '<div class="feedback" id="feedback-' + q.id + '"></div>' +
          '</article>'
        );
      }).join('');
    }

    function submitQuiz() {
      if (submitted) return;
      const n = answeredCount();
      if (n < questions.length) {
        const missing = questions.length - n;
        statusMsg.textContent = 'Còn ' + missing + ' câu chưa trả lời. Hãy chọn hết rồi nộp.';
        statusMsg.style.color = 'var(--bad)';
        const first = firstMissing();
        if (first) {
          const el = document.getElementById('question-' + first.id);
          if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        return;
      }

      submitted = true;
      const answers = getAnswers();
      let correct = 0;
      const letters = ['A', 'B', 'C', 'D'];

      for (const q of questions) {
        const article = document.getElementById('question-' + q.id);
        const feedback = document.getElementById('feedback-' + q.id);
        const selected = answers[q.id];
        const isCorrect = selected === q.correctIndex;
        if (isCorrect) correct += 1;

        article.classList.add('submitted', isCorrect ? 'correct' : 'incorrect');
        article.querySelectorAll('input').forEach(function (input) {
          input.disabled = true;
        });

        const correctLabel = letters[q.correctIndex] + '. ' + q.choices[q.correctIndex];
        if (isCorrect) {
          feedback.innerHTML =
            '<div class="verdict ok">Đúng</div>' +
            '<p class="explain">' + escapeHtml(q.explanation) + '</p>';
        } else {
          feedback.innerHTML =
            '<div class="verdict bad">Sai</div>' +
            '<p class="answer"><strong>Đáp án đúng:</strong> ' + escapeHtml(correctLabel) + '</p>' +
            '<p class="explain">' + escapeHtml(q.explanation) + '</p>';
        }
      }

      const pct = Math.round((correct / questions.length) * 100);
      scoreLine.textContent = 'Đúng: ' + correct + '/' + questions.length + ' (' + pct + '%)';
      resultBox.classList.add('visible');
      submitBtn.disabled = true;
      submitBtn.textContent = 'Đã nộp';
      statusMsg.textContent = '';
      resultBox.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    form.addEventListener('change', updateProgress);
    submitBtn.addEventListener('click', submitQuiz);
    scrollMissingBtn.addEventListener('click', function () {
      const first = firstMissing();
      if (!first) {
        statusMsg.textContent = 'Không còn câu trống.';
        statusMsg.style.color = 'var(--ok)';
        return;
      }
      const el = document.getElementById('question-' + first.id);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });

    render();
    updateProgress();

    // Dev self-check (console only)
    (function selfCheck() {
      if (questions.length !== 50) console.error('Expected 50 questions, got', questions.length);
      const counts = {};
      questions.forEach(function (q) {
        counts[q.topic] = (counts[q.topic] || 0) + 1;
      });
      Object.keys(EXPECTED_TOPICS).forEach(function (t) {
        if (counts[t] !== EXPECTED_TOPICS[t]) {
          console.error('Topic mismatch', t, counts[t], EXPECTED_TOPICS[t]);
        }
      });
    })();
  </script>
</body>
</html>
`;
}

function main() {
  if (!fs.existsSync(QUIZ_DIR)) {
    fs.mkdirSync(QUIZ_DIR, { recursive: true });
  }

  for (const level of Object.keys(LEVELS)) {
    const meta = LEVELS[level];
    if (meta.questions.length !== 50) {
      throw new Error(level + ': expected 50 questions, got ' + meta.questions.length);
    }
    const counts = {};
    for (const q of meta.questions) {
      counts[q.topic] = (counts[q.topic] || 0) + 1;
    }
    for (const [topic, n] of Object.entries(meta.expected)) {
      if (counts[topic] !== n) {
        throw new Error(level + ': topic ' + topic + ' has ' + counts[topic] + ', expected ' + n);
      }
    }
    const out = path.join(QUIZ_DIR, meta.file);
    fs.writeFileSync(out, buildHtml(level), 'utf8');
    console.log('Wrote', path.relative(ROOT, out));
  }
}

main();
