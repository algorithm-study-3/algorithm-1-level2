function solution(m, n, board) {
  let grid = board.map((row) => row.split(''));
  let total = 0;
  while (true) {
    const toRemove = Array.from({ length: m }, () => Array(n).fill(false));
    let found = false;
    for (let i = 0; i < m - 1; i++) {
      for (let j = 0; j < n - 1; j++) {
        const block = grid[i][j];
        if (
          block &&
          block === grid[i][j + 1] &&
          block === grid[i + 1][j] &&
          block === grid[i + 1][j + 1]
        ) {
          toRemove[i][j] =
            toRemove[i][j + 1] =
            toRemove[i + 1][j] =
            toRemove[i + 1][j + 1] =
              true;
          found = true;
        }
      }
    }
    if (!found) break;
    let count = 0;
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        if (toRemove[i][j]) {
          grid[i][j] = null;
          count++;
        }
      }
    }
    total += count;
    for (let j = 0; j < n; j++) {
      let pointer = m - 1;
      for (let i = m - 1; i >= 0; i--) {
        if (grid[i][j]) {
          grid[pointer--][j] = grid[i][j];
        }
      }
      for (let i = pointer; i >= 0; i--) {
        grid[i][j] = null;
      }
    }
  }
  return total;
}
