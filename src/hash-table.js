class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    let random_prime = 31;
    for (let c = 0; c < Math.min(key.length, 100); c++) {
      let char = key[c];
      let value = char.charCodeAt(0) - 96;
      total = (total * random_prime + value) % this.keyMap.length;
    }
    return total;
  }
}
