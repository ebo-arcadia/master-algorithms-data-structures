class HashTable {
  constructor(size = 50) {
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

  get(key) {
    let index = this._hash(key);
    if (this.keyMap[index]) {
      for (let c = 0; c < this.keyMap[index].length; c++) {
        if (this.keyMap[index][c][0] === key) {
          return this.keyMap[index][c][1];
        }
      }
    }
    return undefined;
  }
}

// testing
let hashTable = new HashTable(10);
hashTable.set('I love', 'cats and dogs');
hashTable.set('Home inspection', 'cement the chimney');
hashTable.set('get it done', 'programming is fun');
hashTable.set('cloud computing', 'conference');
// console.log(hashTable);
console.log(hashTable.get('get it done'));
