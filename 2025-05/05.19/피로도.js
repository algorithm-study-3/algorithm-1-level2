function solution(k, dungeons) {
  let maxCount = 0;
  const n = dungeons.length;
  const visited = Array(n).fill(false);

  function dfs(currentFatigue, count) {
    maxCount = Math.max(maxCount, count);

    for (let i = 0; i < n; i++) {
      const [minReq, cost] = dungeons[i];
      if (!visited[i] && currentFatigue >= minReq) {
        visited[i] = true;
        dfs(currentFatigue - cost, count + 1);
        visited[i] = false;
      }
    }
  }

  dfs(k, 0);
  return maxCount;
}