function hash(key, arrayLen) {
  let total = 0;
  const random_prime = 31;
  for (let c = 0; c < Math.min(key.length, 100); c++) {
    let char = key[c];
    let value = char.charCodeAt(0) - 96;
    total = (total * random_prime + value) % arrayLen;
  }
  return total;
}

console.info(hash('bio', 5));
