const choices = ['rock','paper','scissors'];
let humanScore = 0;
let computerScore = 0;

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

function getHumanChoice() {
    let choice = prompt().toLowerCase();
    if (choice === "") {
        alert('Enter a value');
        return getHumanChoice();
    } else {
        if (!choices.includes(choice)) {
            alert('Enter one of rock, paper, or scissors');
            return getHumanChoice();
        } else {
            return choice;
        }
    }
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock") {
        if (computerChoice === "rock") {
            console.log("Draw! Both picked rock.");
        } else if (computerChoice === "paper") {
            console.log("You lose! Paper beats rock.");
            computerScore += 1;
        } else {
            console.log("You win! Rock beats scissors!");
            humanScore += 1;
        }
    } else if (humanChoice === "paper") {
        if (computerChoice === "paper") {
            console.log("Draw! Both picked paper.");
        } else if (computerChoice === "scissors") {
            console.log("You lose! Scissors beats paper.");
            computerScore += 1;
        } else {
            console.log("You win! Paper beats rock!");
            humanScore += 1;
        }
    } else {
        if (computerChoice === "scissors") {
            console.log("Draw! Both picked scissors.");
        } else if (computerChoice === "rock") {
            console.log("You lose! Rock beats scissors.");
            computerScore += 1;
        } else {
            console.log("You win! Scissors beats papers!");
            humanScore += 1;
        }
    }
}

function playGame() {
    for (let i =0; i < 5; i++) {
        playRound(getHumanChoice(), getComputerChoice());
        // console.log(humanScore);
        // console.log(computerScore);
    }
    console.log('Your score: ' + humanScore);
    console.log('Computer score: ' + computerScore);
    if (humanScore > computerScore) {
        console.log("You win!");
    } else if (computerScore > humanScore) {
        console.log("You lose!");
    } else {
        console.log("Draw!");
    }
}

playGame();