// I'm new to coding and now I want to get the sum of two arrays...actually the sum of all their elements. I'll appreciate for your help.

// P.S. Each array includes only integer numbers. Output is a number too.

const sum = (arr,arr2) => {
    let result = 0
    for (let i = 0; i<arr.length;i++){
      result += arr[i]
    }
  let result2 = 0;
  for (let i = 0; i<arr2.length;i++){
      result2 += arr2[i]
    }
    return result + result2
  }
  
  