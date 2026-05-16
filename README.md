# Typescript Vite Boilerplate

## Educational Purpose

This project was created primarily for **educational and learning purposes**.  
While it is well-structured and could technically be used in production, it is **not intended for commercialization**.  
The main goal is to explore and demonstrate best practices, patterns, and technologies in software development.

## Description

**Typescript Vite Boilerplate** is a starting point for building Single Page Applications with **Vanilla TypeScript** and **Vite**, without frameworks or runtime dependencies.

**The problem it solves:** every time you start a vanilla TypeScript SPA from scratch you end up making the same decisions — how to handle routing, how to manage state, how to structure components, how to wire up linting, formatting, and tests. This boilerplate makes those decisions once so you can clone it and go straight to writing product logic.

**What it includes:**

- **Hash-based router** with dynamic segments (`:id`), automatic page cleanup on navigation, and configurable 404 handling via environment variables
- **Observer-pattern store** — a generic abstract `Store<T>` class you extend to define your own state and reducers; subscriptions are per-key and granular, listeners only fire when the specific value they watch actually changes
- **Factory function component model** — components and pages are plain TypeScript functions that return a configured `HTMLElement`, accept typed props, and expose an optional `cleanup()` method; no virtual DOM, no JSX
- **Strict TypeScript config** — `strict`, `exactOptionalPropertyTypes`, `noUncheckedIndexedAccess`, `noImplicitReturns`, zero `any`
- **ESLint + Prettier** wired together, enforced on every commit via Husky + lint-staged
- **Jest 30 + ts-jest + jsdom + Testing Library** fully configured with path aliases, CSS mocks, and a 70% coverage threshold enforced across branches, functions, lines, and statements
- **Typed environment variables** accessed through a constants layer so `import.meta.env` is never scattered across the codebase
- **Path aliases** (`@/*` → `src/*`, `@tests/*` → `__tests__/*`) configured in TypeScript, Vite, and Jest
- **Docker support** for both development (hot reload via volume mount) and production (multi-stage build, Nginx + non-root user)

**How to use it:** clone the repository, rename the project in `package.json`, delete the template pages and components you don't need (`StorePage`, `UsersPage`, etc.), replace `templateStore` with your own stores, and add your routes to the router. The infrastructure — routing, state, testing, linting — stays untouched.

## Technologies Used

1. TypeScript
2. Vite
3. HTML5
4. CSS3
5. Docker
6. Nginx

## Libraries Used

### Dependencies

```
No production dependencies - Pure Vanilla TypeScript
```

### DevDependencies

```
"@eslint/js": "^9.39.2"
"@testing-library/dom": "^10.4.0"
"@testing-library/jest-dom": "^6.6.3"
"@testing-library/user-event": "^14.5.2"
"@types/jest": "^30.0.0"
"@types/node": "^22.0.0"
"eslint": "^9.39.2"
"eslint-config-prettier": "^10.1.8"
"eslint-plugin-prettier": "^5.5.5"
"globals": "^17.3.0"
"husky": "^9.1.7"
"jest": "^30.3.0"
"jest-environment-jsdom": "^30.3.0"
"lint-staged": "^16.2.7"
"msw": "2.10.4"
"prettier": "^3.8.1"
"ts-jest": "^29.4.6"
"typescript": "^5.2.2"
"typescript-eslint": "^8.54.0"
"undici": "^7.25.0"
"vite": "^7.1.6"
```

## Getting Started

With the stack in mind, follow these steps to get the project running locally:

1. Clone the repository
2. Navigate to the project folder
3. Copy the example environment file: `cp .env.example .env`
4. Install dependencies: `npm install`
5. Start the development server: `npm run dev`

The application will open automatically at `http://localhost:3000`.

Useful commands during development:

| Command              | Description                              |
| -------------------- | ---------------------------------------- |
| `npm run dev`        | Start the development server (port 3000) |
| `npm run type-check` | Run TypeScript type checking             |
| `npm run format`     | Format all source files with Prettier    |

### Pre-Commit for Development

`npm install` automatically runs Husky's `prepare` script, which activates the Git hook in `.husky/pre-commit`. From that point on, every commit triggers `lint-staged`, which runs:

- **ESLint + Prettier** on staged `.ts` and `.js` files (autofix on, blocks the commit if any error remains)
- **Prettier** on staged `.json`, `.css`, `.md`, and `.html` files

The ESLint configuration (`eslint.config.js`) enforces TypeScript strict rules: explicit return types, no `any`, consistent type imports, and no unused variables. Prettier enforces 2-space indentation, semicolons, double quotes, and ES5 trailing commas.

You can also run the linters manually at any time:

