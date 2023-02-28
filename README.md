 

# Typescript Course

[**Typescript Tutorials for Beginners**](https://www.youtube.com/playlist?list=PL0Zuz27SZ-6NS8GXt5nPrcYpust89zq_b) by [Dave Gray](https://www.youtube.com/@DaveGrayTeachesCode)

Learn Typescript from absolute beginner to full projects to React + Typescript in the same project. This playlist will teach you all of the Typescript fundamentals.

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

