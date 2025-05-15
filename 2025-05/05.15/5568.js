const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = +input[0];
const k = +input[1];
const cards = input.slice(2).map(Number);

const set = new Set();

const dfs = (arr, isSelected) => {
  if (arr.length === k) {
    set.add(arr.join(""));
    return;
  }

  for (let i = 0; i < n; i++) {
    if (isSelected[i]) continue;
    isSelected[i] = true;
    arr.push(cards[i]);
    dfs(arr, isSelected);
    isSelected[i] = false;
    arr.pop();
  }
};

for (let i = 0; i < n; i++) {
  const isSelected = Array.from({ length: n }, () => false);
  isSelected[i] = true;
  dfs([cards[i]], isSelected);
  isSelected[i] = false;
}

console.log(set.size);
