// Buggy JavaScript puzzles for you to fix
// Each function intentionally contains at least one mistake.

// === Beginner ===
function reverseString(str) {
  // BUG: returns the original string instead of reversed
  return str.split("").reverse().join("");
}

console.log("--- reverseString ---");
console.log(
  'Input: "hello" | Expected: "olleh" | Actual:',
  reverseString("hello"),
);

function fizzBuzz(n) {
  // BUG: mixes up Fizz/Buzz conditions (prints 'Fizz' for multiples of 5)
  for (let i = 1; i <= n; i++) {
    if (i % 5 === 0 && i % 3 === 0) console.log("FizzBuzz");
    else if (i % 5 === 0) console.log("Fizz");
    else if (i % 3 === 0) console.log("Buzz");
    else console.log(i);
  }
}

function isPalindrome(str) {
  // BUG: does not ignore non-alphanumeric characters or case
  return str === str.split("").reverse().join("");
}

// === Intermediate ===
function flatten(arr, depth = 1) {
  // BUG: always performs a single-level flatten regardless of depth
  return arr.reduce((acc, val) => acc.concat(val), []);
}

function debounce(fn, wait) {
  // BUG: missing cancel method (should return a wrapper with `cancel`)
  let timer = null;
  return function (...args) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), wait);
  };
}

// === Advanced ===
async function promisePool(tasks, limit) {
  // BUG: ignores `limit` and starts all tasks at once
  return Promise.all(tasks.map(t => t()));
}

function deepClone(obj, map = new Map()) {
  // BUG: shallow-copies properties and doesn't recurse
  if (obj === null || typeof obj !== "object") return obj;
  if (map.has(obj)) return map.get(obj);
  const copy = Array.isArray(obj) ? [] : {};
  map.set(obj, copy);
  for (let k in obj) {
    copy[k] = obj[k];
  }
  return copy;
}

module.exports = {
  reverseString,
  fizzBuzz,
  isPalindrome,
  flatten,
  debounce,
  promisePool,
  deepClone,
};
