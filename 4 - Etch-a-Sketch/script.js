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
        square.addEventListener('mouseover', paintModes);
        gridContainer.appendChild(square);
    }
}

function setNewGrid() {
    let newGridSize = sizeInput.value;

    if (newGridSize > 100) {
        alert('Grid Size cant be higher than 100x100!');
        return;
    }
    else if (isNaN(newGridSize)) {
        alert('You must enter a number.');
        return;
    }

    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.lastChild)
    };
    setGrid(newGridSize)
}

let pencilMode = "colorPicked";
let rainbowColors = ['#e81416', '#ffa500', '#faeb36', '#79c314', '#487de7', '#4b369d', '#70369d'];

const eraser = document.querySelector('#eraser');
const colorPicker = document.querySelector('#color-picker');
const rainbowPaint = document.querySelector('#rainbow');

function eraserBlock(item) {
    item.style.backgroundColor = 'white';
}
function paintColor(item, color) {
    item.style.backgroundColor = `${color}`;
}
function paintRainbow(item) {
    item.style.backgroundColor = `${rainbowColors[Math.floor(Math.random() * 7)]}`;
}

function paintModes(){
    switch (pencilMode) {
        case 'eraser':
            eraserBlock(this);
            break;
        case 'colorPicked':
            paintColor(this, colorPicker.value);
            break;
        case 'rainbow':
            paintRainbow(this)
            break;
    };
};

eraser.addEventListener('click', () => { pencilMode = 'eraser' });
colorPicker.addEventListener('click', () => { pencilMode = 'colorPicked';})
rainbowPaint.addEventListener('click', () => {pencilMode = 'rainbow'});
submitBtn.addEventListener('click', setNewGrid);
setGrid(4);