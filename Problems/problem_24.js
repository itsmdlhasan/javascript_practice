/* Odd or Even detector function */
// hints: if a number is equally divided by 2, then it is even. But if it has the remainder 1, it is Odd


// first system, where i directly put number to check if it is Even
function isEven(number) {
    if (number % 2 == 0) {
        return true;
    }
    else {
        return false;
    }
}


// second system, where i used variable to check Odd number
function isOdd(number) {
    const remainder = number % 2;
    if (remainder === 1) {
        return true;
    }
    else {
        return false;
    }
}

const myInput = 133;
console.log(isEven(myInput));

const myInput2 = 199;
console.log(isOdd(myInput2));