| Command                | Description                                       |
| ---------------------- | ------------------------------------------------- |
| `npm run lint`         | Check for linting errors                          |
| `npm run lint:fix`     | Fix linting errors in `src/`                      |
| `npm run lint:all`     | Fix linting errors across `src/` and `__tests__/` |
| `npm run format:check` | Check formatting without writing changes          |
| `npm run format:all`   | Format both `src/` and `__tests__/`               |

## Env Keys

Variables are loaded from `.env` (created in step 3 above) and exposed through `src/constants/envs.ts` so `import.meta.env` is never accessed directly from feature code.

| Key                                 | Description                                                                        |
| ----------------------------------- | ---------------------------------------------------------------------------------- |
| `VITE_REDIRECT_IF_ROUTE_NOT_EXISTS` | If `true`, redirects to home when route doesn't exist. If `false`, shows 404 page. |
| `VITE_TEMPLATE_API_URL`             | Users API URL.                                                                     |

Example `.env`:

```bash
VITE_REDIRECT_IF_ROUTE_NOT_EXISTS=false
VITE_TEMPLATE_API_URL=https://jsonplaceholder.typicode.com
```

## Project Structure

```
typescript-vite-boilerplate/
├── .github/
│   └── workflows/
│       └── ci.yml
├── __tests__/
│   ├── __mocks__/
│   │   ├── file.mock.ts
│   │   ├── mswHandlers.mock.ts
│   │   ├── mswServer.mock.ts
│   │   └── style.mock.ts
│   ├── components/
│   │   ├── Action.test.ts
│   │   └── Link.test.ts
│   ├── helpers/
│   │   └── getLocalStorage.test.ts
│   ├── pages/
│   │   ├── AboutPage.test.ts
│   │   ├── HomePage.test.ts
│   │   ├── NotFoundPage.test.ts
│   │   ├── ProductPage.test.ts
│   │   └── StorePage.test.ts
│   ├── router/
│   │   └── appRouter.test.ts
│   ├── stores/
│   │   └── templateStore.test.ts
│   ├── jest.constants.ts
│   ├── jest.polyfills-undici.ts
│   ├── jest.polyfills.ts
│   └── jest.setup.ts
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   │   └── index.ts
│   ├── components/
│   │   ├── Action/
│   │   │   ├── Action.ts
│   │   │   └── Action.css
│   │   └── Link/
│   │       ├── Link.ts
│   │       └── Link.css
│   ├── constants/
│   │   ├── envs.ts
│   │   └── vars.ts
│   ├── core/
│   │   └── store.ts
│   ├── helpers/
│   │   └── getLocalStorage.ts
│   ├── pages/
│   │   ├── AboutPage/
│   │   ├── HomePage/
│   │   ├── NotFoundPage/
│   │   ├── ProductPage/
│   │   └── StorePage/
│   ├── router/
│   │   └── appRouter.ts
│   ├── stores/
│   │   └── templateStore.ts
│   ├── styles/
│   │   └── global.css
│   ├── types/
│   │   ├── envs.ts
│   │   ├── pages.ts
│   │   ├── props.ts
│   │   ├── router.ts
│   │   ├── states.ts
│   │   └── store.ts
│   ├── index.css
│   └── index.ts
├── .husky/
│   └── pre-commit
├── .vscode/
│   ├── extensions.json
│   └── settings.json
├── .editorconfig
├── .env
├── .env.example
├── .gitignore
├── .nvmrc
├── .prettierignore
├── .prettierrc
├── eslint.config.js
├── index.html
├── jest.config.js
├── package.json
├── tsconfig.app.json
├── tsconfig.base.json
├── tsconfig.json
├── tsconfig.test.json
├── vite.config.ts
└── README.md
```

### Folder Descriptions

| Folder                 | Description                                           |
| ---------------------- | ----------------------------------------------------- |
| `__tests__/`           | Contains all test files organized by feature          |
| `__tests__/__mocks__/` | Mock files for static assets (CSS, images)            |
| `src/assets/`          | Static resources like images and fonts                |
| `src/components/`      | Reusable UI components with their styles              |
| `src/constants/`       | Static configuration values and environment variables |
| `src/core/`            | Core abstractions (Store base class)                  |
| `src/helpers/`         | Utility functions not tied to UI                      |
| `src/pages/`           | Page components, each with its own folder             |
| `src/router/`          | Hash-based routing system                             |
| `src/stores/`          | State management implementations                      |
| `src/styles/`          | Global CSS and design tokens                          |
| `src/types/`           | TypeScript types and interfaces                       |

## Architecture & Design Patterns

The folder structure above maps directly onto a layered architecture: pages compose components, components consume props, and both subscribe to stores for shared state.

### Component Architecture

This project follows a **component-based architecture** for the frontend, where each UI element is self-contained with its own logic and styles.

