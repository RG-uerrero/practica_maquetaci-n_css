function fibonacci(n) {
  if (n < 2) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

function decrease(n) {
  if (n < 0) {
    return;
  }
  console.log(n);
  decrease(n - 1);
}

