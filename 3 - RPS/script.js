const optionsList = document.querySelectorAll('.option');
const resultDisplay = document.querySelectorAll('.result');

const playerScoreDisplay = document.querySelector('.player-score');
const machineScoreDisplay = document.querySelector('.machine-score');

const machineChoices = ["ROCK", "PAPER", "SCISSORS"];

let playerScore = 0;
let machineScore = 0;

function getMachineChoice() {
    return machineChoices[(Math.floor(Math.random() * 3))];
}

function playRound() {
    let machineChoice = getMachineChoice();
    if (this.value == 'ROCK' && machineChoice == "SCISSORS") {
        resultDisplay.textContent = `You win! ${this.value} beats ${machineChoice}.`
        playerScore++;
    }
    else if (this.value == 'PAPER' && machineChoice == "ROCK") {
        resultDisplay.textContent = `You win! ${this.value} beats ${machineChoice}.`
        playerScore++;
    }
    else if (this.value == 'SCISSORS' && machineChoice == "PAPER") {
        resultDisplay.textContent = `You win! ${this.value} beats ${machineChoice}.`
        playerScore++
    }
    else if (this.value == machineChoice) {
        console.log('Draw')
    }
    else {
        machineScore++;
    }

    console.log(`${this.value} → ${playerScore}`);
    console.log(`${machineChoice} → ${machineScore}`);
    console.log('_________')
}

optionsList.forEach((button) => {
    button.addEventListener('click', playRound)
})

