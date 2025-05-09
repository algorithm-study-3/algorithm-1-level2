const fs = require('fs');
const input = fs
  .readFileSync('/dev/stdin', 'utf8')
  .trim()
  .split(/\s+/)
  .map(Number);

let idx = 0;
const n = input[idx++];
const nums = input.slice(idx, idx + n);
idx += n;
const opsCount = input.slice(idx, idx + 4);

const opsArr = [];
opsArr.push(...Array(opsCount[0]).fill('+'));
opsArr.push(...Array(opsCount[1]).fill('-'));
opsArr.push(...Array(opsCount[2]).fill('*'));
opsArr.push(...Array(opsCount[3]).fill('/'));
opsArr.sort();

function nextPermutation(arr) {
  let i = arr.length - 2;
  while (i >= 0 && arr[i] >= arr[i + 1]) i--;
  if (i < 0) return false;
  let j = arr.length - 1;
  while (arr[j] <= arr[i]) j--;
  [arr[i], arr[j]] = [arr[j], arr[i]];
  let left = i + 1,
    right = arr.length - 1;
  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }
  return true;
}

let maxResult = -Infinity;
let minResult = Infinity;

let first = true;
do {
  if (first) first = false;
  let value = nums[0];
  for (let k = 1; k < n; k++) {
    const op = opsArr[k - 1];
    const num = nums[k];
    if (op === '+') {
      value += num;
    } else if (op === '-') {
      value -= num;
    } else if (op === '*') {
      value *= num;
    } else if (op === '/') {
      value = Math.trunc(value / num);
    }
  }
  if (value === 0) value = 0;
  maxResult = Math.max(maxResult, value);
  minResult = Math.min(minResult, value);
} while (nextPermutation(opsArr));

console.log(maxResult);
console.log(minResult);
