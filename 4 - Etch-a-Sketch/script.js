;
const submitBtn = document.querySelector('#submit');
const gridContainer = document.querySelector('.grid-container');
const sizeInput = document.querySelector('.size-input')

function setGrid(sizeDesired){
    let squareWidth = 512 / sizeDesired;
    let squareMaxCount = sizeDesired ** 2;

    for (let i = 0; i < squareMaxCount; i++) {
        const square = document.createElement('div');
        square.classList.add('color-square');
        square.style.width = squareWidth + "px";
        square.addEventListener('mouseover', paintBlack);
        gridContainer.appendChild(square);
    }
}

function paintBlack() {
    this.style.backgroundColor = 'black';
}

function setNewGrid() {
    let newGridSize = sizeInput.value;

    if (newGridSize > 100) {
        alert('Grid Size cant be higher than 100x100!');
        return;
    };
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.lastChild)
    };
    setGrid(newGridSize)
}

setGrid(4);
submitBtn.addEventListener('click', setNewGrid);
