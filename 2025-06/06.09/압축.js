function solution(msg) {
    const dictionary = new Set(['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P','Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']);
    const answer = [];
    let index = 0;
    let word = ""
    while(index < msg.length - 1) {
        const char = msg[index];
        word += char;
        const nextWord = word + msg[index + 1];
        if(!dictionary.has(nextWord)) {
            dictionary.add(nextWord);
            
            const wordIndex = [...dictionary].indexOf(word);
            answer.push(wordIndex + 1);
            
            word = "";
        }
        index++;
    }
    const lastWordIndex = [...dictionary].indexOf(word + msg[msg.length - 1]);
    answer.push(lastWordIndex + 1);
    return answer;
}