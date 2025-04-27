const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = '';

rl.on('line', function (line) {
  input = line;
}).on('close', function () {
  let croatia = ['c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'z='];

  for (let i = 0; i < croatia.length; i++) {
    input = input.split(croatia[i]).join('0'); // 크로아티아 알파벳을 '0' 하나로 치환
  }

  console.log(input.length);
  process.exit();
});
