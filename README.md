# Package Installation

## Install the required packages for the app (dependencies and devDependencies).

```sh
npm i express mongoose dotenv express-validator autobind-decorator winston cors helmet express-rate-limit
```

### Install TypeScript and related type definitions for development

```sh
npm i --save -D typescript ts-node @types/express @types/node @types/cors
```

### Install ESLint and Prettier for code linting and formatting

```sh
npm i --save-dev @fullstacksjs/eslint-config eslint prettier
```

---

## For Start

1.Create a File .env in Path or Main Root and set your configs {DB_ADDRESS, SERVER_PORT, JWT_KEY}.
2.Build the TypeScript project (compile to JavaScript) =>

```sh
 npm run build
```

3.Start the app in development mode.

```sh
npm run dev
```
