let playerInput;
let botInput;
let playerScore = 0;
let botScore = 0;
const botChoices = ["PEDRA", "PAPEL", "TESOURA"];

function chooseBotInput() {
    return botChoices[(Math.floor(Math.random() * 3))];
}

function verifyWinner(pI, bI) {
    if (pI == 'PEDRA' && bI == "TESOURA") {
        return 1;
    }
    else if (pI == 'PEDRA' && bI == "PAPEL") {
        return 0;
    }
    else if (pI == 'PAPEL' & bI == "TESOURA") {
        return 0
    }
    else {
        return;
    }
}

function scorePoint(info) {
    if (info === 1) {
        playerScore++;
    } else if (info === 0) {
        botScore++;
    }
} /* COULD BE TERNARY OPERATOR */

function game() {
    playerInput = prompt('Escolha PEDRA/PAPEL/TESOURA em MAÍSCULO: ')
    botInput = chooseBotInput();
    console.log(`${playerInput} VS ${botInput}`)
    scorePoint(verifyWinner(playerInput, botInput));
    console.log(`Player Score → ${playerScore} || Bot Score → ${botScore}`);
}



// function chooseBotInput {
//     botInput = botChoices[random(1 a 3).floor + 1]
// }

// game() {
//  playerInput = input('Pedra, papel, tesoura: ");
//  chooseBotInput();
//  switch ferrado.
// }


// while (score < 2 || botScore < 2) {
//     game()
// }