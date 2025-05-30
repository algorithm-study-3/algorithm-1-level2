function solution(n, t, m, timetable) {
  const timeToMinutes = (timeStr) => {
    const [hours, minutes] = timeStr.split(':').map(Number);
    return hours * 60 + minutes;
  };

  const minutesToTime = (minutes) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return String(hours).padStart(2, '0') + ':' + String(mins).padStart(2, '0');
  };

  const crewTimes = timetable.map(timeToMinutes).sort((a, b) => a - b);

  const shuttleTimes = [];
  for (let i = 0; i < n; i++) {
    shuttleTimes.push(540 + i * t);
  }

  let crewIndex = 0;

  for (let i = 0; i < n - 1; i++) {
    const shuttleTime = shuttleTimes[i];
    let boardedCount = 0;

    while (
      crewIndex < crewTimes.length &&
      crewTimes[crewIndex] <= shuttleTime &&
      boardedCount < m
    ) {
      crewIndex++;
      boardedCount++;
    }
  }

  const lastShuttleTime = shuttleTimes[n - 1];
  let lastShuttleCrew = [];

  while (
    crewIndex < crewTimes.length &&
    crewTimes[crewIndex] <= lastShuttleTime
  ) {
    lastShuttleCrew.push(crewTimes[crewIndex]);
    crewIndex++;
  }

  if (lastShuttleCrew.length < m) {
    return minutesToTime(lastShuttleTime);
  } else {
    return minutesToTime(lastShuttleCrew[m - 1] - 1);
  }
}
