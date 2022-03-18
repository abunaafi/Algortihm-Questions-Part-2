const getIndexToIns = (arr, num) => {
 
    arr.sort((a, b) => a - b);// sorting the array from smallest to largest
     for(let i = 0; i<arr.length; i++){
    
    if (arr[i] >= num){
      return i
    
    }
     }
     return arr.length
    }
    
    console.log(getIndexToIns([40, 60], 50));
    console.log(getIndexToIns([5, 3, 20, 3], 5))