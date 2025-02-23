let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const choice = Math.floor(Math.random() * 3);
    return choice
}
function getHumanChoice() {
    let choice;
    let wordChoice = prompt("Rock Paper Scissors");
    wordChoice = wordChoice.toLocaleLowerCase();
    switch (wordChoice){
        case "rock":
            choice = 0;
            break;
        case "paper":
            choice = 1;
            break;
        case "scissors":
            choice = 2;
            break;
        default:
            getHumanChoice();
    }
    return choice;
}

function playGame(){
    for (let i = 0; i < 5; i++)
    {
        const computerChoice = getComputerChoice();
        const humanChoise = getHumanChoice();
        playRound(humanChoise, computerChoice);
    }
}

function playRound(humanChoise, computerChoice){
    if(computerChoice == humanChoise) {
        console.log("Tie!")
    }
    else if (computerChoice - 1 == humanChoise || (computerChoice == 0 && humanChoise == 2)) {
        computerScore++;
        console.log("The Computer Wins!")
    }
    else if (humanChoise - 1 == computerChoice || (humanChoise == 0 && computerChoice == 2)) {
        computerScore++;
        console.log("The Human Wins!")
    }
}

playGame();