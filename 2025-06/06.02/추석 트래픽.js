function solution(lines) {
    let answer = 0;
    
    if(lines.length === 1) return 1;
    
    const startAndEnds = lines.map((line) => {
        const [date, time, sec] = line.split(" ");
        const [hour, minute, second] = time.split(":");
        const timeNumber = (+hour * 60 * 60 + +minute * 60 + +second) * 1000
        const secNumber = Number(sec.slice(0, -1)) * 1000;
        return [timeNumber - secNumber + 1, timeNumber]
    })
    
    startAndEnds.sort((a, b) => b[0] - a[0])
    
    for(let i = 0; i < startAndEnds.length; i++) {
        const [start, end] = startAndEnds[i];
        let count = 0;
        for(let j = i; j < startAndEnds.length; j++) {
            const [nStart, nEnd] = startAndEnds[j];
            if(start - 1000 + 1 <= nEnd) {
                count++;
            }
            if(j === startAndEnds.length - 1) answer = Math.max(count, answer);
        }
    }
    
    return answer;
}