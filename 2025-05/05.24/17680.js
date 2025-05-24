function solution(cacheSize, cities) {
  var answer = 0;

  const cache = [];

  for (let city of cities) {
    city = city.toLowerCase();

    if (cache.includes(city)) {
      answer += 1;
      cache.splice(cache.indexOf(city), 1);
    } else {
      answer += 5;
    }

    cache.push(city);

    if (cache.length > cacheSize) cache.shift();
  }

  return answer;
}
