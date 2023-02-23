/* miles to kilometer conversion function */
// hints: 1kilo = 1.609 miles

function milesToKilo(miles) {
    const kilo = miles / 1.609;
    return kilo.toFixed(3);
}

let myOfficeDistanceInMiles = 70;
let myOfficeDistanceInKilo = milesToKilo(myOfficeDistanceInMiles);
console.log(myOfficeDistanceInKilo);