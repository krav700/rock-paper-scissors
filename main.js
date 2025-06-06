let humanScore = 0;
let computerScore = 0;

let computerChoiceInWords;
let humanChoiceInWords;

function getComputerChoice() {
    let userChoice;
    const choice = Math.floor(Math.random() * 3);
    return choice
}

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const score = document.querySelector(".Score");

const outcome = document.createElement("p");
score.appendChild(outcome);
const scoreOutcome = document.createElement("p");
score.appendChild(scoreOutcome);
const winner = document.createElement("p");
score.appendChild(winner);


rock.addEventListener("click", rockFunk);
paper.addEventListener("click", paperFunk);
scissors.addEventListener("click", scissorsFunk);

rock.addEventListener("mouseenter", greenButton);
rock.addEventListener("mouseleave", grayButton);
paper.addEventListener("mouseenter", greenButton);
paper.addEventListener("mouseleave", grayButton);
scissors.addEventListener("mouseenter", greenButton);
scissors.addEventListener("mouseleave", grayButton);

function greenButton(event)
{
    event.target.style.backgroundColor = "green";
}
function grayButton(event)
{
    event.target.style.backgroundColor = "rgb(239,239,239)";
}

function rockFunk()
{
    playRound(0, getComputerChoice());
}
function paperFunk()
{
    playRound(1, getComputerChoice());
}
function scissorsFunk()
{
    playRound(2, getComputerChoice());
}


function playGame(userChoice){

    const computerChoice = getComputerChoice();
    playRound(userChoice, computerChoice);

    if (computerScore > humanScore) {
        console.log(`Ultimate Winner: Computer ${userChoice} ${computerScore}`);
    }
    else if (computerScore < humanScore) {
        console.log(`Ultimate Winner: Human ${userChoice} ${computerScore}`);
    }
    else{
        console.log("ULTIMATE TIE");
    }
}

function playRound(humanChoise, computerChoice){
    switch (computerChoice)
    {
        case 0:
            computerChoiceInWords = "rock";
            break;
        case 1:
            computerChoiceInWords = "paper";
            break;
        case 2:
            computerChoiceInWords = "scissors";
            break;
        default:
            break;
    }
    switch (humanChoise)
    {
        case 0:
            humanChoiceInWords = "rock";
            break;
        case 1:
            humanChoiceInWords = "paper";
            break;
        case 2:
            humanChoiceInWords = "scissors";
            break;
        default:
            break;
    }
    console.log(`The Computer chose: ${computerChoiceInWords}\nThe Human chose: ${humanChoiceInWords}`);
    if(computerChoice == humanChoise) {
        console.log("Tie!")
        outcome.textContent = "Tie!";
        scoreOutcome.textContent = `Human: ${humanScore}   Computer: ${computerScore}`;
    }
    else if (computerChoice - 1 == humanChoise || (computerChoice == 0 && humanChoise == 2)) {
        computerScore++;
        console.log("The Computer Wins!")
        outcome.textContent = "The Computer Wins!";
        scoreOutcome.textContent = `Human: ${humanScore}   Computer: ${computerScore}`;
    }
    else if (humanChoise - 1 == computerChoice || (humanChoise == 0 && computerChoice == 2)) {
        humanScore++;
        console.log("The Human Wins!")
        outcome.textContent = "The Human Wins!";
        scoreOutcome.textContent = `Human: ${humanScore}   Computer: ${computerScore}`;
    }

    if (humanScore == 5)
    {
        winner.textContent = "Human WINS!!!";
        rock.removeEventListener("click", rockFunk);
        paper.removeEventListener("click", paperFunk);
        scissors.removeEventListener("click", scissorsFunk);
        rock.removeEventListener("mouseenter", greenButton);
        rock.removeEventListener("mouseleave", grayButton);
        paper.removeEventListener("mouseenter", greenButton);
        paper.removeEventListener("mouseleave", grayButton);
        scissors.removeEventListener("mouseenter", greenButton);
        scissors.removeEventListener("mouseleave", grayButton);

        const buttons = document.querySelectorAll(".userChoiceButton");
        for (let i = 0; i < buttons.length; i++)
        {
            buttons[i].style.backgroundColor = "red";
        }
    }
    if (computerScore == 5)
    {
        winner.textContent = "Computer WINS!!!";
        rock.removeEventListener("click", rockFunk);
        paper.removeEventListener("click", paperFunk);
        scissors.removeEventListener("click", scissorsFunk);
        rock.removeEventListener("mouseenter", greenButton);
        rock.removeEventListener("mouseleave", grayButton);
        paper.removeEventListener("mouseenter", greenButton);
        paper.removeEventListener("mouseleave", grayButton);
        scissors.removeEventListener("mouseenter", greenButton);
        scissors.removeEventListener("mouseleave", grayButton);

        const buttons = document.querySelectorAll(".userChoiceButton");
        for (let i = 0; i < buttons.length; i++)
        {
            buttons[i].style.backgroundColor = "red";
        }
    }
}