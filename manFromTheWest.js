/*A western man is trying to find gold in a river. To do that, he passes a bucket through the river's soil and then checks if it contains any gold. However, he could be more productive if he wrote an algorithm to do the job for him.

So, you need to check if there is gold in the bucket, and if so, return True/true. If not, return False/false. */


function checkTheBucket(bucket){
    let counter = 0;
    for (let i=0 ; i<bucket.length ; i++){
      if (bucket[i] === "gold"){
        counter ++;
      }
    }
    if (counter >= 1){
      return true;
    }
    else {
      return false;
    }
  }
  
  
   //checkTheBucket(["stone", "stone", "stone", "stone", "stone"]), false);
  
  // checkTheBucket(["stone", "stone", "stone", "stone", "gold"]), true);
  //checkTheBucket([]), false);
  
  //checkTheBucket(["stone", "stone", "stone", "gold", "gold"]), true);