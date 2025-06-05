function solution(n, t, m, p) {
    let numberString = '';
    
    for(let i = 0;  i < t * m; i++) {
        numberString += i.toString(n).toUpperCase();
    }
    const answer = numberString.split("").filter((_, index) => index % m === p - 1).slice(0, t).join("")
    
    return answer;
}