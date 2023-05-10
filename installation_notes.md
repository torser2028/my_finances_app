# Installation process

## Install pnpm

```bash
npm install -g pnpm
```

## Create the project using Vite with the TypeScript template

```bash
pnpx create-vite my-react-app --template react-ts
cd my-react-app
```

## Install dependencies: Add the necessary libraries by running the following commands:

```bash
pnpm add swr zod @vitejs/plugin-react
pnpm add --save-dev vite-plugin-checker @storybook/builder-vite vitest @testing-library/react nock
