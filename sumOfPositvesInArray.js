const positiveSum = (arr) => {
    let result = 0
     for (let i = 0; i<arr.length;i++){
       if (arr[i] > 0){
         result += arr[i]
       }
      }
    return result 
  }
  
  positiveSum([1,2,3,4,,-5,-4742957042,5]) //15
  
  positiveSum([1,-2,3,4,5]) //13