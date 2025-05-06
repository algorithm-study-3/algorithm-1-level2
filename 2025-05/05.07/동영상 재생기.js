function solution(video_len, pos, op_start, op_end, commands) {
    const getTime = (str) => {
        const [m, s] = str.split(":");
        
        return {minutes: Number(m), seconds: Number(s)};
    }
        
    let answer = getTime(pos);
    const videoLenTime = getTime(video_len);
    const opStartTime = getTime(op_start);
    const opEndTime = getTime(op_end);

    const getSeconds = ({minutes, seconds}) => {
        return minutes * 60 + seconds;
    }
    
    const isInOp = () => {
        if(getSeconds(answer) - getSeconds(opStartTime) < 0) return false;
        if(getSeconds(opEndTime) - getSeconds(answer) < 0) return false;
        
        return true;
    }
    
    const goPrev = () => {
        if(isInOp()) answer = {...opEndTime};
        
        if(getSeconds(answer) < 10) {
            answer = {minutes: 0, seconds: 0};
            return;
        }
        
        answer = { minutes: answer.seconds < 10 ? answer.minutes - 1 : answer.minutes, seconds: answer.seconds < 10 ? answer.seconds - 10 + 60 : answer.seconds - 10}
        
        if(isInOp()) answer = {...opEndTime};
    }
    
    const goNext = () => {
        if(isInOp()) answer = {...opEndTime};
        
        if(getSeconds(videoLenTime) - getSeconds(answer) < 10) {
            answer = {...videoLenTime};
            return;
        }
        
        answer = { minutes: answer.seconds >= 50 ? answer.minutes + 1 : answer.minutes, seconds: answer.seconds >= 50 ? answer.seconds + 10 - 60 : answer.seconds + 10}
        
        if(isInOp()) answer = {...opEndTime};
    }
    
    commands.forEach((command) => {
        if(command === "next") goNext();
        else if (command === "prev") goPrev();
    })
    
    return `${String(answer.minutes).padStart(2, "0")}:${String(answer.seconds).padStart(2, "0")}`;
}