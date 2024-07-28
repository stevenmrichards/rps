const choices = ['rock','paper','scissors'];
let humanScoreValue = 0;
let computerScoreValue = 0;
let winner = "";
const body = document.querySelector("body");
const score = document.querySelector(".score");
const results = document.querySelector(".results");
const winnerText = document.querySelector(".winner-text");

const computerScoreObj = document.querySelector("#computerScore");
const playerScoreObj = document.querySelector("#playerScore");
playerScoreObj.textContent = humanScoreValue;
computerScoreObj.textContent = computerScoreValue;

const buttons = document.querySelectorAll(".choice");
let resultMessage = "Make a choice!";
const roundMessage = document.createElement("p");
roundMessage.textContent = resultMessage;
results.appendChild(roundMessage);

function getComputerChoice() {
    let value = Math.random();
    if (value >= (2/3)) {
        return 'rock';
    } else if (value >= (1/3)) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

// function getHumanChoice() {
//     let choice = prompt().toLowerCase();
//     if (choice === "") {
//         alert('Enter a value');
//         return getHumanChoice();
//     } else {
//         if (!choices.includes(choice)) {
//             alert('Enter one of rock, paper, or scissors');
//             return getHumanChoice();
//         } else {
//             return choice;
//         }
//     }
// }

function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock") {
        if (computerChoice === "rock") {
            resultMessage = "Draw! Both picked rock.";
        } else if (computerChoice === "paper") {
            resultMessage = "You lose! Paper beats rock.";
            computerScoreValue += 1;
        } else {
            resultMessage = "You win! Rock beats scissors!";
            humanScoreValue += 1;
        }
    } else if (humanChoice === "paper") {
        if (computerChoice === "paper") {
            resultMessage = "Draw! Both picked paper.";
        } else if (computerChoice === "scissors") {
            resultMessage = "You lose! Scissors beats paper.";
            computerScoreValue += 1;
        } else {
            resultMessage = "You win! Paper beats rock!";
            humanScoreValue += 1;
        }
    } else {
        if (computerChoice === "scissors") {
            resultMessage = "Draw! Both picked scissors.";
        } else if (computerChoice === "rock") {
            resultMessage = "You lose! Rock beats scissors.";
            computerScoreValue += 1;
        } else {
            resultMessage = "You win! Scissors beats papers!";
            humanScoreValue += 1;
        }
    }
    if (humanScoreValue >= 5) {
        winner = "You win! You scored 5 first!"
    } else if (computerScoreValue >= 5) {
        winner = "You lose! Computer scored 5 first!"
    }
    winnerText.textContent = winner;
    playerScoreObj.textContent = humanScoreValue;
    computerScoreObj.textContent = computerScoreValue;
    roundMessage.textContent = resultMessage;
    results.appendChild(roundMessage);
}

// function playGame() {
//     // for (let i =0; i < 5; i++) {
//     //     playRound(getHumanChoice(), getComputerChoice());
//     //     // console.log(humanScore);
//     //     // console.log(computerScore);
//     // }
//     console.log('Your score: ' + humanScore);
//     console.log('Computer score: ' + computerScore);
//     if (humanScore > computerScore) {
//         console.log("You win!");
//     } else if (computerScore > humanScore) {
//         console.log("You lose!");
//     } else {
//         console.log("Draw!");
//     }
// }

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        // alert(button.id);
        playRound(button.id, getComputerChoice());
    });
});

