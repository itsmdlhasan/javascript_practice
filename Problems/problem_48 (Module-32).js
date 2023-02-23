/* Problem-1:
You have an odd array (array with odd numbers). [ 1, 3, 5, 7, 9 ].
Now convert this array into an even array (array with even
numbers). [ 2, 4, 6, 8, 10 ]. Do this using for loop & array.map()
method. */
// with for loop
const oddArray1 = [1, 3, 5, 7, 9];
for (let i = 0; i < oddArray1.length; i++) {
    oddArray1[i] = oddArray1[i] + 1;
}
console.log(oddArray1);
// with map loop
const oddArray2 = [1, 3, 5, 7, 9];
const evenMaker = oddArray2.map(oddNumber => oddNumber + 1);
console.log(evenMaker);




/* Problem-2:
You are given an array say: [33, 50, 79, 78, 90, 101, 30 ]. Now
return/get all the elements which are divisible by 10 using
array.filter() method. */
const numbers = [33, 50, 79, 78, 90, 101, 30];
const byTenDivisible = numbers.filter(num => num % 10 === 0);
console.log(byTenDivisible);




/* Problem-3:
Now do the same task of question 2. But do this using array.find()
method. Then compare the output of question 2 & question 3. */
const numbers1 = [33, 50, 79, 78, 90, 101, 30];
const by10Divisible = numbers1.find(num => num % 10 === 0);
console.log(byTenDivisible === by10Divisible);




/* Problem-4:
You have an array [ 1, 9, 17, 22 ]. Add the all elements
of this array and give output. Do this using for loop &
array.reduce() method. */
const numbers2 = [1, 9, 17, 22];
// with for loop
let sum = 0;
for (let i = 0; i < numbers2.length; i++) {
    sum = sum + numbers2[i];
}
console.log(sum);
// with reduce
const add = numbers2.reduce((previous, current) => {
    return previous + current;
});
console.log(add);




/* Problem-5:
const people = [
    {name: 'Meena', age: 20},
    {name: 'Rina', age: 15},
    {name: 'Suchorita', age: 22},
];
Follow above array of objects. So, you have 3 objects as
array element. Can you find out the total sum from here?
Do this using for loop and for in loop and reduce method */
const people = [
    { name: 'Meena', age: 20 },
    { name: 'Rina', age: 15 },
    { name: 'Suchorita', age: 22 },
];
// with for loop
let sumOfAge = 0;
for (let i = 0; i < people.length; i++) {
    sumOfAge = sumOfAge + people[i].age;
}
console.log(sumOfAge);

// with for in loop
let totalAge = 0;
for (let i in people) {
    totalAge += people[i].age;
}
console.log(totalAge);

// with reduce
const total = people.reduce((previous, current) => {
    return previous + current.age;
}, 0);
console.log(total);




/* Problem-6: 
const student = {
    name: 'Fredie',
    Age: 26,
}
console the value of age... */
const student = {
    name: 'Fredie',
    Age: 26,
}
console.log(student.Age); // rule 1
const { Age } = student;
console.log(Age); // rule 2 by declaring property as variable




/* Problem-7:
let data = {
    location: [
        {
            latitude: '34.5, 37.8',
            longitude: '98.77, 58.7',
            city: 'Hyderabad',
            country: 'India',
        }
    ]
}
Console the value of city... */
let data = {
    location: [
        {
            latitude: '34.5, 37.8',
            longitude: '98.77, 58.7',
            city: 'Hyderabad',
            country: 'India',
        }
    ]
}
console.log(data.location[0].city); // value object হলে dot দিয়ে প্রবেশ করবে, array হলে index number দিয়ে প্রবেশ করবে। index number এর ভিতর আবার object থাকলে পুনরায় dot দিয়ে প্রবেশ করবে। 




/* Problem - 8:
const user = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
        geo: {
            lat: "-37.3159",
            lng: "81.1496"
        }
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
        name: "Romaguera-Crona",
        catchPhrase: "Multi-layered client-server neural-net",
        bs: "harness real-time e-markets"
    }
}
● Console the value of email
● Console the value of address
● Console the value of city
● Console the value of lat
● Console the value of company name */
const user = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
        geo: {
            lat: "-37.3159",
            lng: "81.1496"
        }
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
        name: "Romaguera-Crona",
        catchPhrase: "Multi-layered client-server neural-net",
        bs: "harness real-time e-markets"
    }
}
// rule 1 for consoling email
console.log(user.email);
// rule 2 for consoling email
const {email} = user;
console.log(email);
// rule 1 for getting address
console.log(user.address);
// rule 2 for getting address
const {address} = user;
console.log(address);
// rule 1 for getting city
console.log(user.address.city);
// rule 2 for getting city 
const {city} = user.address;
console.log(city);
// rule 1 for getting lat
console.log(user.address.geo.lat);
// rule 2 for getting lat
const {lat} = user.address.geo; 
console.log(lat);
// rule 1 for getting company name
console.log(user.company.name);
// rule 2 
console.log('you know well');