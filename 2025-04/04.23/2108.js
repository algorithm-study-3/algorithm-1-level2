const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const N = +input.shift();
const nums = input.map((x) => Number(x)).sort((a, b) => a - b);

const a = Math.round(nums.reduce((acc, cur) => acc + cur, 0) / N);
const b = nums[Math.floor(N / 2)];

const cnt = new Map();

nums.forEach((x) => {
  cnt.set(x, (cnt.get(x) || 0) + 1);
});

const arr = [...cnt.entries()].sort((a, b) => b[1] - a[1]);
const c = N === 1 ? arr[0][0] : arr[0][1] === arr[1][1] ? arr[1][0] : arr[0][0];
const d = nums[N - 1] - nums[0];

console.log([a, b, c, d].join("\n"));
