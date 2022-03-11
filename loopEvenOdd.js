const oddOrEven =(array) => {
    //enter code here
   let result = 0
 
   for (let i = 0; i<array.length; i++){
     result += array[i]  
   }
   return result % 2 === 0 ? 'even' : 'odd'
 }
 
 
 
 
 
 oddOrEven([0]); //even
 oddOrEven([1]); // odd
 oddOrEven([0, 1, 5])//even
 oddOrEven([0, 1, 2]) // odd