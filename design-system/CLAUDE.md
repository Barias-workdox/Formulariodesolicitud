# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

`@webdoxclm/design-system` — a React 18 UI component library built on **Base UI (baseui v14)** and **Styletron** for CSS-in-JS styling, with **i18next** for internationalization (es/en/pt). Published as an ESM package to npm under the `@webdoxclm` scope.

- **Node:** v24.12.0 (see `.nvmrc`)
- **Build:** Vite in library mode (ESM, preserves module structure)
- **Tests:** Vitest with jsdom + Testing Library
- **Storybook:** v9.1 (`@storybook/react-vite`)
- **Linting:** ESLint 9 flat config + Prettier
- **Git hooks:** Husky — pre-commit runs lint-staged, commit-msg runs commitlint
- **Repository:** GitLab (`gitlab.com:webdoxclm/arq/design-system`)

## Commands

| Command | Description |
|---|---|
| `npm run storybook` | Start Storybook dev server (port 6006) |
| `npm run test` | ESLint (zero warnings) + Vitest with coverage |
| `npm run test:dev` | Vitest only (no linting) |
| `npm run test:watch` | Vitest in watch mode |
| `npm run lint` | ESLint with auto-fix |
| `npm run build:package` | Build library (`vite build` + copy package.json to dist/) |
| `npm run build:storybook` | Build static Storybook |
| `npm run build` | Full build (package + storybook) |
| `npm run build:publish` | Build package + publish to local yalc for testing |
| `npm run verdaccio:build` | Build + publish to local Verdaccio registry |

**Run a single test file:**
```bash
npx vitest src/components/button/__tests__/button.test.tsx
```

**Run tests for a component (watch):**
```bash
npx vitest --watch src/components/button
```

**Type-check without emitting:**
```bash
npx tsc --noEmit
```

## Architecture

### Source Layout

```
src/
├── components/       # 120+ UI components
├── contexts/         # DesignSystemProvider, LocaleProvider, ActionCableContext
├── hooks/            # Shared hooks (useDateFnsLocale, useDraggableElement, etc.)
├── themes/           # Theme definitions (v1, v2, v3) and utilities
├── tokens/           # Design tokens (colors, spacing, borders, typography)
├── locales/          # i18n translations (en, es, pt)
├── constants/        # Shared constants
├── types/            # Shared types
├── interfaces/       # Shared interfaces
├── utils/            # Shared utilities
├── assets/           # SVGs and static assets
└── test/             # Test utilities (test-utils.tsx wraps Testing Library)
```

### Component Directory Structure

Every component in `src/components/` follows this layout:

```
component-name/
  __stories__/           # Storybook stories (*.stories.tsx)
  __tests__/             # Tests (*.test.tsx)
  components/            # Sub-components (optional)
  hooks/                 # Component-specific hooks (optional)
  next/                  # Redesigned version of the component (optional)
  component-name.tsx
  component-name.interfaces.ts
  component-name.styles.ts
  component-name.constants.ts  # (optional)
  index.ts               # Barrel exports
```

### The `next/` Pattern

~26 components have a `next/` subdirectory containing a modernized version with:
- **Simplified prop APIs** (e.g., Button: 24 kinds → 5 kinds + 4 appearances)
- **Semantic prop names** (`kind="brand"` + `appearance="filled"` instead of `kind="primary"`)
- **Built-in features** (loading states, start/end enhancers, accessibility handlers)
- **Better composition** (HOC wrappers like `withIsHovered`, dedicated sub-components)

Both versions coexist — the old version remains for backward compatibility while consumers migrate.

### Styling Pattern

Components extend Base UI components via the **overrides pattern**. Styles use Styletron `StyleObject` and are merged with `mergeOverridesDeep(baseOverrides, overrides)`. Typed styled utilities are exported from `src/themes/utilities.ts`:
- `themedStyled` / `themedUseStyletron` / `themedWithStyle` — typed to `DesignSystemTheme`
- `themedStyledGeneric<T>()` — for consumer apps with extended themes

### Provider Pattern

