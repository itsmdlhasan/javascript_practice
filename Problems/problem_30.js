/* make a celsius to fahrenheit converter function */
// 1 celsius = 1*(9/5)+32 deg fahrenheit

function toFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}
console.log(toFahrenheit(34).toFixed(2));


// make a fahrenheit to celsius function 
function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}
console.log(toCelsius(93.20).toFixed(2));