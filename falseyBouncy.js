const bouncer=(arr)=> {
    let result = []
    for(let i = 0 ; i<arr.length; i++){
      if(arr[i]){
        result.push(arr[i])
      }
      else{
        
      }
    }
    return result
    }
    
    bouncer([7, "ate", "", false, 9])//[ 7, 'ate', 9 ]