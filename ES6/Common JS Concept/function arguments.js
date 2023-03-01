function sum(a, b, c) {
    console.log(arguments); // arguments টা array like object 
    console.log(arguments[1]); // index number দিয়ে ভ্যালু পাওয়া যায় ।
    const arg = [...arguments];
    console.log(arg);
    console.log(arguments.length);
}
sum(2, 3, 4); // সরাসরি value দ্বারা arguments ডিক্লিয়ার করা। 

let a = 2;
let b = 3;
let c = 4;
sum(a, b, c); // রেফারেন্স দ্বারা arguments এর ভ্যালু ডিক্লিয়ার করা। 