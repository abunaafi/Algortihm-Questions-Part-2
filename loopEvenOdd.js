const oddOrEven =(array) => {
    //enter code here
   let result = 0
 
   for (let i = 0; i<array.length; i++){
     result += array[i]  
   }
   return result % 2 === 0 ? 'even' : 'odd'
 }
 
 // an easier method below from the solutions 
 const oddOrEven = (arr) => {
    return arr.reduce((a,b)=>a+b,0) % 2 ? 'odd' : 'even';
  }
  
 
 
 
 oddOrEven([0]); //even
 oddOrEven([1]); // odd
 oddOrEven([0, 1, 5])//even
 oddOrEven([0, 1, 2]) // odd