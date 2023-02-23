/* inch to feet converter */
// hints: 1Feet = 12 inch


// analog process
const myInches = 12;
const myFeet = myInches / 12; // cause we know that 12 inch = 1 feet
console.log(myFeet);

const dadaInches = 67;
const dadaFeet = dadaInches / 12;
console.log(dadaFeet);






// making every time usable function
function inchToFeet(inches) {
    const feet = inches / 12;
    return feet;
}

const uncleInches = 144;
const uncleFeet = inchToFeet(uncleInches);
console.log(uncleFeet);