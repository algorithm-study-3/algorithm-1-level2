function solution(cacheSize, cities) {
  var answer = 0;
  let cacheArr = [];

  for (let i = 0; i < cities.length; i++) {
    if (cacheSize === 0) {
      answer = 5 * cities.length;
      break;
    }
    const lowerCity = cities[i].toLowerCase();
    const index = cacheArr.indexOf(lowerCity);
    // 존재한다.
    if (index > -1) {
      answer += 1;
      const prev = cacheArr.slice(0, index);
      const next = cacheArr.slice(index + 1);
      cacheArr = [...prev, ...next, lowerCity];
      continue;
    } else if (cacheArr.length < cacheSize) {
      cacheArr.push(lowerCity);
      answer += 5;
    } else {
      answer += 5;
      cacheArr.shift();
      cacheArr.push(lowerCity);
    }
  }
  return answer;
}
