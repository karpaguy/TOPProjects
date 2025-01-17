const fibonacci = function(positionDesired) {
    // if (positionDesired.isInteger() != true) positionDesired += positionDesired;
    if (positionDesired == 0) return 0;
    if (positionDesired < 0) return "OOPS";

    let previosNum = 0;   
    let currentNum = 1;

    for (let i = 2; i <= positionDesired; i++) {
        let accumulator = previosNum + currentNum;
        previosNum = currentNum;
        currentNum = accumulator;
    }

    return currentNum;
};

// Do not edit below this line
module.exports = fibonacci;
