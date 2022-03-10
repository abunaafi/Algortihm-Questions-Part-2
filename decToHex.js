const evensAndOdds = (num) =>{
	//your code here
  
    if(num % 2 === 0){
      return (num >>> 0).toString(2)
    }
    else {
      return num.toString(16);
    }
}


evensAndOdds(122)
