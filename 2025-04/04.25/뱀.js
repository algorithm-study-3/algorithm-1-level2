const fs = require('fs');

const input = fs.readFileSync('/dev/stdin', 'utf8').trim().split(/\n/);
let line = 0;

const N = parseInt(input[line++], 10);
const K = parseInt(input[line++], 10);

const apple = Array.from({ length: N + 1 }, () => Array(N + 1).fill(false));
for (let i = 0; i < K; i++) {
  const [r, c] = input[line++].split(' ').map(Number);
  apple[r][c] = true;
}

const L = parseInt(input[line++], 10);
const times = [];
const turns = [];
for (let i = 0; i < L; i++) {
  const [t, d] = input[line++].split(' ');
  times.push(+t);
  turns.push(d);
}

const occupied = Array.from({ length: N + 1 }, () => Array(N + 1).fill(false));
const snake = [[1, 1]];
occupied[1][1] = true;

let dir = 0;
const dx = [0, 1, 0, -1];
const dy = [1, 0, -1, 0];

let time = 0;
let turnIndex = 0;
let x = 1,
  y = 1;

while (true) {
  time++;
  const nx = x + dx[dir];
  const ny = y + dy[dir];

  if (nx < 1 || nx > N || ny < 1 || ny > N || occupied[nx][ny]) {
    console.log(time);
    break;
  }

  snake.unshift([nx, ny]);
  occupied[nx][ny] = true;

  if (apple[nx][ny]) {
    apple[nx][ny] = false;
  } else {
    const [tx, ty] = snake.pop();
    occupied[tx][ty] = false;
  }

  x = nx;
  y = ny;

  if (turnIndex < L && time === times[turnIndex]) {
    if (turns[turnIndex] === 'L') {
      dir = (dir + 3) % 4;
    } else {
      dir = (dir + 1) % 4;
    }
    turnIndex++;
  }
}
