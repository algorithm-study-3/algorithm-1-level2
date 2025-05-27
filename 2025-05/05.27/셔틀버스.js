function solution(n, t, m, timetable) {
    const getMinutes = (time) => {
        const [hour, minute] = time.split(":");
        return Number(hour) * 60 + Number(minute)
    };
    const getTime = (minutes) => {
        return [String(Math.floor(minutes / 60)).padStart(2, "0"), String(minutes % 60).padStart(2, "0")].join(":")
    }
    
    const timeMinutes = timetable.map((time) => getMinutes(time)).sort((a, b) => a - b);
    const shuttleMinutes =  Array.from({length: n}, (s, index) => 540 + index * t).sort((a, b) => a - b);
    let crewIndex = 0;
    let crewLastIndex = timeMinutes.length - 1
    
    for(let i = 0; i < shuttleMinutes.length - 1; i++) {
        const curShuttle = shuttleMinutes[i];
        let count = 0;
        while(timeMinutes[crewIndex] <= curShuttle && count < m) {
            count++;
            crewIndex++;
        }
    }
    const lastShuttle = shuttleMinutes[shuttleMinutes.length - 1];
    while(lastShuttle < timeMinutes[crewLastIndex]) crewLastIndex--;
    const leftCrewMinutes = timeMinutes.slice(crewIndex, crewLastIndex + 1)
    
    if(leftCrewMinutes.length >= m) {
        if(m === 1) return getTime(leftCrewMinutes[0] - 1)
        if(leftCrewMinutes[m - 2] === leftCrewMinutes[m - 1]) {
            return getTime(leftCrewMinutes[m - 2] - 1)
        } else {
            return getTime(leftCrewMinutes[m - 2])    
        }
    } else {
        return getTime(lastShuttle);
    }
   
    
}