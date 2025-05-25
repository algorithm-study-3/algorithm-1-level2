// 시간 문자열을 분으로 바꾸는 함수
function toMinutes(timeStr) {
  const [hour, minute] = timeStr.split(':').map(Number);
  return hour * 60 + minute;
}

// 분을 시간 문자열로 바꾸는 함수
function toTimeString(minutes) {
  const hour = String(Math.floor(minutes / 60)).padStart(2, '0');
  const minute = String(minutes % 60).padStart(2, '0');
  return `${hour}:${minute}`;
}

function solution(n, t, m, timetable) {
  // 크루 도착 시간 정렬
  let crew = timetable.map(toMinutes).sort((a, b) => a - b);
  let busTime = toMinutes('09:00'); // 첫 버스
  let lastCrewTime = 0;

  for (let i = 0; i < n; i++) {
    let onboard = [];

    // 이번 셔틀에 탈 수 있는 크루들 처리
    while (crew.length > 0 && crew[0] <= busTime && onboard.length < m) {
      onboard.push(crew.shift());
    }

    // 마지막 셔틀일 경우
    if (i === n - 1) {
      if (onboard.length < m) {
        // 자리 남음 → 콘은 이 시간에 도착하면 됨
        return toTimeString(busTime);
      } else {
        // 자리 없음 → 맨 마지막 크루보다 1분 일찍
        return toTimeString(onboard[m - 1] - 1);
      }
    }

    // 다음 셔틀 시간 증가
    busTime += t;
  }
}
