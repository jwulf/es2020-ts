"use strict";
function resolves(val) {
    return new Promise((resolve) => setTimeout(() => resolve(`Resolved: ${val}`), 1000));
}
function rejects(val) {
    return new Promise((_, reject) => setTimeout(() => reject(`ERROR: ${val}`), 700));
}
Promise.all([resolves(1), resolves(2)])
    .then(console.log)
    .catch(console.log);
// Promise.all([resolves(1), resolves(2), rejects(3)])
//   .then(console.log)
//   .catch(console.log);
// Promise.allSettled([resolves(1), resolves(2), rejects(3)])
//   .then(console.log)
//   .catch(console.log);
