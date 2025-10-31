# Template Vite Vanilla TS

## Educational Purpose

This project was created primarily for **educational and learning purposes**.  
While it is well-structured and could technically be used in production, it is **not intended for commercialization**.  
The main goal is to explore and demonstrate best practices, patterns, and technologies in software development.

## Getting Started

1. Clone the repository
2. Join to the correct path of the clone
3. Execute: `yarn install` or `npm install`
4. Execute: `yarn run dev` or `npm run dev`

## Description

Personal template for carrying out a project with Vite Vanilla and TypeScript.

## Technologies used

1. Typescript
2. CSS3
3. HTML5
4. Vite

## Libraries used

#### Dependencies

```
There are no dependencies.
```

#### devDependencies

```
"@testing-library/dom": "^10.4.0"
"@testing-library/jest-dom": "^6.6.3"
"@testing-library/user-event": "^14.5.2"
"@types/jest": "^29.5.14"
"jest": "^29.7.0"
"jest-environment-jsdom": "^29.7.0"
"ts-jest": "^29.2.5"
"ts-node": "^10.9.2"
"typescript": "^5.2.2"
"vite": "^7.1.6"
```

## Portfolio Link

[`https://www.diegolibonati.com.ar/#/project/Template-Vite-Vanilla-TS`](https://www.diegolibonati.com.ar/#/project/Template-Vite-Vanilla-TS)

## Testing

1. Join to the correct path of the clone
2. Execute: `yarn test` or `npm test`

## Project Structure

```
project-root/
├── public/
├── src/
│   ├── assets/
│   │   ├── css/
│   │   └── export.ts
│   ├── components/
│   │   ├── Action/
│   │   └── Link/
│   ├── constants/
│   │   ├── envs.ts
│   │   └── vars.ts
│   ├── core/
│   │   └── store.ts
│   ├── entities/
│   │   ├── envs.ts
│   │   ├── pages.ts
│   │   ├── props.ts
│   │   ├── router.ts
│   │   ├── states.ts
│   │   └── store.ts
│   ├── helpers/
│   │   ├── getLocalStorage.ts
│   │   └── getLocalStorage.test.ts
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
│   │   ├── colors.ts
│   │   ├── theme.ts
│   │   └── index.css
│   ├── index.css
│   └── index.ts
├── tests/
│   └── jest.setup.ts
├── tests_mocks/
│   ├── fileMock.ts
│   └── styleMock.ts
└── vite.config.ts
```

1. `src` -> Root directory of the source code. Contains the full application logic, including components, pages, router, stores, and styles.
2. `assets` -> Holds static resources such as images, fonts, and CSS files.
3. `components` -> Contains **reusable UI components** that can be shared across different pages
4. `constants` -> Holds static configuration values and environment constants.
5. `core` -> Contains low-level logic shared across the entire app.
6. `entities` -> Defines all **TypeScript entities, types, and interfaces** used by the project.
7. `helpers` -> Contains reusable **utility functions** that are not directly tied to UI rendering.
8. `pages` -> Contains **main views (pages)** of the application. Each subfolder represents a separate page and can include its own `.ts` (logic) and `.css` (styling) files.
9. `router` -> Handles all routing logic for the SPA (Single Page Application).
10. `stores` -> Contains specific store implementations that extend the core store system.
11. `styles` -> Defines the **visual system and theming** of the project.
12. `index.css` -> Defines the **global styling baseline** for the entire app.
13. `index.ts` -> The **main entry point** of the application.
14. `public` -> Contains static files that are served directly by Vite and included in the final build. These files are **not processed by TypeScript or bundling**, so they can be referenced directly in HTML.
15. `tests` -> This folder contains essential test configurations.
16. `tests_mocks` -> Contains **mock data, fake APIs, and test doubles** used exclusively in test suites.

## Known Issues
