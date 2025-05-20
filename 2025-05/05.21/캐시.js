function solution(cacheSize, cities) {
  if (cacheSize === 0) return cities.length * 5;

  let cache = [];
  let time = 0;

  for (let city of cities) {
    city = city.toLowerCase();

    const hitIndex = cache.indexOf(city);

    if (hitIndex !== -1) {
      time += 1;
      cache.splice(hitIndex, 1);
      cache.push(city);
    } else {
      time += 5;
      if (cache.length >= cacheSize) {
        cache.shift();
      }
      cache.push(city);
    }
  }

  return time;
}
