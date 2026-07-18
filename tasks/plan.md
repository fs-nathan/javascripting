# Plan: 30 Days of JavaScript — Interactive Exercises

## Context
- Spec: `docs/specs/30-days-js.md`
- Pattern: reuse UI/UX of `dom-exercises.html` (sticky header, TOC, cards,
  solution toggle, Google Translate on-demand)
- Deliverable: **one file** `30-days-exercises.html`
- Source curriculum: [Asabeneh/30-Days-Of-JavaScript](https://github.com/Asabeneh/30-Days-Of-JavaScript)

## Vertical Slices
Mỗi ngày = 1 slice hoàn chỉnh: đề bài → demo chạy → lời giải ẩn/hiện.

## Phase 1: Foundation
- HTML5 shell, CSS (clone visual language từ DOM page)
- Sticky header + Translate VI/EN
- Intro + TOC Day 01–30
- Shared JS: solution toggle, translate helpers

## Phase 2: Days 01–15 (language fundamentals)
01 Intro → 02 Data Types → 03 Booleans/Date → 04 Conditionals → 05 Arrays →
06 Loops → 07 Functions → 08 Objects → 09 HOF → 10 Sets/Maps →
11 Destructuring → 12 Regex → 13 Console → 14 Errors → 15 Classes

## Phase 3: Days 16–30 (browser + mini projects)
16 JSON → 17 localStorage → 18 Promises → 19 Closures → 20 Clean Code →
21 DOM → 22 Manipulate DOM → 23 Events → 24 Solar weight → 25 Top countries →
26 Filter countries → 27 Portfolio toggle → 28 Leaderboard → 29 Animate text →
30 Project idea generator

## Checkpoints
1. Foundation: trang mở được, TOC + translate buttons hiện.
2. Core: cả 30 demo chạy đúng, solution toggle OK.
3. Polish: console sạch, attribution nguồn, commit.

## Verification
- `python3 -m http.server` → mở `/30-days-exercises.html`
- Smoke-test vài demo mỗi phase + Day 17/18/24/25
- Bấm dịch VI (cần mạng)

## Files
- Create: `30-days-exercises.html`
- Update: `tasks/plan.md`, `tasks/todo.md`
- Already exists: `docs/specs/30-days-js.md`
