# TypeScript Type Error: String Argument to Number Function

This repository demonstrates a common type error in TypeScript where a string is passed as an argument to a function expecting a number.

## Bug Description
The `add` function is defined to accept two number arguments and return their sum. However, the code attempts to call `add` with a string ("1") and a number (2). This leads to a type error because TypeScript's type system enforces type safety.

## Bug Solution
The solution involves ensuring that the arguments passed to the `add` function are of the correct type. This can be done through explicit type checking or by converting the string argument to a number using `parseInt()` or `Number()`.