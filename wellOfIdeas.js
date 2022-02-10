//For every good kata idea there seem to be quite a few bad ones!

//In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.




function well(x){
    let goodCounter = 0
  for (let i =0 ; i <x.length ; i++){
    if (x[i] === 'good') {
      goodCounter ++ ;
    }
    
  }
    if (goodCounter === 2 || goodCounter ===1 ){
      return 'Publish';
  }
    else if (goodCounter > 2 ){
      return 'I smell a series !';
    }
    else {
      return 'Fail!'
    }
  }
  
  
  
  well(['good', 'bad', 'bad', 'bad', 'bad', 'good', 'bad', 'bad', 'good']) // smell series
  
  well(['bad']) // fail
  
  well(['good', 'bad', 'bad', 'bad', 'bad']) // 'Publish!'