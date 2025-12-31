# CI/CD Testing Suite For Calculator App

[![CodeQL Advanced](https://github.com/york-dmason/dmason-static-pages-deploy/actions/workflows/codeql.yml/badge.svg)](https://github.com/york-dmason/dmason-static-pages-deploy/actions/workflows/codeql.yml)
[![Tests](https://github.com/york-dmason/dmason-static-pages-deploy/actions/workflows/deploy-pages.yml/badge.svg)](https://github.com/york-dmason/dmason-static-pages-deploy/actions/workflows/deploy-pages.yml)


## Contents
- [Project Description](#project-description)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Project Structure](#project-structure)
- [Deployment](#deployment)
- [Testing](#testing)
- [Git Hooks](#git-hooks)
- [Troubleshooting](#troubleshooting)

## Project Description

This project is a CI/CD testing suite built around a calculator application serving as a practical example of a modern React application including:
- Full TypeScript
- Unit Testing with Vitest
- Automated CI/CD pipeline via Github Actions
- Github Pages deployment

The app is a four-function calculator - and supports basic arithmetic operations (addition, subtraction, multiplication, division) with proper error handling for edge cases like division by zero.

## Tech Stack

- **React** ^19.2.0 - UI library
- **TypeScript** ^5.9.3 - Type safety
- **Vite** ^7.2.4 - Build tool and dev server
- **Vitest** ^4.0.16 - Unit testing framework
- **Cypress** ^15.8.1 - End-to-end testing framework
- **ESLint** ^9.39.1 - Code linting
- **jsdom** ^27.3.0 - DOM simulation for testing

**Package Dependencies**
Setting up ESLint + Prettier
```bash
npm install --save-dev @typescript-eslint/eslint-plugin @typescript-eslint/parser typescript-eslint prettier eslint-config-prettier eslint-plugin-prettier
```

## Prerequisites

Before begining ensure to have the following:
- **Node.js** version 20.x or higher
- **npm** version 9.x or higher (comes with Node.js 20)

To check your versions:
```bash
node --version
npm --version
```

## Getting Started

### Installation

1. Clone the repository:
```bash
git clone https://github.com/york-dmason/dmason-static-pages-deploy.git
cd dmason-static-pages-deploy
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or the next available port).

## Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Starts the Vite development server with hot module replacement |
| `npm run build` | Creates an optimized production build in the `dist/` directory |
| `npm run preview` | Previews the production build locally |
| `npm run test` | Runs all unit tests using Vitest |
| `npm run test:e2e` | Runs all end-to-end tests using Cypress (headless mode) |
| `npm run cypress:open` | Opens Cypress Test Runner (interactive mode) |
| `npm run cypress:run` | Runs Cypress tests in headless mode |
| `npm run lint` | Runs ESLint to check for code quality issues |
| `npm run typecheck` | Runs TypeScript compiler to check for type errors without emitting files |

## Deployment

### Live Site
**Deployed Site:** [https://york-dmason.github.io/dmason-static-pages-deploy/](https://york-dmason.github.io/dmason-static-pages-deploy/)

### How Deployment Works
Update in progress

### Base Path Config
Update in progress

## Testing

This project uses Vitest for unit testing and Cypress for end-to-end testing.

### Unit Tests
Tests are located alongside their source files with the `.test.ts` extension.

Run unit tests:
npm run test
The calculator utility (`src/utils/calculator.ts`) includes comprehensive tests covering:
- All four arithmetic operations
- Division by zero handling
- Invalid operation handling

### End-to-End Tests
E2E tests are located in `cypress/e2e/` and test the full application in a browser environment.

Run E2E tests:h
# Run in headless mode (CI)
npm run test:e2e

# Open Cypress Test Runner (interactive)
npm run cypress:open

# Run Cypress directly
npm run cypress:runThe E2E test suite (`cypress/e2e/calculator.cy.ts`) covers:
- Calculator UI loads correctly
- All four operations work (add, subtract, multiply, divide)
- Division by zero error handling
- Input validation
- Result display
- Decimal and negative number handling

**Note:** Before running E2E tests, make sure the development server is running:sh
npm run devThen in another terminal, run:
npm run cypress:open

## Git Hooks

This project uses [Husky](https://typicode.github.io/husky/) to automatically run quality checks before commits and pushes:

- **Pre-commit**: Runs `lint` and `format:check` to catch formatting and linting issues before committing
- **Pre-push**: Runs `typecheck`, `lint`, and `test` to ensure code quality before pushing to remote

These hooks help catch issues locally before they reach CI, saving time and keeping the codebase clean.

### Bypassing Hooks (Not Recommended)

If you need to bypass hooks in an emergency (not recommended for regular use):
```bash
git commit --no-verify  # Skip pre-commit hook
git push --no-verify    # Skip pre-push hook
```

**Notes**

Making Contributions:

1. **Fork the repository** and create a new branch from `main`
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes** following the project's code style:
   - Write TypeScript with strict typing
   - Add tests for new features
   - Ensure all tests pass: `npm run test`
   - Check types: `npm run typecheck`
   - Lint your code: `npm run lint`

3. **Commit your changes** with clear commit messages

4. **Push to your fork** and create a Pull Request targeting the `main` branch

5. **Ensure CI passes**: All checks (typecheck, lint, test, build) must pass before your PR can be merged

----
Quick Links
- [React Documentation](https://react.dev/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Vite Documentation](https://vite.dev/)
- [Vitest Documentation](https://vitest.dev/)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)