```
┌─────────────────────────────────────────────────────────────┐
│                         PAGES                               │
│                  (HomePage, AboutPage, etc.)                │
│              Compose components and manage state            │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                       COMPONENTS                            │
│                    (Action, Link, etc.)                     │
│              Reusable UI elements with props                │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                         STORE                               │
│                   (Reactive State Management)               │
│              Observable pattern with subscriptions          │
└─────────────────────────────────────────────────────────────┘
```

### Design Patterns Used

#### 1. Observer Pattern (Store)

**Purpose**: Allows components to subscribe to state changes and react automatically.

**Location**: `src/core/store.ts`

```typescript
export abstract class Store<T extends Record<string, unknown>> {
  protected state: T;
  protected listeners: { [K in keyof T]: Listener<T[K]>[] };

  public subscribe<K extends keyof T>(
    key: K,
    listener: Listener<T[K]>
  ): () => void {
    this.listeners[key].push(listener);
    return () => {
      // Unsubscribe logic
    };
  }

  public setState(newState: Partial<T>): void {
    // Notify listeners when state changes
  }
}
```

**Usage**:

```typescript
const unsubscribe = templateStore.subscribe("counter", (value) => {
  console.log("Counter changed:", value);
});
```

**Benefit**: Decouples state management from UI components.

#### 2. Factory Pattern (Components)

**Purpose**: Creates UI elements through functions instead of classes.

**Location**: `src/components/Action/Action.ts`

```typescript
const Action = ({
  id,
  ariaLabel,
  children,
  className,
  onClick,
}: ActionProps): ActionComponent => {
  const action = document.createElement("button") as ActionComponent;
  action.id = id;
  // ... configure element
  return action;
};

export default Action;
```

**Benefit**: Simple, functional approach to creating DOM elements with consistent configuration.

#### 3. Hash-based Router

**Purpose**: Enables SPA navigation without server configuration.

**Location**: `src/router/appRouter.ts`

```typescript
const routes: Route[] = [
  { path: "/", component: HomePage },
  { path: "/about", component: AboutPage },
  { path: "/products/:id", component: ProductPage },
];

export const initRouter = (): void => {
  window.addEventListener("hashchange", renderRoute);
  renderRoute();
};
```

**Features**:

- Dynamic route parameters (`:id`)
- Automatic cleanup on navigation
- 404 handling

#### 4. Cleanup Pattern

**Purpose**: Prevents memory leaks by cleaning up event listeners and subscriptions.

**Location**: `src/pages/StorePage/StorePage.ts`

```typescript
const StorePage = (): HTMLElement => {
  const unsubscribe = templateStore.subscribe("counter", renderCounter);

  main.cleanup = (): void => {
    unsubscribe();
    actionSubtract.cleanup();
    actionPlus.cleanup();
  };

  return main;
};

export default StorePage;
```

**Benefit**: Each page/component manages its own cleanup, preventing memory leaks.

## Testing

The project uses **Jest 30** with `ts-jest` and `jsdom`, plus Testing Library. Setup lives in `__tests__/jest.setup.ts`. CSS and image imports are mocked, and coverage is collected from `src/**/*.ts` (excluding `index.ts`, `.d.ts`, and `types/`).

Run the suite:

| Command                 | Description                                       |
| ----------------------- | ------------------------------------------------- |
| `npm run test`          | Run all tests (verbose)                           |
| `npm run test:watch`    | Watch mode                                        |
| `npm run test:coverage` | Run with coverage report (70% threshold enforced) |

Run a single test file:

```bash
npx jest __tests__/path/to/file.test.ts
```

## Security Audit

Before building or shipping, audit production dependencies for known vulnerabilities:

```bash
npm audit
```

For a production-only check (ignores devDependencies):

```bash
npm audit --omit=dev
```

## Build

Once the test suite is green and the audit is clean, generate the production bundle:

```bash
npm run build
```

This runs `tsc -b` followed by `vite build`, emitting the static assets to `dist/`. To inspect the output locally before shipping, use the preview server:

```bash
npm run preview
```

The preview server runs at `http://localhost:3001`.

## Continuous Integration

The repository ships with a **GitHub Actions** pipeline defined in [`.github/workflows/ci.yml`](.github/workflows/ci.yml). It runs automatically on every `push` and `pull_request` targeting the `main` branch. The pipeline is **validation-only** — there are no release, tagging, or publishing jobs.

### Pipeline overview

```
            ┌─── PR or push to main ───┐
                          ▼
┌────────────────┐  ┌─────────┐  ┌───────┐  ┌──────────────┐
│ lint-and-audit │─▶│ testing │─▶│ build │─▶│ build-docker │
└────────────────┘  └─────────┘  └───────┘  └──────────────┘
```

All four jobs run on `ubuntu-latest` and share a Node version pinned through [`.nvmrc`](.nvmrc), with the `npm` cache reused via `actions/setup-node@v4`. Each job declares `needs:` on the previous one, so a failure short-circuits the rest of the pipeline.

