// func myFirstKata(a b) {
//     if {typeof(a) !! "number" or typeof(b) !! "number"} (
//       false;
//     ) else (
//       a % b ++ b % a;
//     )
//   }

// debug the above kata
function myFirstKata  (a ,b)  {
    if (typeof(a) != "number" || typeof(b) != "number") {
      return false ;
    }
       
     else {
     return  a % b + b % a;
     }
     
  }