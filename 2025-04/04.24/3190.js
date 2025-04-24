const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const N = +input.shift();
const K = +input.shift();
const apple = input.splice(0, K).map((v) => v.split(" ").map(Number));
const L = +input.shift();
const turn = input.splice(0, L).map((v) => v.split(" "));

const dx = [0, 1, 0, -1];
const dy = [1, 0, -1, 0];

const snakePos = [[0, 0]];

let dirIdx = 0;
let time = 0;

const board = Array.from({ length: N }, () => Array(N).fill(0));

apple.forEach(([x, y]) => {
  board[x - 1][y - 1] = 1;
});

const dirMap = new Map();

turn.forEach(([x, y]) => {
  dirMap.set(+x, y);
});

while (true) {
  const nx = snakePos[0][0] + dx[dirIdx];
  const ny = snakePos[0][1] + dy[dirIdx];

  time++;

  if (
    nx < 0 ||
    ny < 0 ||
    nx >= N ||
    ny >= N ||
    snakePos.some(([x, y]) => x === nx && y === ny)
  ) {
    break;
  }

  if (board[nx][ny] === 1) {
    snakePos.unshift([nx, ny]);
    board[nx][ny] = 0;
  } else {
    snakePos.unshift([nx, ny]);
    snakePos.pop();
  }

  if (dirMap.has(time)) {
    const turnDir = dirMap.get(time);

    if (turnDir === "D") {
      dirIdx = (dirIdx + 1) % 4;
    } else {
      dirIdx = (dirIdx - 1 + 4) % 4;
    }
  }
}

console.log(time);
