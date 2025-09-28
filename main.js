function getComputerChoice(){
    const number = Math.floor(Math.random() * 3);
    if(number === 0){
        return "Rock";
    } else if(number === 1){
        return "Paper";
    }
    return "Scissors";
}

// const x = getComputerChoice();
// console.log(x);

function getHumanChoice(){
    let answer = prompt("Your choice: ");
    return answer;
}

// const y = getHumanChoice();
// console.log(y);

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice){
        console.log(humanChoice, computerChoice);
    if(humanChoice.toLowerCase() == "rock" && computerChoice == "Scissors"){
        console.log("You win! Rock beats Scissors.");
        humanScore++;
    } else if(humanChoice.toLowerCase() == "rock" && computerChoice == "Paper"){
        console.log("You lose! Paper beats Rock.");
        computerScore++;
    } else if(humanChoice.toLowerCase() == "paper" && computerChoice == "Scissors"){
        console.log("You lose! Scissors beats Paper.");
        computerScore++;
    } else if(humanChoice.toLowerCase() == "paper" && computerChoice == "Rock"){
        console.log("You win! Paper beats Rock.");
        humanScore++;
    } else if(humanChoice.toLowerCase() == "scissors" && computerChoice == "Rock"){
        console.log("You lose! Rock beats Scissors.");
        computerScore++;
    } else if(humanChoice.toLowerCase() == "scissors" && computerChoice == "Paper"){
        console.log("You win! Scissors beats Paper.");
        humanScore++;
    } else {
        console.log("It's a tie.");
    }

    // console.log("Human Score: " + humanScore);
    // console.log("Computer Score: " + computerScore);
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
