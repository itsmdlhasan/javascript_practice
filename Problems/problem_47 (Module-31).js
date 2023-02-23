/* Problem-1:
Write an arrow function that will take 3 parameters, will multiply
the parameters and will return the result. */
const arrowF1 = (a, b, c) => a * b * c;
// console.log(arrowF1(10, 20, 30));



/* Problem-2:
Write the following sentence in three lines and print the result:
I am a web developer. I love to code. I love to eat biryani. */
const sentence = `I am a web developer.
I love to code.
I love to eat biryani.`
// console.log(sentence);



/* Problem-3:
Write an arrow function that will take 2 parameters: One parameter
will come from you and the other parameter will be a default
parameter. Add these two parameters and return the result. */
const arrowF2 = (a, b = 3) => a + b;
// console.log(arrowF2(2));



/* Problem-4:
Write an arrow function where it will do the following:
a) It will take an array where the array elements will be the
name of your friends
b) Check if the length of each element is even, push elements
with even length to a new array and return the result
Print the result. */
const friends = ['shahid', 'kamal', 'jhanu', 'mondol', 'boru'];
let newArray1 = [];
const arrowF3 = () => {
    for (const friend of friends) {
        if (friend.length % 2 === 0) {
            newArray1.push(friend);
        }
    }
    return newArray1;
}
// console.log(arrowF3(newArray1));



/* Problem-5:
Write an arrow function where it will do the following:
a) Square each array element
b) Calculate the sum of the squared elements
c) Return the average of the sum of the squared elements
Print the result. */
const numbers1 = [1, 2, 3, 4];
const arrowF4 = () => {
    let newArray2 = [];
    for (const number of numbers1) {
        const squared = number * number;
        newArray2.push(squared);
    }
    let sum = 0;
    for (const newArrayElement of newArray2) {
        sum = sum + newArrayElement;
    }
    return sum / newArray2.length;
}
// console.log(arrowF4(numbers1));



/* Problem-6
Write an arrow function where it will do the following:
a) It will take two array inputs
b) Combine the two arrays and assign them in a new array
c) Find the maximum number from the new array and return the
result
Print the result. */
const a = [1, 2, 3, 4];
const b = [5, 6, 65, 8];
const arrowF5 = (a, b) => {
    const combine = [...a, ...b];
    const maximum = Math.max(...combine);
    return maximum;
}
console.log(arrowF5(a, b));