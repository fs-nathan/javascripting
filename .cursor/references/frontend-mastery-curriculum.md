# Frontend Mastery Curriculum

> **Purpose:** 10-level mandatory knowledge for senior frontend work — review, debug, architecture, and implementation.
> **Use with:** Frontend Developer agent + `.cursor/skills/frontend-mastery/SKILL.md`
> **Bar format:** Each concept has a **Must not be vague** block (3–5 lines). Hand-wavy answers fail.

## How to use

1. Identify the applicable **level(s)** for the question or bug.
2. Before answering, check you meet the bar for each cited concept.
3. For Core Web Vitals thresholds → [`performance-checklist.md`](performance-checklist.md).
4. For deploy security checks → [`security-checklist.md`](security-checklist.md).
5. For WCAG audits → [`accessibility-checklist.md`](accessibility-checklist.md).
6. For CWV remediation workflows → [`frontend-performance` skill](../skills/frontend-performance/SKILL.md).

---

## Table of Contents

- [Level 1 — Basics that must not be vague](#level-1--basics-that-must-not-be-vague)
- [Level 2 — React core & rendering mechanics](#level-2--react-core--rendering-mechanics)
- [Level 3 — Performance & browser foundation](#level-3--performance--browser-foundation)
- [Level 4 — Advanced data & state management](#level-4--advanced-data--state-management)
- [Level 5 — Caching & networking strategy](#level-5--caching--networking-strategy)
- [Level 6 — Security](#level-6--security)
- [Level 7 — Web platform internals](#level-7--web-platform-internals)
- [Level 8 — Concurrency & streams](#level-8--concurrency--streams)
- [Level 9 — Practical performance metrics](#level-9--practical-performance-metrics)
- [Level 10 — Modern frontend system architecture](#level-10--modern-frontend-system-architecture)

---

## Level 1 — Basics that must not be vague

### 1.1 Hydration

**Must not be vague:** Hydration attaches event listeners and client state to server-rendered HTML without re-creating the entire DOM from scratch. Mismatches occur when server HTML differs from the client's first render (dates, random IDs, invalid HTML nesting, browser-only APIs). Know selective/partial hydration vs full client render, and how to trace hydration errors in React 19/Next.js (suppressHydrationWarning is a last resort, not a fix).

### 1.2 Virtual DOM diffing complexity

**Must not be vague:** Reconciliation compares trees keyed by element type and `key` — O(n) heuristics, not optimal edit distance. Unstable keys (array index on reorderable lists) cause unnecessary unmount/remount. Large flat lists without virtualization still pay diff cost even if output DOM is unchanged. Profile before assuming "Virtual DOM is free."

### 1.3 Event loop (macro vs microtasks)

**Must not be vague:** Macrotasks (setTimeout, I/O, render) run one per turn; microtasks (Promise.then, queueMicrotask) drain fully before the next macrotask. `await` schedules continuation as microtask — order matters for race bugs. Long microtask chains block paint and input (INP). Never assume `setTimeout(0)` runs before a resolved Promise.

```javascript
console.log('sync');
Promise.resolve().then(() => console.log('microtask'));
setTimeout(() => console.log('macrotask'), 0);
// sync → microtask → macrotask
```

### 1.4 Critical rendering path

**Must not be vague:** HTML → DOM, CSS → CSSOM, combined render tree → layout → paint → composite. Render-blocking CSS/JS delays first paint; `@import` and sync scripts in `<head>` extend the path. Identify what blocks LCP element discovery (fonts, hero image, lazy hydration). Inline critical CSS; defer/async non-critical JS.

### 1.5 Code splitting strategies

**Must not be vague:** Split by route, feature, or component — trade initial bundle size vs waterfall of chunk requests. Route-level splits align with navigation; component-level splits need Suspense/fallback UX. Preload critical route chunks on intent (hover/focus). Avoid splitting so aggressively that HTTP overhead dominates.

### 1.6 Dynamic import chunking

**Must not be vague:** `import()` creates async chunks named by bundler (webpack magic comments, Vite rollup output). Shared dependencies hoist to common chunks — changing one dynamic import can reshuffle hashes. Use `webpackPrefetch`/`modulepreload` for likely-next routes. Verify chunk size in analyzer, not just count.

### 1.7 Preload vs Prefetch vs Preconnect

**Must not be vague:** **Preload** — high-priority fetch for current navigation (fonts, LCP image, critical script). **Prefetch** — low-priority fetch for likely future navigation. **Preconnect** — early DNS+TLS to origin (CDN, API) without fetching a specific resource. Misusing preload competes with LCP; prefetch on wrong routes wastes bandwidth.

### 1.8 CORS preflight

**Must not be vague:** "Simple" requests skip preflight; non-simple methods, custom headers, or non-simple content-types trigger `OPTIONS`. Server must echo `Access-Control-Allow-Origin` and allowed methods/headers. Credentials require explicit `Access-Control-Allow-Credentials: true` and non-wildcard origin. Debug with Network tab — failed preflight never reaches your handler. See also [5.9 SameSite cookie modes](#59-samesite-cookie-modes), [6.9 CORS preflight internals](#69-cors-preflight-internals).

### 1.9 CSRF vs XSS mitigation

**Must not be vague:** **XSS** — attacker runs script in victim's origin; mitigate with output encoding, CSP, Trusted Types, sanitization (DOMPurify). **CSRF** — attacker triggers authenticated actions from another site; mitigate with SameSite cookies, CSRF tokens, custom headers requiring preflight. XSS steals sessions; CSRF abuses them. Never store secrets in localStorage for XSS-sensitive apps. Align with `.cursor/rules/security.mdc`.

### 1.10 Web Workers vs Service Workers

**Must not be vague:** **Web Workers** — parallel JS threads, no DOM, message-passing for CPU-heavy work (parsing, crypto). **Service Workers** — network proxy, cache, push, offline — lifecycle separate from page, scope by path. Workers terminate when idle; SW persists and updates via install/activate. Wrong tool: SW for pure computation; Worker for intercepting fetch without page control.

---

## Level 2 — React core & rendering mechanics

### 2.1 Reconciliation algorithm

**Must not be vague:** React walks trees comparing element types — same type updates props/DOM in place; different type unmounts subtree. Keys identify stable identity across siblings; missing/wrong keys cause state bugs and DOM reuse errors. Bailout when props/state unchanged (memo, PureComponent, compiler). Understand what triggers full subtree reconciliation vs bailout.

### 2.2 Fiber architecture

**Must not be vague:** Each unit of work is a Fiber node (component instance + hooks list + child/sibling/return pointers). Work-in-progress tree doubles buffering for interruptible render. Hooks live on fiber — order must be stable across renders. Fiber enables concurrent features, error boundaries, and DevTools component tree. Legacy stack reconciler is gone in modern React.

### 2.3 Concurrent rendering

**Must not be vague:** React can pause, resume, and abandon render work based on priority — not the same as `async/await` in components. Transitions (`startTransition`) mark updates as non-urgent; urgent updates (input) can interrupt. Strict Mode double-invokes in dev to surface side effects. Concurrent mode requires compatible data sources (no tearing without `useSyncExternalStore`).

### 2.4 Time slicing

**Must not be vague:** Scheduler breaks render work into frames (~5ms slices) yielding to browser between slices. Prevents long renders from blocking input/paint. Large lists without virtualization still accumulate slice debt. Measure with Performance panel — long tasks during interaction indicate insufficient slicing or sync work on main thread.

### 2.5 Scheduler priorities

**Must not be vague:** Lanes/priorities order updates: discrete input > continuous input > default > transition > idle. Mis-prioritized updates (heavy setState on every keystroke without transition) cause jank. `useDeferredValue` delays showing stale value while re-rendering. Match priority to user expectation — don't defer critical feedback.

### 2.6 Suspense boundaries

**Must not be vague:** Suspense catches promise-throwing children and shows fallback until resolved — coordinates with concurrent rendering. Boundaries should be granular (per-widget) not one app-wide spinner. SSR streaming sends fallback HTML then replaces with content. Error boundaries catch errors; Suspense catches loading — different APIs. Data frameworks integrate via `use()` and cache.

### 2.7 Selective hydration

**Must not be vague:** Not every server-rendered region hydrates immediately — prioritize interactive islands (inputs, cart) over static content. Reduces main-thread work at load and improves TTI/INP. Requires framework support (React 18+, Next.js App Router patterns). Wrong priority hydrates heavy below-fold widgets before LCP interaction targets.

### 2.8 Server Components

**Must not be vague:** RSC run only on server — zero client bundle for their logic, serializable props to client components. Cannot use hooks, browser APIs, or event handlers in Server Components. Client Components (`'use client'`) form the interactive boundary. Defer to `.cursor/rules/project-stack.mdc` when present for framework-specific RSC rules. Composition: server fetches, client interacts.

### 2.9 Tearing in concurrent UI

**Must not be vague:** Tearing — UI shows mixed versions of external store during concurrent render (e.g. legacy Redux subscription). `useSyncExternalStore` forces consistent snapshot per render. TanStack Query / modern libraries handle this; ad-hoc global mutable stores may not. Symptom: flickering values, inconsistent list order during fast updates.

### 2.10 Stale closure problem

**Must not be vague:** Closures capture values from render when callback was created — effects and handlers see old state if deps wrong. `useEffect` missing deps → stale fetches; `useCallback` with empty deps → stale handlers. Functional updates (`setState(prev => ...)`) avoid stale state reads. ESLint exhaustive-deps catches many; understand why, don't blindly suppress.

---

## Level 3 — Performance & browser foundation

> Quick CWV thresholds: [`performance-checklist.md`](performance-checklist.md). Remediation workflows: [`frontend-performance` skill](../skills/frontend-performance/SKILL.md).

### 3.1 Layout thrashing

**Must not be vague:** Interleaving DOM reads (offsetWidth, getBoundingClientRect) with writes forces synchronous layout recalc — "layout thrashing." Batch reads then writes; use `requestAnimationFrame` for visual updates. Virtual DOM doesn't protect against forced sync layout in refs/measurements. DevTools Performance shows "Recalculate Style" / "Layout" spikes.

### 3.2 Paint vs Layout vs Composite

**Must not be vague:** **Layout** — geometry changed, reflow subtree. **Paint** — pixels drawn (color, text, shadows). **Composite** — layers combined by GPU. Changing `width` triggers layout; changing `color` often paint-only; `transform`/`opacity` often compositor-only. Use compositor-friendly animations; avoid animating layout properties at 60fps.

### 3.3 Browser compositing layers

**Must not be vague:** Promoted layers (transform, opacity, will-change, video, canvas) composite on GPU — too many layers waste memory. `will-change` hints promotion; remove after animation. Layer explosion from excessive `translateZ(0)` hacks hurts mobile GPUs. Inspect layers in Chrome DevTools Layers panel.

### 3.4 GPU acceleration in CSS

**Must not be vague:** `transform: translate3d(0,0,0)` promotes layer but doesn't speed layout-bound work. Filter and backdrop-filter are GPU-heavy. Prefer transform/opacity for animations; test on low-end Android. GPU memory limits cause tab crashes on layer-heavy pages.

### 3.5 CSS containment

**Must not be vague:** `contain: layout style paint` isolates subtree recalc — useful for list items, widgets, virtualized rows. `content-visibility: auto` skips rendering off-screen content (approximate size required). Wrong containment breaks `position: fixed` descendants or overflow-visible popovers. Measure before/after on large lists.

### 3.6 Render blocking resources

**Must not be vague:** Parser-blocking scripts without `defer`/`async`, blocking CSS, sync font loading delay FCP/LCP. `media` attribute on link tags scopes CSS blocking. Module scripts defer by default. Move analytics/ads below fold or load after idle. Every blocking resource in `<head>` extends critical path.

### 3.7 Render waterfalls

**Must not be vague:** Sequential discovery → fetch → parse → execute chains (HTML discovers CSS, CSS discovers font, JS discovers chunk). Parallelize with preload/preconnect; avoid import chains in critical path. Network panel waterfall reveals hidden serial dependencies. SSR without streaming still waits for data before bytes ship.

### 3.8 Subpixel rendering

**Must not be vague:** Fractional pixels cause blurry text/lines when elements land on half-pixel boundaries (transforms, zoom, retina scaling). Round dimensions; use `transform` from integer positions. `devicePixelRatio` affects canvas and image sharpness. Layout shift from subpixel rounding contributes to CLS.

### 3.9 Detached DOM nodes

**Must not be vague:** Nodes removed from document but referenced in JS prevent GC — classic memory leak in SPAs (closures holding elements, forgotten listeners). WeakMap patterns or explicit cleanup in effects. DevTools Memory heap snapshot → Detached nodes count. Common in chart libraries, modals, infinite scroll without teardown.

### 3.10 Garbage collection timing

**Must not be vague:** GC pauses main thread — large object graphs and allocation churn cause jank. Reuse objects in hot paths sparingly; avoid creating huge arrays each frame. `performance.memory` (Chrome) hints at pressure. Long tasks during idle may be GC — correlate with allocation timeline in Performance panel.

---

## Level 4 — Advanced data & state management

### 4.1 Structural sharing

**Must not be vague:** Immutable updates reuse unchanged subtrees — only changed paths get new references. Enables cheap equality checks and memoization (Immer, Redux Toolkit). Shallow copy of top level without sharing deep nodes breaks memo benefits. Structural sharing is why `===` on root state can still mean "nothing changed" for subtrees.

### 4.2 Immutable data patterns

**Must not be vague:** Never mutate state in place — spread, Immer produce, or persistent data structures. React state updates rely on reference change for re-render detection. Mutating nested objects without new root reference → silent no-op updates. Same rule for context values and reducer state.

### 4.3 Referential equality

**Must not be vague:** `React.memo`, `useMemo`, selectors use `===` — new object each render defeats memoization even if values equal. Stabilize object/array props with memoization or hoist constants. TanStack Query structural sharing preserves references when data unchanged. Debug with why-did-you-render or React DevTools.

### 4.4 Memoization pitfalls

**Must not be vague:** Memoizing everything adds comparison overhead and code complexity — profile first. Unstable deps (`{}`, inline functions) invalidate memo every render. `useMemo` for cheap ops is slower than recomputing. Memo child but pass unstable callback → still re-renders. Compiler auto-memo may reduce manual need — don't fight it blindly.

### 4.5 Race conditions in UI state

**Must not be vague:** Out-of-order async responses show stale data if last-write-wins without request identity. Abort prior fetch on new input; track request ID and ignore stale responses. Strict Mode double-mount exposes missing cleanup. Optimistic updates need rollback on failure (see 4.8).

### 4.6 Finite state modeling

**Must not be vague:** Model UI as explicit states and events (idle, loading, success, error) — avoid boolean soup (`isLoading && !isError && ...`). XState/state machines prevent impossible states. Forms, wizards, and modals benefit most. Illegal transitions indicate design bugs early.

### 4.7 Event sourcing in frontend

**Must not be vague:** Append-only event log as source of truth; UI derives state by folding events — enables undo, replay, audit, time-travel debug. Heavier than CRUD state; fits collaboration, editors, complex wizards. Snapshot periodically for performance. Not every app needs it — cost vs benefit.

### 4.8 Optimistic UI rollback strategy

**Must not be vague:** Apply UI change before server confirms; on failure revert and notify. Requires idempotent server ops or conflict handling. Queue mutations offline with rollback on sync failure. TanStack Query `onMutate` / `onError` pattern. Never optimistic-delete without undo path.

### 4.9 Deterministic rendering

**Must not be vague:** Same props/state → same output — no `Math.random()`, `Date.now()`, locale drift in SSR without sync. Hydration requires deterministic first client render. Use seeded values or server-passed timestamps. Non-determinism causes flaky tests and hydration mismatches.

### 4.10 Idempotent UI actions

**Must not be vague:** Double-click submit, retry, or duplicate events must not double-charge or duplicate records. Disable button during flight; dedupe by idempotency key server-side. UI debounce ≠ server idempotency — both needed. Especially payment, delete, toggle subscription.

---

## Level 5 — Caching & networking strategy

### 5.1 Cache invalidation strategies

**Must not be vague:** TTL expiry, event-driven invalidation (mutation → bust tags), stale-while-revalidate, versioned URLs. Wrong strategy: infinite cache on user-specific data or no cache on static assets. TanStack Query query keys encode invalidation scope. CDN cache ≠ browser cache — configure both.

### 5.2 Stale-while-revalidate

**Must not be vague:** Serve stale cache immediately while fetching fresh in background — great UX for non-critical data. User may briefly see outdated content — acceptable for feeds, not balances. HTTP `Cache-Control: stale-while-revalidate` and client libraries (SWR, TanStack Query `staleTime`). Tune staleTime vs gcTime consciously.

### 5.3 ETag vs Cache-Control

**Must not be vague:** **Cache-Control** — freshness rules (max-age, no-store). **ETag** — conditional request (`If-None-Match` → 304). ETags save bandwidth on revalidation; Cache-Control avoids request entirely when fresh. `no-store` for sensitive; immutable + hash for hashed assets. Vary header affects cache key correctness.

### 5.4 HTTP/3 and QUIC

**Must not be vague:** QUIC over UDP — multiplexing without head-of-line blocking, faster handshake (0-RTT with caveats), connection migration. Falls back to HTTP/2. Benefits high-latency/mobile most. Your app still needs good caching and fewer round trips — QUIC doesn't fix chatty APIs.

### 5.5 Backpressure in Streams API

**Must not be vague:** ReadableStream signals consumer readiness via `pull()` / desired size — producer must not flood memory. Handle `await writer.ready` when piping. Uncontrolled stream read without backpressure OOMs on large responses. Relevant for streaming SSR, file upload, AI token streams.

### 5.6 AbortController

**Must not be vague:** Cancel in-flight fetch when component unmounts, route changes, or new search supersedes old. Pass `signal` to fetch; catch `AbortError` separately from real errors. Link abort to React effect cleanup. Without abort: setState on unmounted component and race conditions.

### 5.7 Streaming fetch response handling

**Must not be vague:** Read `response.body` reader incrementally — parse NDJSON/SSE/chunked HTML as bytes arrive. Buffer until complete loses TTFB benefits. Handle partial JSON and connection drops. Server must send correct `Content-Type` and disable buffering (nginx `X-Accel-Buffering`).

### 5.8 Priority hints

**Must not be vague:** `fetchpriority="high"` on LCP image; `low` on below-fold. Preload sets priority implicitly. Mis-prioritization starves LCP for decorative assets. Resource Timing API verifies actual priority (browser-dependent). Part of holistic critical path tuning.

### 5.9 SameSite cookie modes

**Must not be vague:** **Strict** — no cross-site send (best CSRF, breaks some OAuth flows). **Lax** — top-level GET navigation only (default, balanced). **None** — requires Secure; cross-site embeds/APIs. `HttpOnly` + `Secure` for session cookies. Complements [1.8 CORS preflight](#18-cors-preflight) and CSRF defenses.

### 5.10 Speculative prerendering

**Must not be vague:** Browser/speculation rules prerender likely next page — instant navigation when correct, wasted bandwidth/CPU when wrong. `<link rel="prefetch">` vs Speculation Rules API vs Next.js `<Link prefetch>`. Privacy and auth pages must opt out — prerendering authenticated routes leaks data.

---

## Level 6 — Security

> Deploy checklist: [`security-checklist.md`](security-checklist.md). Never hand-wave threat models.

### 6.1 Content Security Policy (CSP)

**Must not be vague:** Whitelist script/style/connect sources — blocks inline script unless nonce/hash. Start report-only, tighten gradually. `'unsafe-inline'` defeats most XSS protection. `strict-dynamic` for modern bundlers. Breakage symptoms: blocked analytics, fonts, WebSocket — check console CSP reports.

### 6.2 Trusted Types

**Must not be vague:** Enforces typed DOM sinks — `innerHTML` requires TrustedHTML from policy, blocking DOM XSS injection. Supported Chromium; polyfill/fallback strategies elsewhere. Integrates with CSP `require-trusted-types-for 'script'`. Libraries must be compatible or use policy createHTML wrappers.

### 6.3 DOM clobbering

**Must not be vague:** Named elements (`<img name="x">`) inject properties on `window`/`document` — can break scripts expecting undefined. CSP and sanitization reduce injection vectors. Avoid `document.x` patterns; use `getElementById`. Legacy apps and third-party HTML embeds are vulnerable.

### 6.4 Prototype pollution

**Must not be vague:** Merging untrusted JSON onto `{}` can set `__proto__` / `constructor.prototype` — affects all objects. Use `Object.create(null)` maps, structured clone, schema validation (Zod), libraries patched against pollution. Supply chain in lodash-era merge utilities — validate deep merge sources.

### 6.5 Same-origin policy nuances

**Must not be vague:** Origin = scheme + host + port. Documents iframes cross-origin can't read DOM; postMessage with origin check for communication. CORS relaxes **reading** cross-origin responses, not sending. Cookies scoped by domain/path/SameSite — different from SOP. `document.domain` is legacy — don't use.

### 6.6 Service Worker lifecycle traps

**Must not be vague:** New SW waits in `waiting` until tabs close — users stuck on old cache. `skipWaiting` + `clients.claim()` forces update but can mid-session break. Version caches explicitly; delete old caches on activate. Scope limited to path — wrong registration path = no control. Auth tokens in SW cache = risk.

### 6.7 SharedArrayBuffer

**Must not be vague:** Requires cross-origin isolated context (`Cross-Origin-Opener-Policy`, `Cross-Origin-Embedder-Policy`) — Spectre mitigation. Enables true shared memory with Atomics — WASM, multi-thread. Without headers, SAB is disabled in modern browsers. Breaks third-party embeds without CORP headers.

### 6.8 Transferable objects

**Must not be vague:** `postMessage` can transfer ArrayBuffer ownership zero-copy — sender neutered after transfer. Structured clone duplicates for non-transferables. Workers + transfer for large binary without copy cost. Detached buffer access throws — coordinate lifecycle.

### 6.9 CORS preflight internals

**Must not be vague:** Browser sends OPTIONS; server responds with allowed origin/methods/headers/max-age. Preflight cache (`Access-Control-Max-Age`) reduces OPTIONS traffic. Custom headers like `Authorization` trigger preflight. **Cannot** fix CORS purely client-side. See [1.8](#18-cors-preflight) for basics; this is server contract debugging (204/200, echo exact header names).

### 6.10 Offline conflict resolution

**Must not be vague:** Offline writes sync later — last-write-wins loses data; need versioning, CRDTs, or server merge. UI shows conflict UI for unmergeable edits. IndexedDB + SW background sync patterns. E-commerce inventory cannot blindly LWW — business rules decide.

---

## Level 7 — Web platform internals

### 7.1 Islands architecture

**Must not be vague:** Static HTML shell with small hydrated interactive islands — minimal JS vs full SPA. Astro popularized; Next.js can approximate with selective client components. Wrong granularity: island per button vs one island per page — balance hydration cost and isolation.

### 7.2 Partial hydration

**Must not be vague:** Only interactive subtrees hydrate; static HTML stays inert — reduces JS execution at load. Differs from full hydration and progressive enhancement. Framework must not ship client bundle for static regions. Pair with [2.7 Selective hydration](#27-selective-hydration).

### 7.3 Streaming SSR

**Must not be vague:** Send HTML shell early, stream completed segments as async data resolves — improves TTFB vs buffer-all SSR. Suspense boundaries map to stream chunks. Reverse proxies must not buffer entire response. Error mid-stream needs fallback HTML and status handling.

### 7.4 Shadow DOM

**Must not be vague:** Encapsulated DOM + scoped CSS — internals hidden from `document.querySelector`. Slots project light DOM children. Event retargeting affects delegation — clicks appear from host. Design systems use shadow for widget isolation; test a11y tree exposure.

### 7.5 Custom Elements lifecycle

**Must not be vague:** `connectedCallback`, `disconnectedCallback`, `attributeChangedCallback`, `adoptedCallback` — mirror mount/unmount/props. Upgrade undefined → defined when script loads. Sync vs async definition affects parser. Framework wrappers must forward lifecycle correctly.

### 7.6 Web Components interoperability

**Must not be vague:** React historically mismatched props vs attributes on custom elements — use property setters or `@lit/react` wrappers. Events may need lowercase native listeners. SSR custom elements needs declarative shadow DOM or hydration libs. Test form participation and focus management.

### 7.7 IntersectionObserver internals

**Must not be vague:** Async, batched callbacks when element visibility crosses thresholds — no scroll listener jank. Root margin expands hit area for early lazy load. `isIntersecting` vs `intersectionRatio` differ near edges. Unobserve after load to save work.

### 7.8 ResizeObserver loop limits

**Must not be vague:** ResizeObserver fires when element size changes — infinite loop if callback mutates size synchronously. Browser throws "ResizeObserver loop limit exceeded" and defers — fix feedback loops. Use for container queries polyfills, chart resize — debounce heavy work.

### 7.9 MutationObserver cost

**Must not be vague:** Observes DOM mutations — expensive on large subtrees and high churn. Prefer framework lifecycle or targeted observers. `subtree: true` on `document.body` is a performance footgun. Use for third-party widget integration when no hooks exist.

### 7.10 OffscreenCanvas

**Must not be vague:** Canvas rendering in Worker — off main thread for games, charts, image processing. Transfer control from DOM canvas or create offscreen. No direct DOM from worker — post bitmap or use WebGL. Fallback when unsupported: main thread canvas.

---

## Level 8 — Concurrency & streams

### 8.1 Task starvation

**Must not be vague:** Low-priority tasks never run if high-priority work always pending — infinite transition updates starve idle cleanup. Scheduler starvation also on main thread: tight loop blocks microtasks/macrotasks. Yield with `setTimeout(0)`, `scheduler.postTask`, or break work. Symptom: loading spinner stuck, analytics never fires.

### 8.2 Priority inversion in async code

**Must not be vague:** High-priority UI waits on low-priority async completion because shared lock/order — e.g. await slow fetch before paint urgent banner. Separate critical path from background sync; don't chain unrelated awaits in one effect. INP regressions often from priority inversion on main thread.

### 8.3 Scheduler internals

**Must not be vague:** React Scheduler (and browser `scheduler.postTask`) coordinate with `isInputPending` — cooperative multitasking. `shouldYield` ends slice. Not OS thread scheduler — still single main thread. Understanding helps debug why transitions defer but clicks don't.

### 8.4 Concurrent rendering tearing

**Must not be vague:** Same as [2.9 Tearing](#29-tearing-in-concurrent-ui) at pipeline level — external store read mid-render shows inconsistent UI. Fix with `useSyncExternalStore`, versioned snapshots, or blocking render for legacy stores. Test fast scroll + live updates under Strict Mode.

### 8.5 Backpressure handling

**Must not be vague:** Producers must respect consumer speed — streams, SSE, WebSocket flood, rapid setState from socket. Batch updates (`startTransition`, rAF throttle), drop/sample high-frequency events. Unbounded queues grow memory and INP.

### 8.6 Streaming SSR pipelines

**Must not be vague:** Data loaders → React render → HTML stream → browser progressive parse. Backpressure if server generates faster than network drains — pause render or buffer limits. Edge vs Node runtime differences (streams API, timing). Pair with [7.3 Streaming SSR](#73-streaming-ssr).

### 8.7 WebRTC basics

**Must not be vague:** P2P media/data via ICE/STUN/TURN for NAT traversal — signaling server sets up connection. Not HTTP — separate security model (DTLS-SRTP). Frontend: getUserMedia permissions, connection state UI, bandwidth adaptation. TURN required when P2P fails.

### 8.8 CRDT basics for collaboration

**Must not be vague:** Conflict-free replicated data types merge concurrent edits without central lock — eventual consistency. Used in Figma-like editors, Yjs, Automerge. Trade memory/size for merge correctness. UI shows merged state; not same as operational transform server authority.

### 8.9 Shared memory models

**Must not be vague:** Main thread vs Worker vs SharedArrayBuffer — who owns which buffer. Atomics for coordination. COOP/COEP required for SAB. Race conditions if no proper memory ordering. Prefer message-passing unless profiling proves copy cost too high.

### 8.10 Deterministic UI under async

**Must not be vague:** Async completions arrive out of order — UI must show consistent state (request tokens, latest-wins, merge). Skeleton → content transitions shouldn't flash wrong user's data. Combine with [4.5 Race conditions](#45-race-conditions-in-ui-state) and [4.9 Deterministic rendering](#49-deterministic-rendering).

---

## Level 9 — Practical performance metrics

> Numeric thresholds: [`performance-checklist.md`](performance-checklist.md). WCAG audits: [`accessibility-checklist.md`](accessibility-checklist.md).

### 9.1 First Input Delay (FID)

**Must not be vague:** FID measures delay from first user input to event handler start — main thread busy (long tasks) inflates it. **Legacy metric** — replaced by INP but still in field data historically. Reduce JS at load, break up long tasks, defer third parties. Target context in performance checklist.

### 9.2 Interaction to Next Paint (INP)

**Must not be vague:** INP captures slowest interaction latency (click/tap/key) to next frame paint — holistic responsiveness metric. Poor INP: heavy handlers, layout thrashing, large re-renders on click. Optimize event handlers, use transitions, virtualize lists. See checklist for Good/Needs Work/Poor thresholds.

### 9.3 Cumulative Layout Shift (CLS)

**Must not be vague:** CLS sums unexpected layout shift scores — images without dimensions, dynamic injects, web fonts FOIT/FOUT. Reserve space with aspect-ratio, skeleton sizes, `font-display: swap` + metric override. User-initiated shifts (within 500ms) discounted differently. Target < 0.1 good.

### 9.4 Largest Contentful Paint (LCP)

**Must not be vague:** LCP element usually hero image/text block — time until largest paint in viewport. Optimize discovery (preload), TTFB, render-blocking resources, image format/size. Client-side nav may not update LCP same as load. Target < 2.5s good.

### 9.5 PerformanceObserver API

**Must not be vague:** Subscribe to `paint`, `largest-contentful-paint`, `layout-shift`, `longtask`, `event` entry types — RUM in production with `buffered: true`. Respect privacy and volume — sample rates. Correlate with navigation timing for full picture.

### 9.6 Long Tasks API

**Must not be vague:** Tasks > 50ms block input — PerformanceObserver `longtask` attributes blame to scripts/iframe. Break work, move to worker, use idle callbacks. Long tasks during interaction window hurt INP directly. Main thread is zero-sum at scale.

### 9.7 Browser memory leak detection

**Must not be vague:** Heap snapshot diff — detached DOM, growing listeners, closures holding large graphs. Performance monitor JS heap trend over SPA navigations. Common: charts, maps, global caches without eviction. Fix teardown in `useEffect` return and route leave.

### 9.8 Accessibility tree

**Must not be vague:** Parallel tree to DOM — roles, names, states exposed to assistive tech. Not identical to DOM (aria overrides, visibility). DevTools Accessibility pane inspects computed name from label/aria/text. Broken tree → screen reader silence or wrong announcements.

### 9.9 ARIA live regions internals

**Must not be vague:** `aria-live="polite|assertive"` queues announcements — polite waits for idle; assertive interrupts. Too chatty live regions overwhelm users. `aria-atomic`, `aria-relevant` control granularity. Prefer visible status; live regions for async updates (toast, validation).

### 9.10 Pointer events model

**Must not be vague:** Unified mouse/touch/pen — `pointerdown` vs separate touch handlers. `touch-action` CSS prevents scroll delay; `passive: false` only when preventDefault needed. Hit testing order follows stacking context. Mobile 300ms tap delay largely gone with viewport meta + pointer events.

---

## Level 10 — Modern frontend system architecture

### 10.1 Edge rendering

**Must not be vague:** Render at CDN edge close to user — lower TTFB, geo-distributed, limited runtime (Workers, Edge Functions). Not full Node — no long CPU, filesystem, some APIs missing. Split: static at edge, dynamic origin, personalize at edge with cookies/headers. Cold start and cache invalidation complexity.

### 10.2 Micro-frontend orchestration

**Must not be vague:** Independent deployable UI slices — shell loads remotes (iframe, module federation, web components). Shared design system and auth contract required. Failure isolation vs integration cost. Avoid duplicate React copies breaking hooks. Routing and CSS isolation are hard parts.

### 10.3 Module federation

**Must not be vague:** Webpack/Vite federation — runtime share of remote modules across apps (`remoteEntry.js`). Shared dependency versioning (singleton React) critical. Enables independent deploy; adds network/runtime coupling. Fallback when remote down — error boundaries and cached builds.

### 10.4 WebAssembly integration

**Must not be vague:** Near-native compute in browser — port codecs, editors, games from C/Rust. JS↔WASM boundary has marshaling cost; bulk work inside WASM. Threading needs SAB + COOP/COEP. Load size vs JS — measure before adopting for small helpers.

### 10.5 IndexedDB scaling strategy

**Must not be vague:** Async key-value store — large structured data, offline cache, not for hot reactive state. Version migrations explicit (`onupgradeneeded`); blocking opens freeze UI. Index design for query patterns; batch transactions. Quota eviction under storage pressure — handle `QuotaExceededError`.

### 10.6 Server Components architecture

**Must not be vague:** Server/client split across app tree — data fetching on server, interactivity on client boundaries. Reduces client JS; adds mental model and deployment coupling to server. Caching and serialization rules for props. Defer to `project-stack.mdc` for project-specific patterns. Pairs with [2.8 Server Components](#28-server-components).

### 10.7 Offline-first design

**Must not be vague:** Local source of truth syncs to server — optimistic UI, conflict resolution, queue mutations. SW cache strategies (network-first vs cache-first) per resource type. UX for offline state honest (not fake online). Test flaky network not just airplane mode.

### 10.8 Conflict resolution models

**Must not be vague:** LWW, vector clocks, CRDT merge, server authoritative reject — pick per domain (notes vs inventory). UI exposes conflicts users care about; auto-merge the rest. Ties to [6.10 Offline conflict resolution](#610-offline-conflict-resolution) and [8.8 CRDT basics](#88-crdt-basics-for-collaboration).

### 10.9 Distributed UI consistency

**Must not be vague:** Multiple tabs, devices, edge caches show same logical state — broadcast channel, `storage` event, WebSocket sync, SWR revalidation. Stale tab after logout is security issue. Real-time + cache TTL tension — version stamps on entities.

### 10.10 Frontend system design trade-offs

**Must not be vague:** Explicit tradeoffs: SSR vs CSR vs static vs island; monolith SPA vs micro-frontend; client vs server state; build time vs runtime config. No universal best — optimize for team size, SEO, interactivity, deploy independence, and p95 mobile hardware. Document decisions in ADR; revisit when constraints change.

---

## Related assets

| Asset | Use for |
|-------|---------|
| [`frontend-mastery` skill](../skills/frontend-mastery/SKILL.md) | Review/debug/architecture behavior |
| [`frontend-performance` skill](../skills/frontend-performance/SKILL.md) | CWV remediation — 12 principles |
| [`performance-checklist.md`](performance-checklist.md) | LCP/INP/CLS thresholds |
| [`security-checklist.md`](security-checklist.md) | Pre-deploy security |
| [`accessibility-checklist.md`](accessibility-checklist.md) | WCAG audits |
| `.cursor/rules/project-stack.mdc` | Brownfield stack overrides (when present) |

