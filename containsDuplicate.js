const containsDuplicate = (nums) => {
  for(let i = 0;i < nums.length; i++){
      for(let j = i +1; j < nums.length; j++){
          if(nums[i] === nums[j]){
              return true
      }
      }
  }
  return false
  
};

containsDuplicate([1,1,1,3,3,4,3,2,4,2])

const containsDuplicate = (nums) => {
  const count = {}
  for(let i = 0; i < nums.length; i++){
   if(count[nums[i]]){
     console.log(count)
    return true  
  }
    count[nums[i]] = count[nums[i]]? count[nums[i]] +1 : 1
  }
  return false
   }
 containsDuplicate([1,1,1,3,3,4,3,2,4,2])
 



