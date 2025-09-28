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

function getHumanChoice(){
    let answer = prompt("Your choice: ");
    return answer;
}

// const y = getHumanChoice();
// console.log(y);

function playGame(){
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice){

        console.log("Your choice: " + humanChoice + '\nComputer choice: ' + computerChoice);
        
        if(humanChoice.toLowerCase() == "rock" && computerChoice == "scissors"){
            console.log("🟢You win! Rock beats Scissors.");
            humanScore++;
        } else if(humanChoice.toLowerCase() == "rock" && computerChoice == "paper"){
            console.log("🔴You lose! Paper beats Rock.");
            computerScore++;
        } else if(humanChoice.toLowerCase() == "paper" && computerChoice == "scissors"){
            console.log("🔴You lose! Scissors beats Paper.");
            computerScore++;
        } else if(humanChoice.toLowerCase() == "paper" && computerChoice == "rock"){
            console.log("🟢You win! Paper beats Rock.");
            humanScore++;
        } else if(humanChoice.toLowerCase() == "scissors" && computerChoice == "rock"){
            console.log("🔴You lose! Rock beats Scissors.");
            computerScore++;
        } else if(humanChoice.toLowerCase() == "scissors" && computerChoice == "paper"){
            console.log("🟢You win! Scissors beats Paper.");
            humanScore++;
        } else {
            console.log("🟡It's a tie.");
        }

        console.log("Human Score: " + humanScore);
        console.log("Computer Score: " + computerScore);
    }

    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());

}

playGame();
