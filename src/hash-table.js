class HashTable {
  constructor(size = 4) {
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

  set(key, value) {
    let index = this._hash(key);
    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }
    this.keyMap[index].push([key, value]);
  }
}

// testing
let hashTable = new HashTable();
hashTable.set(['I love', 'cats and dogs']);
hashTable.set(['Home inspection', 'cement the chimney']);
hashTable.set(['get it done', 'programming is fun']);
hashTable.set(['cloud computing', 'conference']);
console.log(hashTable);
