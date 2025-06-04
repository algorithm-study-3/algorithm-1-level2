function solution(lines) {
  const logs = lines.map((line) => {
    const [date, time, duration] = line.split(' ');
    const [hh, mm, ss] = time.split(':').map(Number);
    const end = (hh * 3600 + mm * 60 + parseFloat(ss)) * 1000;
    const durationMs = parseFloat(duration.slice(0, -1)) * 1000;
    const start = end - durationMs + 1;
    return { start, end };
  });

  let max = 0;
  const points = logs.flatMap((log) => [log.start, log.end]);

  for (const point of points) {
    const startWindow = point;
    const endWindow = point + 999;
    const count = logs.filter(
      (log) => log.end >= startWindow && log.start <= endWindow
    ).length;
    if (count > max) max = count;
  }

  return max;
}
