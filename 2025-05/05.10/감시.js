const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);
const office = input.slice(1).map((line) => line.split(' ').map(Number));

const dy = [-1, 0, 1, 0];
const dx = [0, 1, 0, -1];

const cctvDirs = {
  1: [[0], [1], [2], [3]],
  2: [
    [0, 2],
    [1, 3],
  ],
  3: [
    [0, 1],
    [1, 2],
    [2, 3],
    [3, 0],
  ],
  4: [
    [0, 1, 2],
    [1, 2, 3],
    [2, 3, 0],
    [3, 0, 1],
  ],
  5: [[0, 1, 2, 3]],
};

const cctvs = [];
for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    const v = office[i][j];
    if (v >= 1 && v <= 5) cctvs.push({ y: i, x: j, type: v });
  }
}

let minBlind = Infinity;

if (cctvs.length === 0) {
  let cnt = 0;
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (office[i][j] === 0) cnt++;
    }
  }
  console.log(cnt);
  process.exit();
}

const radixes = cctvs.map((c) => cctvDirs[c.type].length);
const totalComb = radixes.reduce((a, b) => a * b, 1);

for (let comb = 0; comb < totalComb; comb++) {
  const tmp = office.map((row) => row.slice());
  let t = comb;

  for (let i = 0; i < cctvs.length; i++) {
    const { y, x, type } = cctvs[i];
    const base = radixes[i];
    const ord = t % base;
    t = Math.floor(t / base);
    const dirs = cctvDirs[type][ord];

    for (const dir of dirs) {
      let ny = y + dy[dir],
        nx = x + dx[dir];
      while (ny >= 0 && ny < N && nx >= 0 && nx < M && tmp[ny][nx] !== 6) {
        if (tmp[ny][nx] === 0) tmp[ny][nx] = -1;
        ny += dy[dir];
        nx += dx[dir];
      }
    }
  }

  let blind = 0;
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (tmp[i][j] === 0) blind++;
    }
  }
  if (blind < minBlind) minBlind = blind;
}

console.log(minBlind);
