const recursiveFib = n => {
  if (n <= 2) return 1;
  return recursiveFib(n - 1) + recursiveFib(n - 2);
};

console.info('recursive fib: :', recursiveFib(10));

const memoFib = (n, memo = [undefined, 1, 1]) => {
  if (memo[n] !== undefined) return memo[n];
  let result = memoFib(n - 1, memo) + memoFib(n - 2, memo);
  memo[n] = result;
  return result;
};

console.info('memo fib: :', memoFib(6));

const tabulationFib = n => {
  if (n <= 2) return 1;
  let fibNumbers = [0, 1, 1];
  for (let i = 3; i <= n; i++) {
    fibNumbers[i] = fibNumbers[i - 1] + fibNumbers[i - 2];
  }
  return fibNumbers[n];
};

console.info('tab fib: :', tabulationFib(10));
