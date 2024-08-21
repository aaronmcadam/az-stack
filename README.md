# AzStack

My preferred tech stack of TypeScript, Next.js, Tailwind, and shadcn/ui.

## What's inside?

This Turborepo includes the following packages/apps:

### Apps and Packages

- `web`: a [Next.js](https://nextjs.org/) app demonstrating the tech stack
- `@repo/ui`: a design system to be shared across applications
- `@repo/eslint-config`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `@repo/tailwind-config`: Tailwind configurations used throughout the monorepo
- `@repo/typescript-config`: `tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This Turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

### Build

To build all apps and packages, run the following command:

```
cd my-turborepo
pnpm build
```

### Develop

To develop all apps and packages, run the following command:

```
pnpm dev
```
