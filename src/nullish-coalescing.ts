export function someFn(param?) {
  const resultFromLocalStorage = param;
  const value = resultFromLocalStorage || 10;
  console.log(value);
}

someFn(12);

// someFn();

// someFn(0);

// With nullish coalescing

// export function someFn(param?) {
//   const resultFromLocalStorage = param;
//   const value = resultFromLocalStorage ?? 10;
//   console.log(value);
// }
