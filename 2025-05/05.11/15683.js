const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

let num = 0;
const [N, M] = input[num++].split(" ").map(Number);
const space = Array.from({ length: N }, () => Array(M).fill(0));
const camera = [];
let minVal = Number.MAX_SAFE_INTEGER;

const cameraDir = [
  [[0], [1], [2], [3]],
  [
    [0, 2],
    [1, 3],
  ],
  [
    [0, 1],
    [1, 2],
    [2, 3],
    [3, 0],
  ],
  [
    [0, 1, 2],
    [1, 2, 3],
    [2, 3, 0],
    [3, 0, 1],
  ],
  [[0, 1, 2, 3]],
];

const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];

for (let i = 0; i < N; i++) {
  const row = input[num++].split(" ").map(Number);
  for (let j = 0; j < M; j++) {
    space[i][j] = row[j];
    if (space[i][j] !== 0 && space[i][j] !== 6) {
      camera.push([space[i][j], i, j]);
    }
  }
}

function spread(x, y, dir) {
  for (let i = 0; i < dir.length; i++) {
    let dist = 1;

    while (true) {
      const nx = x + dist * dx[dir[i]];
      const ny = y + dist * dy[dir[i]];

      if (nx < 0 || nx >= N || ny < 0 || ny >= M || space[nx][ny] === 6) break;

      dist++;
      if (space[nx][ny] >= 1 && space[nx][ny] <= 5) continue;
      if (space[nx][ny] === -1) continue;

      space[nx][ny] = -1;
    }
  }
}

function combi(cnt) {
  if (cnt === camera.length) {
    let cnt = 0;
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < M; j++) {
        if (space[i][j] === 0) cnt++;
      }
    }

    minVal = Math.min(minVal, cnt);
    return;
  }

  const cameraNum = camera[cnt][0];
  const copySpace = Array.from({ length: N }, () => Array(M).fill(0));

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      copySpace[i][j] = space[i][j];
    }
  }

  for (let c = 0; c < cameraDir[cameraNum - 1].length; c++) {
    spread(camera[cnt][1], camera[cnt][2], cameraDir[cameraNum - 1][c]);
    combi(cnt + 1);

    for (let i = 0; i < N; i++) {
      for (let j = 0; j < M; j++) {
        space[i][j] = copySpace[i][j];
      }
    }
  }
}

combi(0);
console.log(minVal);
