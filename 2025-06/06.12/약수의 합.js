function solution(n) {
    let answer = 0;
    
    for (let i = 1; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            const quotient = n / i;
            answer += i;
            if (i !== quotient) answer += quotient;
        }
    }
    
    return answer;
}