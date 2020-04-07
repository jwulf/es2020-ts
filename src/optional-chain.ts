export function someFn(obj) {
  console.log(obj.propA.subpropB);
}

someFn({
  propA: {
    subpropB: "Hello World!",
  },
});

// someFn({});

// export function someFn(obj) {
//   if (obj && obj.propA && obj.propA.subpropB) {
//     console.log(obj.propA.subpropB);
//   }
// }

// export function someFn(obj) {
//   const message = obj && obj.propA && obj.propA.subpropB;
//   console.log(message);
// }

// export function someFn(obj) {
//   console.log(obj?.propA?.subpropB);
// }
