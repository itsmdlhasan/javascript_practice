/* Problem-1:
How will you access Sophia’s secondary school location? */
let data1 = {
    Sophia: {
        id: 33,
        study: [
            {
                primary:
                    [
                        { school_name: "ABC primary school" },
                        { location: "Peters burg" }
                    ]
            },
            {
                secondary:
                    [
                        {
                            school_name: "ABC secondary school"

                        },

                        { location: "St Lorence" }
                    ]
            },
        ]
    }
}
// console.log(data1.Sophia.study[1].secondary[1].location); // rule-1
const { Sophia: { study: [, { secondary: [, { location: desiredLocation }] }] } } = data1; // rule-2 by destructuring, এখানে বুঝতে হবে যে array এর index এ এক্সেস করা হয় কমা দ্বারা, আর object এ property name দিতে হয়। সবশেষে ভ্যালুর জায়গায় variable টির নাম দিতে হয়। 
// console.log(desiredLocation);






/* Problem-2:
How will you get the output 
a) level-2
b) 72.8621 */
let data2 =
    [
        {
            "pHeroCourses": {
                "course-x": "web development"
            }
        },
        {
            "pHeroCourses": {
                "course-y": "phitron"
            }
        },
        {
            "pHeroCourses": {
                "course-z": "acc"
            }
        },
        {
            "pHeroCourses": {
                "course-xyz": "level-2"
            },
            "locationField": {
                "en-US": {
                    "lat": 19.28563,
                    "lon": 72.8691
                }
            }
        }
    ]
// console.log(data2[3]["pHeroCourses"]["course-xyz"]);
// console.log(data2[3]["locationField"]["en-US"]["lon"]);







/* Problem-3:
How to get output 24? [Advanced - uses 2D matrix concept] */
let MathScore = [
    ['John Doe', 20, 60, 'A'],
    ['Jane Doe', 10, 52, 'B'],
    ['Petr Chess', 5, 24, 'F'],
    ['Ling Jess', 28, 43, 'A'],
    ['Ben Liard', 16, 51, 'B']
];
// console.log(MathScore[2][2]); // প্রথমে row হিসেবে index গণনা করবে, তারপর column হিসেবে index number গণণা করবে। 








/* Problem-4:
How will you get the output
a) abc
b) xyz */
let activities = {
    activity1: [
        {
            name: "listen on spotify",
            song_list: {

                song_1: "abc",
                song_2: "bcd"

            },
            id: 1
        },
        {
            name: "listen music through bot",

            song_list: {
                song_1: "wxy",
                song_2: "xyz"

            },
            id: 2
        }
    ]
}
// console.log(activities.activity1[0].song_list.song_1);
// console.log(activities.activity1[1].song_list.song_2);





/* Problem-5: 
টেম্পলেট স্ট্রিং দিয়ে একটা স্ট্রিং তৈরি করো। সেটার মধ্যে উপরে ডিক্লেয়ার করা ভেরিয়েবল এর মান ডাইনামিক ভাবে বসাও। একইভাবে উপরে একটা অবজেক্ট ডিক্লেয়ার করো। এবং ডাইনামিকভাবে উপরের অবজেক্ট এর দুইটা প্রপার্টি এর মান তোমার টেমপ্লেট স্ট্রিং এর মধ্যে বসাও। */
let g = [2, 3, 4];
const h = [5, 6, 7];
const i = {
    name: 'Hasan',
    age: '26',
}
const j = `${g},${h} no these are not ${i.name}'s age. The truth is ${i.age}.`;
// console.log(j);





/* Problem-6:
একটা প্যারামিটার ওয়ালা arrow ফাংশন ডিক্লেয়ার করো। এবং সেই ফাংশনের কাজ হবে তুমি কোন ইনপুট দিলে সেই ইনপুট সংখ্যাকে ৫ দিয়ে ভাগ করে আউটপুট দিবে। */
const arrowF = (myInput) => myInput / 5;
// console.log(arrowF(40));





/* Problem-7:
তুমি দুইটা প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন লিখবে। সেই ফাংশনের ভিতরে কাজ হবে। প্রত্যেকটা ইনপুট প্যারামিটার এর সাথে ২ যোগ করবে তারপর যোগফল দুইটা গুণ করবে। ক্যামনে করবে সেটা চিন্তা করে বের করার চেষ্টা করো */
const arrowF2 = (input1, input2) => {
    const add1 = input1 + 2;
    const add2 = input2 + 2;
    const multiply = add1 * add2;
    return multiply;
}
// console.log(arrowF2(2, 3));





/* Problem-8:
এইবার তিনটা প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন ডিক্লেয়ার করো। যেই ফাংশনের কাজ হবে তিনটা প্যারামিটার নিয়ে সেই তিনটা প্যারামিটারকে গুণ করে সেই রেজাল্ট রিটার্ন করবে। */
const arrowF4 = (num1, num2, num3) => num1 * num2 * num3;
// console.log(arrowF4(3, 4, 5));





