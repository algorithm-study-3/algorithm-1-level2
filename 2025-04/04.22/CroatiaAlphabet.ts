const readLine = require('fs').readFileSync('dev/stdin').toString().trim();

const croatia = ['c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'z='];

let index = 0;
let count = 0;

while (index < readLine.length) {
  let match = false;
  for (let i = 0; i < croatia.length; i++) {
    const alphabet = croatia[i];
    if (readLine.slice(index, index + alphabet.length) === alphabet) {
      index += alphabet.length;
      match = true;
      break;
    }
  }
  count++;
  index += match ? 0 : 1;
}

console.log(count);