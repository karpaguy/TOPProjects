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

let pencilMode = "black";
let colorPicked = "#ff0000";
let rainbowColors = ['#e81416', '#ffa500', '#faeb36', '#79c314', '#487de7', '#4b369d', '#70369d'];
const eraser = document.querySelector('#eraser');
const blackPaint = document.querySelector('#blackpaint');
const colorPicker = document.querySelector('#color-picker');
const colorConfirm = document.querySelector('#color-confirm');
const rainbowPaint = document.querySelector('#rainbow');

function paintBlack(item) {
    item.style.backgroundColor = 'black';
}
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
        case 'black':
            paintBlack(this);
            break;
        case 'eraser':
            eraserBlock(this);
            break;
        case 'colorPicked':
            paintColor(this, colorPicked);
            break;
        case 'rainbow':
            paintRainbow(this)
            break;
    };
} ;

blackPaint.addEventListener('click', () => { pencilMode = 'black' });
eraser.addEventListener('click', () => { pencilMode = 'eraser' });
colorConfirm.addEventListener('click', () => { 
    pencilMode = 'colorPicked';
    colorPicked = colorPicker.value;
})
rainbowPaint.addEventListener('click', () => {pencilMode = 'rainbow'});
submitBtn.addEventListener('click', setNewGrid);
setGrid(4);