
// function {
// 	var : Math.random()
// 		if (career <= 0.32) {
// 			return = FrontEnd Developer
// 		 else if (career <= 0.65) 
// 			return : BackEnd Developer,
// 		} else {
// 			return 'Full-Stack Developer'
// 		}


yourFutureCareer();

function yourFutureCareer (career){
    career = Math.random();
            if (career <= 0.32) {
                return "FrontEnd Developer" 
        }
             else if (career <= 0.65) {
           return "BackEnd Developer"
         }
                
             else {
                return 'Full-Stack Developer'
         }
    }
    
    yourFutureCareer();
    