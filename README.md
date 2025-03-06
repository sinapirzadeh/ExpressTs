# Package Installation

## Install the required packages for the app (dependencies and devDependencies).

```sh
npm i express mongoose zod winston cors helmet express-rate-limit
```

##TypeScript Configurations

```sh
npm i --save -D typescript ts-node @types/express @types/node @types/cors
npm i --save-dev @fullstacksjs/eslint-config eslint prettier
```

## For Start

1.Copy .evn.example to .env file (first create .env file)

2.Build the TypeScript project (compile to JavaScript) =>

```sh
 npm run build
```

3.Start the app in development mode.

```sh
npm run dev
```

4.if in your Code`s see Error like This (Delete ␍)

```sh
npx eslint --fix .
```
