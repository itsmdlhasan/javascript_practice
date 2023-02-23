/* multiplication of factorial numbers */
// যে কোনো সংখ্যার factorial হলো ১ থেকে ঐ সংখ্যা পর্যন্ত গুণ। 
// 7! মানে ৭ এর factorial


function multiplicationOfNumb(numb) {
    let multiply = 1; // মাল্টিপ্লাই এর জন্য ১ ভ্যালু নিতে হবে কারন 0 এর সাথে কোনো কিছু গুণ করলে মান 0 হয়ে যাবে। 
    for (let i = 1; i <= numb; i++) {
        multiply *= i;
        console.log(i, multiply);
    }
    return multiply;
}

console.log(multiplicationOfNumb(7));


// reverse way
function multiplicationOfNumbers(number) {
    let multiply = 1; 
    for (let i = number; i >= 1; i--) {
        multiply *= i;
        console.log(i, multiply);
    }
    return multiply;
}

console.log(multiplicationOfNumbers(4));




// factorial by while loop
function getFactorial(numbers) {
    let i = 1;
    let multiply = 1;
    while (i <= numbers) {
        multiply = multiply * i;
        console.log(i, multiply);
        i++;
    }
    return multiply;
}

const factorial = getFactorial(7);
console.log(factorial);
