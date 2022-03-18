const mutation=(arr)=> {
    let index1 = arr[1].toLowerCase();
    let index0 = arr[0].toLowerCase();
    for (let i = 0; i < index1.length; i++) {
      if (index0.indexOf(index1[i]) < 0){
        return false;
      } 
     
    }
    return true
  }
  mutation(["hello", "hey"]);//false
  mutation(["Mary", "Army"])//true