/* Harry’s mom gave him money and asked him to buy some oranges and apples. Write a program to
help Harry calculate how much money the shopkeeper will return. */
// The first line of the input is the taka Harry’s mom gave him. (1000)
// The second line is the cost of 1 kg of oranges and 1 kg of apples. (700)
// make the output 300

var givenMoney = 1000;
var applePrice = 400;
var orangePrice = 300;
var totalPrice = (applePrice + orangePrice);
var returnPrice = (givenMoney - totalPrice);
console.log('The shopkeeper will return', returnPrice, 'taka');