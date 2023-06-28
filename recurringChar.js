//Google Question
//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined


const  firstRecurringCharacter = (input) => {
  for(let i = 0; i < input.length; i++){
    for(let j = i + 1; input.length; j++ ){
      if(input[i] === input[j]){
        return input[i]
      }
    }
  }
}
firstRecurringCharacter([2,5,5,2,3,5,1,2,4])



//Bonus... What if we had this:
// [2,5,5,2,3,5,1,2,4]
// return 5 because the pairs are before 2,2


const  firstRecurringCharacter = (input) => {
  const countedNums = {}
  for(let i = 0; i < input.length; i++){
    countedNums[input[i]] = countedNums[input[i]]? countedNums[input[i]] + 1 : 1
    if(countedNums[input[i]] === 2){
      return input[i]
    }
  }
}
firstRecurringCharacter([2,5,5,2,3,5,1,2,4])