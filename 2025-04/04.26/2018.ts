const readLine = require('fs').readFileSync('dev/stdin').toString().trim();

const [N, ...nums] = readLine.split("\n").map((v) => +v);

const sortedNums = [...nums].sort((a, b) => a - b);
const sum = sortedNums.reduce((acc, cur) => (acc += cur), 0);
console.log(Math.round(sum / N).toString());

console.log(sortedNums[Math.floor(N / 2)].toString());

const countMap = new Map();
nums.forEach((num) => countMap.set(num, (countMap.get(num) || 0) + 1));
const countArray = Array.from(countMap.entries());
const maxCount = Math.max(...countArray.map(([nums, count]) => count));
const maxCountArray = countArray
  .filter(([num, count]) => count === maxCount)
  .map(([num]) => num)
  .sort((a, b) => a - b);
console.log(maxCountArray.length >= 2 ? maxCountArray[1].toString() : maxCountArray[0].toString());

console.log((sortedNums[N - 1] - sortedNums[0]).toString());