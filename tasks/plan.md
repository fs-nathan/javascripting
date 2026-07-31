# Plan: JavaScript Multiple-Choice Quizzes

## Context
Spec: `docs/specs/js-quiz.md`  
Deliverables: `quiz/easy.html`, `quiz/medium.html`, `quiz/hard.html`  
Stack: standalone HTML + vanilla JS (no CDN). Smoke validator in `scripts/`.

## Vertical Slices

| ID | Slice | Delivers |
|----|--------|----------|
| T1 | Quiz shell + scoring engine | 1 HTML có UI, progress, chặn nộp khi thiếu, chấm điểm + explanation |
| T2 | Easy bank (50) | `easy.html` đủ topic split 12/12/12/8/6 |
| T3 | Medium bank (50) | `medium.html` đủ 10×5 |
| T4 | Hard bank (50) | `hard.html` đủ 8/10/8/12/12 |
| T5 | Smoke validate | Script xác nhận count/topic/correctIndex |
| T6 | Ship | Commit + push `main` |

## Dependencies
```
T1 ──► T2 ──► T5
   └──► T3 ──┘
   └──► T4 ──┘
T5 ──► T6
```

T2–T4 có thể song song sau khi engine (T1) ổn định; thực tế: generate 3 file từ cùng template + data riêng.

## Risk
- 150 câu phải đúng kiến thức JS — validate bằng review + chạy vài snippet trong Node khi nghi ngờ.
- File HTML lớn — chấp nhận (standalone).

## Approach
1. Shared engine (render, progress, submit gate, score, lock answers).
2. Question arrays per level; build/write 3 HTML files.
3. `scripts/validate-quiz.js` — parse `const questions = [...]` từ mỗi HTML.