### Validation jobs (run on every PR and push)

1. **`lint-and-audit`** — `npm ci`, `npm run lint` (ESLint flat config) and `npm run type-check` (`tsc --noEmit`). Catches style violations, unused vars, missing explicit return types, `any` usage, and TypeScript errors before anything else runs. Despite the job name, `npm audit` is **not** invoked here; dependency auditing is a manual step documented in [Security Audit](#security-audit).
2. **`testing`** — `npm ci`, `npm run test` (Jest 30 + ts-jest + jsdom + Testing Library). Runs the full suite verbosely. The 70% coverage threshold defined in [`jest.config.js`](jest.config.js) is only enforced when `npm run test:coverage` is invoked, so switch the CI step if you want the threshold to gate the pipeline.
3. **`build`** — `npm ci`, `npm run build` (`tsc -p tsconfig.app.json && vite build`). Validates that the project type-checks under the application config and produces a static bundle under `dist/`. The artifact is not uploaded between jobs.
4. **`build-docker`** — builds **both** images in order:
   - `docker build -f Dockerfile.development -t app:dev .`
   - `docker build -f Dockerfile.production -t app:prod .`

   Verifies that the dev (hot-reload via volume mount) and prod (multi-stage Node 22 + Nginx) Dockerfiles still build cleanly. Images stay on the runner and are discarded when the job ends.

### Where the build outputs live

| Output                                | Location                                                   |
| ------------------------------------- | ---------------------------------------------------------- |
| Lint / type-check / test logs         | **Actions** tab on GitHub                                  |
| Vite bundle (`dist/`)                 | Ephemeral, inside the runner — not uploaded as an artifact |
| Docker images (`app:dev`, `app:prod`) | Ephemeral, inside the runner — not pushed to any registry  |

> **Note:** GitHub's **Packages** section is for package registries (npm, GHCR, etc.) and is **not** populated by this pipeline. If you need to publish the bundle or the production image, add a job that runs only on `push` to `main` (or on tag creation) and pushes to npm / GHCR / Docker Hub — the existing `build` and `build-docker` jobs are good starting points to extend.

### Running the same checks locally

```bash
# lint-and-audit
npm ci
npm run lint
npm run type-check

# testing
npm run test

# build
npm run build

# build-docker
docker build -f Dockerfile.development -t app:dev .
docker build -f Dockerfile.production -t app:prod .
```

## Production

The Production flow assumes the previous steps already passed: [Testing](#testing), [Security Audit](#security-audit), and [Build](#build). What this section adds is the Docker pipeline plus the production-specific environment file.

### Production environment file

Create a `.env` (or override the values in your deployment platform) with the URLs and flags appropriate for production. The same keys documented in [Env Keys](#env-keys) apply.

### Docker — Development

Mounts the project directory as a volume so changes are reflected immediately (hot reload).

```bash
docker compose -f dev.docker-compose.yml up --build
```

The app will be available at `http://localhost:3000`.

### Docker — Production

Multi-stage build: Node 22 compiles the TypeScript and generates the static bundle (same `npm run build` invoked in the [Build](#build) section), then Nginx serves it. The final image contains no Node.js or source code.

> **Note:** `nginx.conf` proxies `/users` to `https://jsonplaceholder.typicode.com` by default. Replace that URL with your own API before deploying. In development the proxy target comes from `VITE_TEMPLATE_API_URL` in `.env`.

```bash
docker compose -f prod.docker-compose.yml up --build -d
```

The app will be available at `http://localhost:3000`.

### Production Setup Details

| Aspect           | Detail                                                                               |
| ---------------- | ------------------------------------------------------------------------------------ |
| Builder image    | `node:22-alpine` — compiles and bundles via `npm run build`                          |
| Runner image     | `nginx:stable-alpine` — serves only the static `dist/` output                        |
| Non-root user    | `appuser` (UID 1001) — nginx master and worker processes run without root privileges |
| Internal port    | `8080` — non-root processes cannot bind to ports below 1024                          |
| Gzip             | Enabled for JS, CSS, JSON, SVG and plain text                                        |
| Static assets    | Cached for 1 year (`Cache-Control: immutable`)                                       |
| HTML / routes    | `no-cache` — ensures users always get the latest `index.html`                        |
| SPA fallback     | All unknown paths serve `index.html` to support client-side routing                  |
| Security headers | `X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`                       |
| Logs             | Redirected to stdout/stderr for Docker log collection                                |
| Healthcheck      | HTTP probe every 30s — restarts the container after 3 consecutive failures           |

## Known Issues

None at the moment.

## Portfolio Link

[`https://www.diegolibonati.com.ar/#/project/typescript-vite-boilerplate`](https://www.diegolibonati.com.ar/#/project/typescript-vite-boilerplate)
