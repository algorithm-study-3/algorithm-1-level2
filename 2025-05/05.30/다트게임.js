function solution(dartResult) {
    const scores = [];
    let tmp = ""
    for(let i = 0; i < dartResult.length; i++) {
        const result = dartResult[i];
        if(!Number.isNaN(Number(result))) {
            tmp += result;
            continue;
        }
        
        if(result === "S") {
            scores.push(Number(tmp));
            tmp = ""
            continue;
        }
        if(result === "D") {
            scores.push(Number(tmp) ** 2);
            tmp = ""
            continue;
        }
        if(result === "T") {
            scores.push(Number(tmp) ** 3);
            tmp = ""
            continue;
        }
        
        if(result === "*") {
            scores[scores.length-1] *= 2;
            if(scores.length >= 2) scores[scores.length-2] *= 2;
            continue;
        }
        
        if(result === "#") {
            scores[scores.length-1] *= -1;
        }
    }
    
    if(scores.length > 0) return scores.reduce((acc, cur) => acc + cur, 0);
    
    return 0;
}