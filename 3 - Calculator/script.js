function getComputerChoice() {
    return botChoices[(Math.floor(Math.random() * 3))];
}
function getPlayerChoice() {
    return prompt('Escolha PEDRA/PAPEL/TESOURA em MAÍSCULO: ').toUpperCase();
}

const botChoices = ["PEDRA", "PAPEL", "TESOURA"];

let playerScore = 0;
let machineScore = 0;

function playRound(playerChoice, computerChoice) {
    if (playerChoice == 'PEDRA' && computerChoice == "PAPEL") {
        playerScore++;
    }
    else if (playerChoice == 'PEDRA' && computerChoice == "TESOURA") {
        machineScore++;
    }

    else if (playerChoice == 'PAPEL' && computerChoice == "PEDRA") {
        playerScore++;
    }
    else if (playerChoice == 'PAPEL' && computerChoice == "TESOURA") {
        machineScore++;
    }

    else if (playerChoice == 'TESOURA' && computerChoice == "PAPEL") {
        playerScore++
    }
    else if (playerChoice == 'TESOURA' && computerChoice == "PEDRA") {
        machineScore++
    }

    alert(`Player Score → ${playerScore} | Computer Choice → ${machineScore}`);
};

function playGame() {
    const playerSelection = getPlayerChoice();
    const computerSelection = getComputerChoice();
    alert(computerSelection);

    playRound(playerSelection, computerSelection)
}

playGame();
playGame();
playGame();
playGame();
playGame();
console.log(`Player Score → ${playerScore} | Computer Choice → ${machineScore}`);

// function scorePoint(info) {
//     if (info === 1) {
//         playerScore++;
//     } else if (info === 0) {
//         botScore++;
//     }
// } /* COULD BE TERNARY OPERATOR */


// function verifyWinner(playerChoice, computerChoice) {

// }

