class NewArray {
  constructor(){
    this.length = 0
    this.items = {} 
  } 
  push(item) {
    if(typeof item == 'undefined'){
      console.log('push something')
      return 
    }
    
    this.items[this.length] = item
    this.length++

  }

  get(index){
     return this.items[index]
  }
  pop(){
    const poppedItem = this.items[this.length -1]
    delete this.items[this.length -1]
    this.length--
    return poppedItem
  }
  delete(index){
    this.shiftItems(index)
  }
  shiftItems(index){
    for(let i = index; i < this.length -1; i++){
      this.items[index] = this.items[index + 1]
    }

    delete this.items[this.length -1]
    this.length--
    return 
  }
}

const myArray = new NewArray()
myArray.push()
myArray.push('apple')
myArray.push('orange')
myArray.push('orangeApple')
console.log(myArray.items)
console.log(myArray.length)
console.log(myArray.get(1))
// console.log(myArray.pop())
// console.log(myArray.items)
// console.log(myArray.pop())
myArray.delete(1)
console.log(myArray.items)



