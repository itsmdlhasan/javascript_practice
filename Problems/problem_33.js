// how to get max number in an array */


function cakeWinner(number) {
    let maxNumber = number[0];
    for (let i = 0; i < number.length; i++) {
        let element = number[i];
        if (element > maxNumber) {
            largest = element;
        }
    }
    return largest;
}

let number = [77, 87, 33];
let result = cakeWinner(number);
console.log(result, 'is the max number');