/* Write a function findLeapYear() that will take the array
[2023,2024,2025,2028,2030] as the input parameter and will check if
each year is a leap year. If a year is a leap year insert that year in a
new array, return the new array and print the result. */

function findLeapYear(year) {
    let leapYear = [];
    for (let i = 0; i < year.length; i++) {
        if (year[i] % 400 === 0 || (year[i] % 4 === 0 && year[i] % 100 !== 0)) {
            leapYear.push(year[i]);
        }
    }
    return leapYear;
}

const myInput = [2023, 2024, 2025, 2028, 2030];
const result = findLeapYear(myInput);
console.log(result);