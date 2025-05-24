function solution(cacheSize, cities) {
    let answer = 0;
    const cache = [];
    if (cacheSize === 0) return cities.length * 5;

    const lowerCities = cities.map((city) => city.toLowerCase())

    for(let i = 0; i < lowerCities.length; i++) {
        const curCity = lowerCities[i]
        if(cache.includes(curCity)) {
            cache.splice(cache.indexOf(curCity), 1);
            answer += 1;
        } else {
            if (cache.length === cacheSize) {
                cache.shift();
            }
            answer += 5;
        }
        cache.push(curCity);
    }

    return answer;
}