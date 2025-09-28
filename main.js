/* 
- getComputerChoice() will randomly return one of the string values: "rock", "paper" or "scissors" (use Math.random)
- getHumanChoice() takes the user choice and returns it (use prompt)
- declare the players score variables in the global scope:
    - humanScore = 0
    - computerScore = 0
- write the logic to play a single round
- playRound():
    - parameters: humanChoice (case-insensitive), computerChoice
    - console.log("You lose! Paper beats Rock!")
    - increment the humanScore or computerScore variable based on the round winner
- playGame():
    - move playRound() and score variables here
    - calls playRound() to play 5 rounds
*/

function getComputerChoice(){
    const number = Math.floor(Math.random() * 3);
    if(number === 0){
        return "rock";
    } else if(number === 1){
        return "paper";
    }
    return "scissors";
}

// const x = getComputerChoice();
// console.log(x);