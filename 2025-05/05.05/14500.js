let [nm, ...paper] = require('fs')
  .readFileSync('input.txt')
  .toString()
  .trim()
  .split('\n');

const n = parseInt(nm.split(' ')[0]); //세로
const m = parseInt(nm.split(' ')[1]); //가로

paper = paper.map((p) => p.trim().split(' ').map(Number));

let answer = 0;

const dx = [-1, 1, 0, 0];
const dy = [0, 0, 1, -1];

const visited = new Array(n).fill(false).map((_) => new Array(m).fill(false));

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    visited[i][j] = true;
    dfs(i, j, 1, paper[i][j]);
    visited[i][j] = false;
    special(i, j);
  }
}

function dfs(x, y, cnt, sum) {
  if (cnt === 4) {
    answer = Math.max(sum, answer);
    return;
  }
  for (let k = 0; k < 4; k++) {
    const nx = x + dx[k];
    const ny = y + dy[k];

    if (nx < 0 || ny < 0 || nx >= n || ny >= m || visited[nx][ny]) {
      continue;
    }
    visited[nx][ny] = true;
    dfs(nx, ny, cnt + 1, sum + paper[nx][ny]);
    visited[nx][ny] = false;
  }
}

function special(x, y) {
  const shape = [
    //ㅜ
    [
      [1, 0],
      [2, 0],
      [1, -1],
    ],
    // ㅗ
    [
      [1, 0],
      [2, 0],
      [1, 1],
    ],
    //ㅏ
    [
      [0, -1],
      [0, -2],
      [1, -1],
    ],
    //ㅓ
    [
      [0, -1],
      [0, -2],
      [-1, -1],
    ],
  ];
  for (let el of shape) {
    let sum = paper[x][y];
    for (let [dx, dy] of el) {
      const nx = x + dx;
      const ny = y + dy;

      if (nx < 0 || ny < 0 || nx >= n || ny >= m) break;
      sum += paper[nx][ny];
    }
    answer = Math.max(answer, sum);
  }
}

console.log(answer);
