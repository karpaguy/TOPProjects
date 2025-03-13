const display = document.querySelector('.display');
const result = document.querySelector('#equal');

/*
Step 1 → First Number (ex.: 10)
If Step != 3 and Operator is clicked → Get Operator (Ex.:)
Step 2 or 3 → Second Number

By setting "step !=3" in the getOperator function, you will still be able to change te operator, but when selecting the second number, you won't.

*/

let step = 1;
let firstNum = [];
let secondNum = [];
let operator;

function getNumber(num) {
        if (step == 2 || step == 3) {
                step = 3;
                secondNum.push(num);
                display.textContent = secondNum.join('');
        } else if (step == 1) {
                firstNum.push(num);
                display.textContent = firstNum.join('');
        }
}

function getOperator(opt) {
        if (step != 3) {
                step = 2;
                operator = opt;
                display.textContent = operator;
        }
}

function clearDisplay() {
        firstNum = [];
        secondNum = [];
        operator = '';
        display.textContent = '';
        step = 1;
}

function calculate() {
        let result;
        firstNum = parseInt(firstNum.join(''));
        secondNum = parseInt(secondNum.join(''));
        switch(operator) {
                case '+':
                        result =  firstNum +  secondNum;
                        break;
                case '-':
                        result = firstNum - secondNum;
                        break;
                case '*':
                        result = firstNum * secondNum;
                        break;
                case '/':
                        result = firstNum / secondNum;
                        break;
        }
        clearDisplay();
        getNumber(result);
}

// function appendToDisplay(value) {
//     if ( displayArray[0] != undefined && displayArray[1] != undefined ) {
//         displayArray[0] += value;
//         console.log(displayArray);
//     }
// }

/*

make it by step.
firstNumber, secondNumber, operator

step = 0
step = 2
step = 3

numArray = [] ou displayArray = []
        se tiver dificuldades, firstNum = [], secondNum = []

numArray.push(num)
etc = numArray.join('') → fazer pra string, pesquisar


func getNumber()
func getOperator()
func clearDisplay()
const calculateEquals = () => {}

// !(displayArray[1].includes(value)) && 

/* SUPREME EXAMPLE */
// let thing = [1,"+"];
// console.log(thing[0])
// display.textContent = thing[0]
// thing[0] = 'red';
// console.log(thing[0])


/* OLD FUNCTIONS */
// const operatorTypes = ['+', '-', '*', '/'];

// let firstNum = '';
// let secondNum = '';
// let operatorNow = '';

// function appendToNumber(num) {
//     console.log(!isNaN(num))
// }

// function appendToOperator(operator) {
//     return operatorNow = operator;
// }

// function appendToDisplay(obj

// ) {
    
// }
// result.addEventListener('click', () => console.log(firstNum + secondNum));
