// Rock-Paper-Scissors Big Bang Style
// According to Sheldon Cooper the following is true:

// Scissors cuts Paper
// Paper covers Rock
// Rock crushes Lizard
// Lizard poisons Spock
// Spock smashes Scissors
// Scissors decapitates Lizard
// Lizard eats Paper
// Paper disproves Spock
// Spock vaporizes Rock
// ( and as it always has ) Rock crushes Scissors
// Given two values from the above game, return the Player result as "Player 1 Won!", "Player 2 Won!" or "Draw!".

// Values will be given as one of "rock", "spock", "paper", "lizard", "scissors".

const  rpsls = (pl1,pl2) => {
    //Your Magnificent Code here
      if (pl1 === pl2 ){
        return "Draw!" 
      };
      if (pl1 === 'scissors'){
        if (pl2=== 'paper'){
          return "Player 1 Won!";
        }
        else if (pl2==='lizard'){
          return "Player 1 Won!"
        }
        else if (pl2=== 'spock'){
          return "Player 2 Won!"
        }
        else if (pl2==='rock'){
          return "Player 2 Won!"
        }
      }
      if (pl1==='lizard'){
        if (pl2 === 'spock'){
          return "Player 1 Won!"
        }
        else if (pl2 === 'paper'){
          return "Player 1 Won!"
        }
        else if (pl2 === "rock") {
              return "Player 2 Won!"   
                 }
      }
      if (pl1 === "rock"){
        if (pl2 === 'paper'){
          return "Player 2 Won!" 
        }
        else if (pl2==='scissors'){
          return 'Player 1 Won!'
        }
        else if (pl2 === 'spock'){
          return "Player 2 Won!" 
        }
      }
      if (pl1 === "spock"){
        if (pl2 === 'paper'){
          return "Player 2 Won!" 
        }
      }
       if (pl2 === 'scissors'){
        if (pl1=== 'paper'){
          return "Player 2 Won!";
        }
        else if (pl1==='lizard'){
          return "Player 2 Won!"
        }
        else if (pl1=== 'spock'){
          return "Player 1 Won!"
        }
        else if (pl1==='rock'){
          return "Player 1 Won!"
        }
      }
      if (pl2==='lizard'){
        if (pl1 === 'spock'){
          return "Player 2 Won!"
        }
        else if (pl1 === 'paper'){
          return "Player 2 Won!"
        }
        else if (pl1 === "rock") {
              return "Player 1 Won!"   
                 }
      }
      if (pl2 === "rock"){
        if (pl1 === 'paper'){
          return "Player 1 Won!" 
        }
        else if (pl1==='scissors'){
          return 'Player 2 Won!'
        }
        else if (pl1 === 'spock'){
          return "Player 1 Won!" 
        }
      }
      if (pl2 === "spock"){
        if (pl1 === 'paper'){
          return "Player 1 Won!" 
        }
      }
      
    }
    
    