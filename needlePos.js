
// After your function finds the needle it should return a message (as a string) that says:

// "found the needle at position " plus the index it found the needle, so:





const findNeedle = (haystack) => {
    // your code here
     let needlePos = haystack.indexOf('needle');
      let str = '';
    for (let i =0 ; i<haystack.length ; i++){
      if ( haystack[i] === 'needle'){
        str = 'found the needle at position' + " " + needlePos
      }
    }
    return str;
  }
  
   findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk'])