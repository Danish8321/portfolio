# CLAUDE.md

## Project Purpose

Angular monorepo shell for a technical blog website. The portfolio is the first feature module. Future modules include a technical blog with article listing and detail views.

## Architecture Overview

```Text
src/app/
├── core/
│   └── data/          # Repository interfaces + implementations
├── shared/
│   └── ui/            # Reusable components (nav, footer) and design tokens
└── features/
    ├── portfolio/      # Lazy-loaded portfolio feature module
    └── blog/          # (future) Lazy-loaded blog feature module
```

### Repository Pattern

Data access follows an abstract repository pattern to decouple components from data sources:

- `PortfolioRepository` — abstract interface (in `core/data/`)
- `LocalPortfolioRepository` — current implementation using in-memory data
- `ApiPortfolioRepository` — future implementation backed by a REST API

Components and services depend only on the abstract `PortfolioRepository`, never on concrete implementations. Provide the concrete class via Angular's DI in `app.config.ts`.

### Routing

| Path | Module | Status |
| --- | --- | --- |
| `/` | — | Redirects to `/portfolio` |
| `/portfolio` | `features/portfolio` | Lazy-loaded |
| `/blog` | `features/blog` | Future |
| `/blog/:slug` | `features/blog` | Future |

### State Management

Angular Signals only. No NgRx, no BehaviorSubject-based stores. Use `signal()`, `computed()`, and `effect()` directly in services and components.

### Styling

Tailwind CSS v4 with CSS custom properties as design tokens. All tokens are defined in `src/styles/theme.css` and consumed via `var(--token-name)` in component styles.

## Conventions

- **Components:** Standalone only (`standalone: true` is the default in Angular v20+)
- **Dependency injection:** `inject()` function — never constructor injection
- **Change detection:** `ChangeDetectionStrategy.OnPush` everywhere
- **TypeScript:** Strict mode enabled — no `any`, no implicit returns
- **Control flow:** Native `@if`, `@for`, `@switch` — never `*ngIf` / `*ngFor`
- **Inputs/Outputs:** `input()` / `output()` signal-based functions — never `@Input()` / `@Output()`
- **Images:** `NgOptimizedImage` for all static `<img>` elements
- **Accessibility:** WCAG AA compliant; all interactive elements must pass AXE checks
- **No `@HostBinding` / `@HostListener`** — use host property in `@Component` decorator instead

## Auto-formatting

PostToolUse hooks in `.claude/settings.json` automatically run Prettier after every `Write` or `Edit` tool call. No manual formatting needed — files are formatted on save.

- Config: `.prettierrc`
- Ignore list: `.prettierignore`
- To check formatting manually: `npx prettier --check src/`
- To fix all at once: `npx prettier --write src/`
