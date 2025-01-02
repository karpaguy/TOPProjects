// const sizeInput = document.querySelector('.size-input');
// const submitBtn = document.querySelector('#submit');
const gridContainer = document.querySelector('.grid-container');


function createGrid(sizeDesired){
    let squareWidth = 512 / sizeDesired;
    let squareMaxCount = sizeDesired ** 2;

    for (let i = 0; i < squareMaxCount; i++) {
        const square = document.createElement('div');
        square.classList.add('color-square');
        square.style.width = squareWidth + "px";
        gridContainer.appendChild(square);
    }
}

// function changeGridSize() {
//     for (let i = 0; i <= sizeInput.value; i++) {
//         const colorBlock = document.createElement('div');
//         colorBlock.classList.add('color-block');
//         colorBlock.style.width = `${(512 / sizeInput.value) * 2}px`;
//         grid.append(colorBlock);
//     }    
// };

createGrid(4);
// submitBtn.addEventListener('click', changeGridSize);


// // ---------
// // const colorBlock = document.createElement('div');
// // colorBlock.classList.add('color-block');
// // grid.append(colorBlock);

// // Width → 512/n; Height → 512/n

// // Map com base em n, com o Width e Height definido na conta gridSize/n.
// // n sendo o total de blocos que o usuário deseja, com um limite de 100.

