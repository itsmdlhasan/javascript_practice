/* Write a program to calculate the average marks of Mathematics, Biology, Chemistry, Physics, and
Bangla of a student. Print the result in 2 decimal places. The marks are respectively 75.25, 65, 80, 35.45, 99.50 */

var mathematicsMark = 75.25;
var biologyMark = 65;
var chemistryMark = 80;
var physicsMark = 35.45;
var banglaMark = 99.50;
var totalMark = (mathematicsMark + biologyMark + chemistryMark + physicsMark + banglaMark);
var average = (totalMark / 5);
console.log(average.toFixed(2));