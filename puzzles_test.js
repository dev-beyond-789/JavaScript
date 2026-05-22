const p = require("./puzzles_buggy");

console.log("--- reverseString ---");
console.log(
  'Input: "hello" | Expected: "olleh" | Actual:',
  p.reverseString("hello"),
);

console.log("\n--- fizzBuzz (1..15) ---");
p.fizzBuzz(15);

console.log("\n--- isPalindrome ---");
console.log(
  'Input: "A man, a plan, a canal: Panama" | Expected: true | Actual:',
  p.isPalindrome("A man, a plan, a canal: Panama"),
);

console.log("\n--- flatten ---");
console.log(
  "Input: [1,[2,3],[4,[5]]] | Expected: [1,2,3,4,5] | Actual:",
  p.flatten([1, [2, 3], [4, [5]]], Infinity),
);

console.log("\n--- debounce (manual check) ---");
const debounced = p.debounce(msg => console.log("Debounced:", msg), 100);
debounced("first");
debounced("second");
setTimeout(() => debounced("third"), 50);

console.log("\n--- promisePool (concurrency) ---");
const wait = t => new Promise(res => setTimeout(() => res(t), t));
const tasks = [() => wait(300), () => wait(200), () => wait(100)];
p.promisePool(tasks, 2).then(res => console.log("promisePool results:", res));

console.log("\n--- deepClone (cycles) ---");
const a = { val: 1 };
a.self = a;
const cloned = p.deepClone(a);
console.log("Original.self === Original:", a.self === a);
console.log("Cloned.self === Cloned (expected true):", cloned.self === cloned);
