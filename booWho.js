const booWho = (bool)=> {
    return bool===true || bool ===false ? true:false;
  }
  booWho([1, 2, 3])// false
  booWho(null);
  booWho(true) // true