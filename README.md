# Typescript Course

[**Typescript Tutorials for Beginners**](https://www.youtube.com/playlist?list=PL0Zuz27SZ-6NS8GXt5nPrcYpust89zq_b) by [Dave Gray](https://www.youtube.com/@DaveGrayTeachesCode)

Learn Typescript from absolute beginner to full projects to React + Typescript in the same project. This playlist will teach you all of the Typescript fundamentals.

- Chapter 1: Start Here
- Chapter 2: Basic Types
- Chapter 3: Arrays & Objects
- Chapter 4: Functions
- Chapter 5: Assertions
- Chapter 6: Classes
- Chapter 7: Index Signatures & keyof Assertions
- Chapter 8: Generics
- Chapter 9: Utility Types
- Chapter 10: Vite.js + TypeScript
- Chapter 11: TypeScript Project
- Chapter 12: React + TypeScript
- Chapter 13: React Hooks + TypeScript
- Chapter 14: React useReducer + TypeScript
- Chapter 15: React useContext + TypeScript
- Chapter 16: React + TypeScript Project Part 1
- Chapter 17: React + TypeScript Project Part 2

## Projects TOC

- [typescript-foundation](./typescript-foundation) - Chapter 1 ~ 9
- [typescript-project](./typescript-project) - Chapter 11
- [typescript-react-project](./typescript-react-project) - Chapter 12
- [typescript-react-hooks-project](./typescript-react-hooks-project) - Chapter 13
- [typescript-react-useReducer](./typescript-react-useReducer) Chapter 14 (Learn useReducer with Typescript + React Hooks)
- [typescript-react-useContext](./typescript-react-useContext) Chapter 15 (Context API React + Typescript | useContext & useReducer Examples) **starting from chapter 14**
- [typescript-react-shopping-cart](./typescript-react-shopping-cart) Chapter 16, 17

## Get Started

Global Install Typescript with `npm`:

```shell
npm i typescript -g
```

### Compile TS File:

```shell
tsc main.ts

tsc main.ts --watch
```

### Generate `tsconfig.json`:

```shell
tsc --init

# then, compile ts files with tsconfig setting
tsc --watch
```

### Compile with `noEmitOnError`:

you can enable `noEmitOnError` flag in `tsconfig.json` or with a command

```shell
tsc --watch --noEmitOnError
```

## Resourses

- [Index Signatures in TypeScript](https://dmitripavlutin.com/typescript-index-signatures/)
- [TypeScript Generics – Use Case and Examples](https://www.freecodecamp.org/news/typescript-generics-use-case-example/)
- [Complete Guide to Using Typescript Generics - CopyCat Blog](https://www.copycat.dev/blog/typescript-generics/)
- [Using TypeScript generics to create reusable components](https://blog.logrocket.com/using-typescript-generics-create-reusable-components/)
- [Documentation - Utility Types - TypeScript](https://www.typescriptlang.org/docs/handbook/utility-types.html)
- [Utility Types In Typescript - DEV Community](https://dev.to/kalashin1/utility-types-in-typescript-4nfo)
- [A Complete Guide to TypeScript Utility Types - Cam McHenry](https://camchenry.com/blog/typescript-utility-types)
