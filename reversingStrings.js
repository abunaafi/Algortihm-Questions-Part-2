const reverseString=(str) => {
    let newString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}
reverseString('hello');// wiil print 'o l l e h'



// below is a simpler method
const reverseString=(str) =>{
    return str.split("").reverse().join("");
    
  }
  console.log(
  reverseString("hello"));