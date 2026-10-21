# Typescript + Express

## pakages

- to use ts you need to have ts dev dependecies `npm i -D typescript @types/express` and the type of the packages

## Create a tsconfig.json file

- it can be created by the command `tsc --init` but it will have some preconfigured json

```json
{
  "extends": "@tsconfig/node24/tsconfig.json",
  "compilerOptions": {
    "rootDir": "src", // written typescript codes are written here
    "outDir": "dist" // compiled javascript code stored here
  }
}

```

## runner

- here we can add script in the `package.json` to compile and run the code  

```json
  "scripts": {
    "build": "npx tsc",
    "start": "npx tsc && node dist/index.js"
  },
```


## app as Express type

```typescript
import express from "express";
import type { Express } from "express";

const app: Express = express();

const PORT = 8000;

app.listen(PORT, (): void => {
  console.log(`server is up and running on port ${PORT}`);
});

```

## how to compile

- run `npx tsc` to compile the typescript code (here in the src folder) it will create `dist` folder

## request and response take there types

```typescript
app.get("/", (request: Request, response: Response): void => {
  response.json(pets);
});
```

## how to handle on existing route

```typescript
app.use((request: Request, response: Response): void => {
  response.status(404).json({ "nothing found": "404" });
});
```

## handling request params

```typescript
app.get(
  "/:id",
  (request: Request<{ id: string }>, response: Response<Pet>): void => {
    const { id } = request.params;
    const pet = pets.find((e: Pet) => e.id.toString() === id);
    response.json(pet);
  },
);
```
