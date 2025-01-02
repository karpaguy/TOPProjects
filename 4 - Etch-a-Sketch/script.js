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

function paintBlack(e) {
    this.style.backgroundColor = 'black';
}

function setNewGrid() {
    let newGridSize = sizeInput.value;
    setGrid(newGridSize)
}

setGrid(4);
submitBtn.addEventListener('click', setNewGrid);

/* 
setNewGrid() {
    let newSize = Input do User

    confere se tá ok
        se ok {
            setGrid
        }
        se não {
            fala que tá torto
        }
}

*/

// function changeGridSize() {
//     for (let i = 0; i <= sizeInput.value; i++) {
//         const colorBlock = document.createElement('div');
//         colorBlock.classList.add('color-block');
//         colorBlock.style.width = `${(512 / sizeInput.value) * 2}px`;
//         grid.append(colorBlock);
//     }    
// };

// // ---------
// // const colorBlock = document.createElement('div');
// // colorBlock.classList.add('color-block');
// // grid.append(colorBlock);

// // Width → 512/n; Height → 512/n

// // Map com base em n, com o Width e Height definido na conta gridSize/n.
// // n sendo o total de blocos que o usuário deseja, com um limite de 100.

