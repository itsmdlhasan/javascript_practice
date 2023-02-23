/* make a function to calculate factorial of numbers using for loop */

function sumOfNumbers(numbers) {
    let sum = 0;
    for (let i = 1; i <= numbers; i++) {
        sum += i;
        console.log(i, sum)
    }
    return sum;
}

sumOfNumbers([44]);