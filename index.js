function getComputerChoice() {
    let value = Math.random();
    if (value >= (2/3)) {
        return 'Rock';
    } else if (value >= (1/3)) {
        return 'Paper';
    } else {
        return 'Scissors';
    }
}

const choices = ['rock','paper','scissors'];

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

console.log(getHumanChoice());

let humanScore = 0;
let computerScore = 0;