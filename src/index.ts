export {};

// EXAMPLE 1 - Get the return Type of a Function in TypeScript

function sum(a: number, b: number): number {
  return a + b;
}

// 👇️ type SumReturnType = number
type SumReturnType = ReturnType<typeof sum>;

// ✅ From a function's type
type AFunctionType = (a: number, b: string) => string;

// 👇️ type AFunctionReturnType = string
type AFunctionReturnType = ReturnType<AFunctionType>;

// ---------------------------------------------------

// // EXAMPLE 2 - Functions that don't return a value return `void`

// function myFunction(a: number, b: number): void {
//   console.log(a);
//   console.log(b);
// }

// // 👇️ type T = void
// type T = ReturnType<typeof myFunction>;

// ---------------------------------------------------

// // EXAMPLE 3 - Functions that throw an error return the type `never`

// function myFunction(): never {
//   throw new Error('Something went wrong');
// }

// // 👇️ type T = never
// type T = ReturnType<typeof myFunction>;