Consumer apps wrap their root with `DesignSystemProvider` which composes:
```
DesignSystemProvider
  └── LocaleProvider (i18n: es/en/pt, date-fns locale)
       └── StyletronProvider (Styletron CSS-in-JS engine)
            └── BaseProvider (BaseUI theme injection)
```

### Path Aliases

Defined in `tsconfig.json` (`baseUrl: ./src`):

`@components/*`, `@constants/*`, `@hooks/*`, `@contexts/*`, `@locales/*`, `@themes/*`, `@tokens/*`, `@types/*`, `@interfaces/*`, `@assets/*`, `@utils/*`, `@test/*` — all resolve to `src/<name>/*`.

## Build System & Consumer Imports

### Build Pipeline

`npm run build:package` runs `vite build && cp package.json dist/package.json`:

1. **Entry discovery:** Glob finds all `.ts/.tsx` files under `src/` (excluding `test/`, `*.stories.*`, `*.test.*`, `*.mock.*`, `*.d.*`) — ~2,500 entry points
2. **Vite/Rollup build:** Compiles to ES modules with `preserveModules: true`, keeping the source directory structure intact under `dist/`
3. **Declaration files:** `vite-plugin-dts` generates `.d.ts` files alongside each `.js` output
4. **SVG transform:** `vite-plugin-svg-component` converts SVGs to React components (named export `ReactComponent` + default base64 data URL)
5. **CSS copy:** `vite-plugin-static-copy` copies `src/themes/*.css` and `src/themes/v3/*.css` to `dist/themes/`
6. **Root-level re-exports:** `rollup-plugin-components-to-root` creates shortcut import paths (see below)
7. **Cleanup:** `rollup-plugin-remove-unwanted` deletes `dist/test/`

### Root-Level Re-Exports (How Consumer Imports Work)

The custom `rollup-plugin-components-to-root` plugin (`plugins/rollup-plugin-components-to-root.ts`) runs after bundling and creates **re-export files at the dist root** for every file under `dist/components/`:

```
dist/
├── components/button/index.js          ← actual compiled code
├── components/button/button.js
├── components/button/button.d.ts
├── button/index.js                     ← generated: export * from '../components/button/index.js'
├── button/index.d.ts                   ← generated: export * from '../components/button/index.d'
├── button/button.js                    ← generated re-export
├── button/button.d.ts                  ← generated re-export
├── themes/                             ← direct output (not re-exported)
├── contexts/                           ← direct output
├── hooks/                              ← direct output
└── package.json                        ← copied from root
```

This enables **two consumer import styles**:

```typescript
// Style 1: Deep import (tree-shakeable, preferred)
import { Button } from '@webdoxclm/design-system/button';
import { Text } from '@webdoxclm/design-system/text';
import { DesignSystemProvider } from '@webdoxclm/design-system/design-system-provider';

// Style 2: From component barrel (still tree-shakeable due to preserveModules)
import { Button } from '@webdoxclm/design-system/components/button';
```

**Key detail:** The package.json has `"files": ["*"]` and no `exports` field — resolution relies entirely on the file structure in `dist/`. The re-export files are plain JS with `export * from '...'` statements (not symlinks).

### Local Development with Consumer Apps

- **yalc:** `npm run build:publish` builds and publishes to yalc for local linking
- **Verdaccio:** `npm run verdaccio:build` publishes to a local npm registry at `localhost:4873`

## Theme System

### Theme Versions

| Version | Export | Status |
|---------|--------|--------|
| v1 | (colors only, via v2) | Deprecated — do not use |
| v2 | `lightTheme` | Deprecated — backward compatible, includes v1 colors |
| v3 | `lightThemeV3` | **Active** — use this for all new work |

### v3 Theme Composition (`src/themes/v3/light/theme.ts`)

