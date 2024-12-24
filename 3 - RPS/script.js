const optionsList = document.querySelectorAll('.option');
const resultDisplay = document.querySelector('.result-display');

const playerScoreDisplay = document.querySelector('.player-score');
const machineScoreDisplay = document.querySelector('.machine-score');

const machineChoices = ["ROCK", "PAPER", "SCISSORS"];

let playerScore = 0;
let machineScore = 0;

function getMachineChoice() {
    return machineChoices[(Math.floor(Math.random() * 3))];
}

function resetScore() {
    playerScore = 0;
    machineScore = 0;
}

function checkWinner() {
    if (playerScore == 5) {
        resultDisplay.textContent = `You've win the game!`;
        resetScore();
    }
    else if (machineScore == 5) {
        resultDisplay.textContent = `You've lost the game!`;
        resetScore();
    }
}

function playRound() {
    let machineChoice = getMachineChoice();
    if (this.value == 'ROCK' && machineChoice == "SCISSORS") {
        resultDisplay.textContent = `You win! ${this.value} beats ${machineChoice}.`;
        playerScore++;
    }
    else if (this.value == 'PAPER' && machineChoice == "ROCK") {
        resultDisplay.textContent = `You win! ${this.value} beats ${machineChoice}.`;
        playerScore++;
    }
    else if (this.value == 'SCISSORS' && machineChoice == "PAPER") {
        resultDisplay.textContent = `You win! ${this.value} beats ${machineChoice}.`;
        playerScore++
    }
    else if (this.value == machineChoice) {
        resultDisplay.textContent = "It's a draw!";
        console.log('Draw');
    }
    else {
        resultDisplay.textContent = `You lose! ${machineChoice} beats ${this.value}.`;
        machineScore++;
    }
    
    playerScoreDisplay.textContent = `Player Score → ${playerScore}`;
    machineScoreDisplay.textContent = `Machine Score → ${machineScore}`;
    checkWinner();
}

optionsList.forEach((button) => {
    button.addEventListener('click', playRound)
})

