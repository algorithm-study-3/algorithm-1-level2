const readLine = require('fs').readFileSync('dev/stdin').toString().trim();

const input = readLine.split('\n')
const N = +input.shift();
const K = +input.shift();
let apples = Array.from({length: K}).map(()=> input.shift().split(" ").map((v) => +v));
const L = +input.shift();
const turnTiming = Array.from({length: L}).map(()=> input.shift().split(" "));
const directions = [[1, 0], [0, 1], [-1, 0], [0, -1]];

const queue = [];

let cur = [0, 0];
let curDir = directions[0]
let count = 0;

const turnDir = (turn) => {
    const curIndex = directions.indexOf(curDir);
    if(turn === "D") curDir = directions[(curIndex + 1) % 4];
    else curDir = directions[(curIndex - 1 + 4) % 4];
}

const isExistApple = (position) => {
    const newApples = apples.filter(([x, y]) => [y, x].toString() !== position.toString());
    const isApple = newApples.length !== apples.length;
    apples = newApples;
    return isApple;
}

queue.push([0, 0]);
while(true) {
    const [cX, cY] = queue[queue.length - 1];
    if(turnTiming.length && +turnTiming[0][0] === count) {
        const turn = turnTiming.shift();
        turnDir(turn[1]);
    }
    const nX = cX + curDir[0];
    const nY = cY + curDir[1];
    
    count++;
    
    if(nX >= N || nX < 0 || nY >= N || nY < 0) break;
    const isSnack = queue.some((position) => [nX, nY].toString() === position.toString())
    if(isSnack) break;
    
    queue.push([nX, nY]);
    const isApple = isExistApple([nX+1, nY+1]);
    if(!isApple) queue.shift();
}

console.log(count);