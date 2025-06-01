function solution(lines) {
  // 로그 파싱 (start time과 end time 구하기)
  const logs = lines.map((line) => {
    const [date, time, duration] = line.split(' ');
    const [hour, minute, second] = time.split(':');
    const [sec, ms = '000'] = second.split('.');
    const endTime =
      (parseInt(hour) * 3600 + parseInt(minute) * 60 + parseInt(sec)) * 1000 + parseInt(ms);
    const processTime = parseFloat(duration.slice(0, -1)) * 1000;
    const startTime = endTime - processTime + 1;
    return [startTime, endTime];
  });

  // 1초 구간 내 처리 중인 요청 개수 세기
  let maxRequests = 0;
  for (let i = 0; i < logs.length; i++) {
    const [_, endTime] = logs[i];
    const windowStart = endTime;
    const windowEnd = windowStart + 999;

    let count = 0;
    for (let j = i; j < logs.length; j++) {
      const [startTime2, _] = logs[j];
      if (startTime2 <= windowEnd) count++;
    }
    maxRequests = Math.max(maxRequests, count);
  }
  return maxRequests;
}