/* Problem-9:
অনেকগুলা সংখ্যার একটা array হবে। তারপর তোমার কাজ হবে array এর উপরে map ইউজ করে। প্রত্যেকটা উপাদানকে ৫ দিয়ে গুন্ করে গুনফল আরেকটা array হিসেবে রাখবে। পুরা কাজটা এক লাইনে হবে। */
const t = [2, 3, 4, 5];
const mapped = t.map(everyNum => everyNum * 5);
// console.log(mapped);





/* Problem-10:
অনেকগুলা সংখ্যার একটা array থেকে শুধু বিজোড় সংখ্যা বের করে নিয়ে আসার জন্য filter ইউজ করো */
const multipleNumbers = [2, 3, 4, 5, 6];
const numeric = multipleNumbers.filter(singleNumber => singleNumber % 2 !== 0);
// console.log(numeric);




/* Problem-11:
একটা array এর মধ্যে অনেকগুলা অবজেক্ট আছে। সেখানে যেই অবজেক্ট এর price আছে ৫০০০ টেক্কা সেই অবজেক্টকে find দিয়ে বের করো।  */
const obj = [
    {
        name: 'oppo',
        price: 3000
    },
    {
        name: 'oneplus',
        price: 5000
    },
    {
        name: 'xperia',
        price: 4000
    }
];
const finder = obj.find(i => i.price === 5000);
// console.log(finder.name);




/* Problem-12:
array এর destructuring করবে আর সেটা করার জন্য তুমি এরে এর থার্ড পজিশন এর উপাদান কে destructuring করে 'three' নামক একটা ভেরিয়েবল এ রাখবে। */
const theArray = ['Mahmud', 'Shojib', 'Mahin', 'Rocky'];
const [, , three] = theArray; // প্রত্যেকটা কমা মানে একেকটা ভ্যালুকে destructure করা হচ্ছে। যেহেতু আমার একটাই দরকার তাই একটারই নাম ব্যবহার করেছি। 
// console.log(three);





/* Problem-13:
How will you display by destructuring?
a) Petersburg
b) Herry */
let students = {
    2222: {

        name: "Jack",
        section: "C",
        class: "IX",
        address: {

            "building no": 12,
            "street": "St. Jonson",
            "city": "Petersburg",
            "country": "UK"
        }

    },
    3333: {

        name: "Herry",
        section: "D",
        class: "X",
        address: {
            "building no": 85,
            "street": "DC road",
            "city": "Kachukhet",
            "country": "Bangladesh"
        }

    }
}
// console.log(students[2222].address.city); // rule-1
// const {2222: {address: {"city": cityPosition}}} = students; // rule-2
// console.log(cityPosition);
// console.log(students[3333].name); // rule-1
// const {3333: {name: nameOfHerry}} = students; // rule-2
// console.log(nameOfHerry);






/* Problem-14:
How will you display by destructuring
a) programming er coddogosti
b) VW
c) Bangladesh */
let instructor = {
    name: "Jhankar Mahbub",
    entrepreneur: true,
    additionalData: {
        writer: true,
        favoriteHobbies: ["travelling", "Coding"],
        books: ["programming er bolod to bos", "programming er coddogosti"],
        moreDetails: {
            favoriteBasketballTeam: "XYZ",
            isYoungest: true,
            hometown: {
                city: "ABC",
                state: "VW",
            },
            countriesLivedIn: ["Bangladesh", "New York"]
        }
    }
}
// const {additionalData: {books: [, paisi]}} = instructor;
// console.log(paisi);
// const {additionalData: {moreDetails: {hometown: {state: paisi2}}}} = instructor;
// console.log(paisi2);







/* Problem-15
How will you display by destructuring
a) B
b) D */
const studentData = [
    {
        class: 10,
        details: [
            {
                studentId: '1',
                gradingDetails: [{ grade: 'A' }]
            },
            {
                studentId: '2',
                gradingDetails: [{ grade: 'B' }]
            }
        ]
    },
    {
        class: 11,
        details: [
            {
                studentId: 3,
                gradingDetails: [{ grade: 'C' }]
            },
            {
                studentId: 4,
                gradingDetails: [{ grade: 'D' }]
            }
        ]
    },
]
// const [{ details: [, { gradingDetails: [{ grade: secondStudentGrade }] }] }] = studentData;
// const [, { details: [, { gradingDetails: [{ grade: fourthStudentGrade }] }] }] = studentData;
// console.log(secondStudentGrade);
// console.log(fourthStudentGrade);






/* Problem-16:
How will you display
a) habluder adda
b) Beginner */
let data = {
    data:
        [
            {
                bookId: 1,
                bookDetails: {
                    name: "habluder adda",
                    category: "XYZ",
                    price: "20$",
                },
                bookCategory: "Basic",
            },
            {
                bookId: 2,
                bookDetails: {
                    name: "gobluder adda",
                    category: "ABC",
                    price: "40$",
                },
                bookCategory: "Beginner",
            }
        ]
}
// const {data: [{bookDetails: {name: bookName}}]} = data;
// console.log(bookName);
// const {data: [, {bookCategory: categoryName}]} = data;
// console.log(categoryName);