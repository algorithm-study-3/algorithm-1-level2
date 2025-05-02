const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const N = +input.shift();

let rc = 0;

for (let i = 0; i < N; i++) {
  const arr = input[i].split("X");

  let c = 0;
  for (let j = 0; j < arr.length; j++) {
    if (arr[j].length >= 2) {
      c++;
    }
  }

  rc += c;
}

let cc = 0;
const colArr = [];

for (let i = 0; i < N; i++) {
  let temp = [];
  for (let j = 0; j < N; j++) {
    temp.push(input[j][i]);
  }

  colArr.push(temp.join(""));
}

for (let i = 0; i < N; i++) {
  const arr = colArr[i].split("X");

  let c = 0;
  for (let j = 0; j < arr.length; j++) {
    if (arr[j].length >= 2) {
      cc++;
    }
  }

  cc += c;
}

console.log(`${rc} ${cc}`);
