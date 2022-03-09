const min = (list)=>{
    let result = list [0]
    for(let i= 0; i<list.length; i++){
      if (result > list[i]){
        result = list[i]
      }
    }
    return result
  }
  
  const max = (list)=>{
    let result = list [0]
    for(let i= 0; i<list.length; i++){
      if (result < list[i]){
        result = list[i]
      }
    }
    return result
  }
  min([-52, 56, 30, 29, -54, 0, -110]) //-110
  max([4,6,2,1,9,63,-134,566]) // 566

  //below is one of the solutions which was very beautiful and simple 
  const min = (list) => Math.min(...list);
const max = (list) => Math.max(...list);