function solution(str1, str2) {
    const map1 = new Map();
    const map2 = new Map();
    const regex = /^[a-zA-Z]$/;
    
    const getMultiSet = (map, str) => {
        for(let i = 0; i < str.length - 1; i++) {
            if(regex.test(str[i]) && regex.test(str[i+1])) {
                const item = str[i].toLowerCase() + str[i+1].toLowerCase();
                map.set(item, (map.get(item) || 0) + 1);
            }
        }
    }
    
    getMultiSet(map1, str1)
    getMultiSet(map2, str2)
    
    if(map1.size === 0 && map2.size === 0) return 1 * 65536;
    
    let intersectionCount = 0;
    for (const [key, count1] of map1.entries()) {
        if (map2.has(key)) {
            const count2 = map2.get(key);
            const minCount = Math.min(count1, count2);
            intersectionCount += minCount;
        }
    }
    
    let unionCount = 0;
    const keys = new Set([...map1.keys(), ...map2.keys()]);
    for (const key of keys) {
        const count1 = map1.get(key) || 0;
        const count2 = map2.get(key) || 0;
        const maxCount = Math.max(count1, count2);
        unionCount += maxCount;
    }
    
    
    return Math.floor((intersectionCount / unionCount) * 65536);
}