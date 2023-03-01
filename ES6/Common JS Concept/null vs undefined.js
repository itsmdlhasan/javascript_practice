// 9 ways to get undefined

// ১। ভেরিয়েবল এর মান দেওয়া না হলে।
let a;
console.log(a);

// ২। ফাংশন থেকে কিছু রিটার্ণ না করলে।
function checkUndefined() {
    const a = 2;
    const b = 3;
}
console.log(checkUndefined());

// ৩। ফাংশনে কোনো parameter এর মান না দেওয়া থাকলে।
function checkUndefined2 (a, b, c) {
    console.log(a, b, c);
}
checkUndefined2(2, 3);

// ৪। ফাংশনে রিটার্ণের ডানপাশে কিছু নির্দিষ্ট করে রিটার্ণ না করলে। 
function noNegative(a, b) {
    return
}
console.log(noNegative());


// ৫। অবযেক্ট এর মধ্যে কোনো প্রোপার্টি এর মান না দেওয়া থাকলে সেটাকে যদি দেখতে চাওয়া হয়। 
const object = {name: 'Mahmud', age: 26};
console.log(object.height);

// ৬। array এর কোনো index এর ভ্যালু না দেওয়া থাকলে যদি সেটাকে দেখতে চাওয়া হয়। 
const array = [1, 2];
console.log(array[3]);


// ৭। array এর কোনো index কে ডিলিট করে দিলে সেটা empty হয়ে থেকে যাবে এবং মান undefined থাকবে। যার কারন slice/splice এগুলা ব্যবহার করা ভালো array এর ক্ষেত্রে। 
const num = [2, 4, 5];
delete num[1];
console.log(num[1]);


// ৮। কোনো ভেরিয়েবল এর ভ্যালু কে undefined করে উল্লেখ করলে। যার কারনে এক্ষেত্রে null উল্লেখ করা ভালো। 
const value = undefined;
console.log(value);
// মনে রাখতে হবে typeof null হচ্ছে object, যদিও এটা javascript এর একটা mistake.
console.log(typeof null)


// ৯। type of undefined বা undefined কোনো কিছুর typeof সবসময় undefined.
console.log(typeof value);