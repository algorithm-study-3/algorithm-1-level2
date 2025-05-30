function solution(dartResult) {
  // 9: 39

  var answer = 0;

  // 3번 다트 던짐 -> 각 점수는 0~10점
  // 스타상 * -> 현재 점수와 이전 점수를 2배로
  // 아차상 # -> 마이너스

  const res = [];
  const bonus = ["S", "D", "T"];
  const option = ["*", "#"];

  const strs = [];
  // 3개로 나누기
  let ptr = 0;

  for (let i = 0; i < dartResult.length; i++) {
    const str = dartResult[i];

    if (bonus.includes(str)) {
      // 포인터가 마지막임
      if (i === dartResult.length - 1) {
        strs.push(dartResult.slice(ptr));
      }
      // 중간임
      else {
        // 다음 자리가 옵션이면
        if (option.includes(dartResult[i + 1])) {
          strs.push(dartResult.slice(ptr, i + 2));
          ptr = i + 2;
          i++;
          continue;
        }

        strs.push(dartResult.slice(ptr, i + 1));
        ptr = i + 1;
      }
    }
  }

  // 숫자로 변환
  const nums = Array.from({ length: 3 }, () => 0);

  for (let i = 0; i < 3; i++) {
    const str = strs[i];

    if (str[1] === "0") {
      nums[i] = 10;

      const bns = str[2];
      if (bns === "D") nums[i] = Math.pow(10, 2);
      else if (bns === "T") nums[i] = Math.pow(10, 3);

      if (str.length === 4) {
        const opt = str[3];

        // 스타상
        if (opt === "*") {
          if (i === 0) {
            nums[i] *= 2;
          } else {
            nums[i] *= 2;
            nums[i - 1] *= 2;
          }
        }

        // 아차상
        else if (opt === "#") {
          nums[i] *= -1;
        }
      }
    } else {
      nums[i] = +str[0];

      const bns = str[1];
      if (bns === "D") nums[i] = Math.pow(+str[0], 2);
      else if (bns === "T") nums[i] = Math.pow(+str[0], 3);

      if (str.length === 3) {
        const opt = str[2];

        // 스타상
        if (opt === "*") {
          if (i === 0) {
            nums[i] *= 2;
          } else {
            nums[i] *= 2;
            nums[i - 1] *= 2;
          }
        }

        // 아차상
        else if (opt === "#") {
          nums[i] *= -1;
        }
      }
    }
  }

  answer = nums.reduce((acc, cur) => acc + cur, 0);

  return answer;
}
