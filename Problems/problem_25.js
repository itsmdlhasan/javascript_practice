/* find leap year */
// hints: A leap year is a year that has an extra day, February 29th. It occurs in years that are divisible by 4, except for years that are both divisible by 100 and not divisible by 400.


function findLeapYear(year) {
    if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
        console.log('Congrats!', year, ' is a leap year.');
    }
    else {
        console.log('Sorry!', year, ' is not a leap year.');
    }
}

let myInputYear = 2100;
findLeapYear(myInputYear);