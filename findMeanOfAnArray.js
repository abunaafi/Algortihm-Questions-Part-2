// Find Mean
// Find the mean (average) of a list of numbers in an array.

let findAverage = function (nums) {
    // Code here
    let result = 0
    for (let i = 0; i<nums.length;i++){
         result += nums[i]
       }
    let mean = result/nums.length; 
    return mean
  }