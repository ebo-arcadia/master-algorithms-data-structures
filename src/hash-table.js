function hash(key, arrayLen) {
  let total = 0;
  for (char of key) {
    let value = char.charCodeAt(0) - 96;
    total = (total + value) % arrayLen;
  }
  return total;
}

console.info(hash('biohazard', 10));
