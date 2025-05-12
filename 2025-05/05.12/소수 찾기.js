function solution(numbers) {
  const numSet = new Set();
  const digits = numbers.split('');
  const used = new Array(digits.length).fill(false);

  function dfs(current) {
    if (current.length > 0) {
      numSet.add(parseInt(current, 10));
    }
    if (current.length === digits.length) return;

    for (let i = 0; i < digits.length; i++) {
      if (!used[i]) {
        used[i] = true;
        dfs(current + digits[i]);
        used[i] = false;
      }
    }
  }

  dfs('');

  function isPrime(n) {
    if (n < 2) return false;
    if (n === 2) return true;
    if (n % 2 === 0) return false;
    const limit = Math.floor(Math.sqrt(n));
    for (let i = 3; i <= limit; i += 2) {
      if (n % i === 0) return false;
    }
    return true;
  }

  let count = 0;
  numSet.forEach((num) => {
    if (isPrime(num)) count++;
  });

  return count;
}
