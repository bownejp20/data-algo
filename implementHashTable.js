class HashTable {
  constructor(size){
    this.data = new Array(size);
    // this.data = [];
  }
  _set(name, total){
  this.data[0] = [this._hash(name), total]
} 
  _get(key){
    const hash = this._hash(key)
    for(let i = 0; i < this.data.length; i++){
      if(this.data[i][0] === hash){
        return [key, this.data[i][1]]
      }
    }
  }
  _hash(key) {
    let hash = 0;
    for (let i =0; i < key.length; i++){
        hash = (hash + key.charCodeAt(i) * i) % this.data.length
    }
    return hash;
  }
}
const fruitInventory = new HashTable(42)
console.log(fruitInventory.data.length)
fruitInventory._set('grapes', 143)
fruitInventory.data
fruitInventory._get('grapes')