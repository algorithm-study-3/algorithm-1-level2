function solution(files) {
    const splitFileName = (file) => {
        let headCount = 0;
        let numberCount = 0;
        
        for(const char of file) {
            const isNumber = /^[0-9]$/.test(char);
            if(!isNumber) {
                if(numberCount !== 0) break;
                headCount++;
            }
            else numberCount++;
        }
        
        const numberStartIndex = headCount;
        const tailStartIndex = headCount + numberCount;
        return {head: file.slice(0, numberStartIndex).toLowerCase(), number: file.slice(numberStartIndex, tailStartIndex), tail: file.slice(tailStartIndex)}
    }
    
    const answer = [...files].sort((a, b) => {
        const aSplitted = splitFileName(a);
        const bSplitted = splitFileName(b);
        
        if(aSplitted.head !== bSplitted.head) return aSplitted.head < bSplitted.head ? -1 : 1;
        
        if(aSplitted.number !== bSplitted.number) return aSplitted.number - bSplitted.number;
        
        return 0;
    })
    return answer;
}