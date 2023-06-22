const mergeSort = (arr1, arr2) =>{
  const arrOneItem = arr1[0] //for the while loop to work we have to have a var with a value
  const arrTwoItem = arr2[0] //for the while loop to work we have to have a var with a value
  const newArr = [] // where we are pushing our arrOneItem and arrTwo Item into
  let i = 1 // (pointer) so we can increment it and keep track of the index position
  let j = 1 // (pointer) so we can increment it and keep track of the index position

  while(arrOneItem || arrTwoItem){ //as long as theres something in either array do the code in the block
    if(!arrTwoItem || arrOneItem < arrTwoItem){ //if theres nothing in arrTwo or arrOne is less than arrTWo
      newArr.push(arrOneItem) 
      arrOneItem = arr1[i] //arr1[i]gives you the valued of index. and this line sets arrOne to the next index value 
      i++ //increments to give you the next index
    }else{
      newArr.push(arrTwoItem) // same as above 
      arrTwoItem = arr2[j]
      j++
    }
  }
  return newArr
}

mergeSort([1,3,9],[2,3,5,7])

//results  [ 1, 2, 3, 3, 5, 7, 9 ] 