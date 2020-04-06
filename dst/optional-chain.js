"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function someFn(obj) {
    console.log(obj.propA.subpropB);
}
exports.someFn = someFn;
someFn({
    propA: {
        subpropB: "Hello World!",
    },
});
// someFn({});
// export function someFn(obj) {
//   if (obj.propA && obj.propA.subpropB) {
//     console.log(obj.propA.subpropB);
//   }
// }
// export function someFn(obj) {
//   const message = obj.propA && obj.propA.subpropB;
//   console.log(message);
// }
// export function someFn(obj) {
//   console.log(obj?.propA?.subpropB);
// }
