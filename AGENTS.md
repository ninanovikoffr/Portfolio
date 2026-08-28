# Repository Guidelines

## Project Structure & Module Organization

This is a small React application powered by Vite. Keep application code in `src/`:

- `src/main.jsx` contains the page composition, project data, and Framer Motion animations.
- `src/styles.css` contains global styles, responsive rules, and visual tokens.
- `index.html` is the Vite entry document; `vite.config.js` configures the React plugin.
- Add static assets that should be served unchanged to `public/` (create it when needed).
- There is currently no test directory or test suite.

## Build, Test, and Development Commands

Run these commands from the repository root:

```bash
npm install       # install dependencies
npm run dev       # start the Vite development server
npm run build     # create the production bundle in dist/
npm run preview   # serve the production bundle locally
```

Run `npm run build` before submitting changes to catch JSX, import, and bundling errors. No test or lint script is configured yet.

## Coding Style & Naming Conventions

Use two spaces for indentation and keep JavaScript/JSX in standard ES modules. Prefer functional React components and data-driven rendering, as demonstrated by the `projects` array in `src/main.jsx`. Use `PascalCase` for components, `camelCase` for variables and functions, and descriptive kebab-case BEM-like class names such as `hero__visual` and `project--coral`. Keep animation definitions near the component that uses them. Preserve the existing single-quote style and semicolon-free formatting.

## Testing Guidelines

Tests are not set up. If interactive behavior grows, add a test runner such as Vitest and React Testing Library, place tests beside the relevant module or under `src/__tests__/`, and name them `*.test.jsx`. At minimum, cover navigation, project rendering, and responsive or animation-related state changes.

## Commit & Pull Request Guidelines

The history currently contains only an initial commit, so no established convention is available. Use short, imperative commit subjects (for example, `Add animated project cards`) and keep unrelated changes separate. Pull requests should explain the user-visible result, list validation commands (usually `npm run build`), link related issues when applicable, and include screenshots or a short recording for visual or animation changes.

## Security & Configuration Tips

Do not commit secrets or local environment files; `.env` is ignored. Keep dependencies in `package.json` and update `package-lock.json` whenever dependencies change. Review external font or asset URLs before adding them to the public site.