```typescript
const overrides: ThemeOverrides = {
  typography: { /* maps BaseUI typography keys to v3 typographies */ },
  colors: {
    ...PRIMITIVE_COLORS,      // Primitive palette (gray0-140, blue0-140, etc.)
    ...SEMANTIC_COLORS,         // Semantic tokens (brand, neutralWashed, positive, etc.) + deprecated element-prefixed aliases
    // + component-specific overrides (button*, tag*, input*, calendar*, alert*, etc.)
  },
  lighting, spacing, borders, elevations,
};
export const lightThemeV3 = { ...createTheme(overrides), ...responsiveTheme } as DesignSystemTheme;
```

### Semantic Color Token System

Tokens follow the pattern: **`{Role}{Modifier}`** — defined in `src/themes/v3/light/colors/semantics.ts`

> **Deprecated:** The old element-prefixed aliases (`bgBrand`, `textNeutral`, `iconPositive`, `borderNegative`) are still generated via `getDeprecatedSemanticColors()` for backward compatibility but must not be used in new code.

**Roles:** Base, Transparent, Neutral, Brand, Positive, Negative, Warning, Peace, Power, Nature, Sweet, Heat

**Modifiers** (lightest → darkest): Washed → Subtle → Depressed → Subdued → *(default)* → Medium → Strong

Example tokens: `brandSubdued`, `neutralStrong`, `positiveWashed`, `negative`

### Primitive Color Palette (`src/tokens/v3/colors.ts`)

Each color family has **8 shade steps: 0, 10, 20, 40, 80, 100, 120, 140** (no 60 step).

Families: gray, blue, green, red, yellow, cyan, purple, lightgreen, magenta, orange. Plus special values: `base` (#FFFFFF), `black`, `transparent`, `webdoxBlue`, `webdoxDarkBlue`.

**Important:** Always use semantic tokens (`brand`, `neutral`, `positive`) in component code, never primitive colors (`blue100`, `gray80`). Primitives should only appear in token definition files.

### Consumer Theme Extension

Apps extend the theme via `createAppTheme`:
```typescript
import { createAppTheme, lightThemeV3 } from '@webdoxclm/design-system/themes';
const appTheme = createAppTheme<MyAppTheme>({ ...lightThemeV3Overrides, colors: { ...extraColors } });
```

## Code Conventions

### TypeScript (strict)

- `no-explicit-any` is an **error**
- `explicit-function-return-type` and `explicit-module-boundary-types` are **required**
- Type imports must use `import type` syntax (separate from value imports)

### JSDoc

- JSDoc with description is **required** on all function declarations, class declarations, exported arrow functions, and exported function expressions
- Param/return types are NOT required (TypeScript handles that)
- TSDoc syntax enforced (`tsdoc/syntax: error`)
- JSDoc rules are **disabled** in test files

### Import Order (enforced)

1. Built-in → 2. External (react first) → 3. Internal (`@components`, etc.) → 4. Parent → 5. Sibling → 6. Index → 7. Object → 8. Type imports (always last)

### Formatting

Single quotes, 100 char print width, single attribute per line in JSX, self-closing tags, blank lines before return statements/functions/interfaces/exports.

## Testing Conventions

- Import from `@test/test-utils` (wraps Testing Library with themed providers)
- `vi` is aliased as `testHelpers` in test utils
- Vitest globals enabled — no need to import `describe`, `it`, `expect`
- Standard pattern:
  ```tsx
  const renderComponent = (props?) => render(<Component {...defaultProps} {...props} />);
  afterEach(() => { testHelpers.clearAllMocks(); });
  ```
- User interactions via `@testing-library/user-event`

## Commit Convention

Conventional Commits enforced by commitlint:
```
[type]([component-name]): [description]
```
Types: `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `chore`

## Key Types

- `DesignSystemTheme` — full theme type (extends BaseUI `Theme` with colors, spacing, breakpoints, elevations, etc.)
- `AppColors` — union of all color tokens (BaseUI colors + semantic tokens + component-specific colors)
- `LightThemeColors` — union of `BgColorType | BorderColorType | IconColorType | TextColorType | keyof typeof LIGHT_COLORS`
- `WithTestId` — adds `data-testid` (deprecated) and `dataTestId` props
- `StyleObject` — Styletron style type used throughout
- `Locale` — `'en' | 'es' | 'pt'`
