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

  keys() {
    let keys = [];
    for (let c = 0; c < this.keyMap.length; c++) {
      if (this.keyMap[c]) {
        for (let i = 0; i < this.keyMap[c].length; i++) {
          if (this.keyMap[c][i]) {
            if (!keys.includes(this.keyMap[c][i][0])) {
              keys.push(this.keyMap[c][i][0]);
            }
          }
        }
      }
    }
    return keys;
  }

  values() {
    let values = [];
    for (let c = 0; c < this.keyMap.length; c++) {
      if (this.keyMap[c]) {
        for (let i = 0; i < this.keyMap[c].length; i++) {
          if (this.keyMap[c][i]) {
            if (!values.includes(this.keyMap[c][i][1])) {
              values.push(this.keyMap[c][i][1]);
            }
          }
        }
      }
    }
    return values;
  }
}

// testing
let hashTable = new HashTable(10);
hashTable.set('I love', 'cats and dogs');
hashTable.set('I love', 'computer programming');
hashTable.set('Home inspection', 'cement the chimney');
hashTable.set('Home inspection', 'replace the ceiling');
hashTable.set('daily routines', 'understand problems');
hashTable.set('cloud computing', 'conference');
hashTable.set('artificial intelligence', 'conference');
hashTable.set('artificial intelligence', 'new career');
console.log('hash table instance: ', hashTable);
console.log('using get method: ', hashTable.get('Home inspection'));
console.log('get all non dup values: ', hashTable.values());
console.log('get all non dup keys: ', hashTable.keys());
