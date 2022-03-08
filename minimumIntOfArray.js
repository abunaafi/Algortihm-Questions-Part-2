class SmallestIntegerFinder {
    findSmallestInt(args) {
      
      let minimum = args[0]
      for (let i= 0; i<args.length; i++){
        if (minimum > args[i]){
          minimum = args[i];
        }
      }
      return minimum;
    }
  }
  
  
  
  
  