/* একটা array এর মধ্যে অনেকগুলা সংখ্যা থাকবে। তোমার কাজ হচ্ছে সংখ্যা গুলা একটার পর একটা করে চেক করা। এবং সংখ্যা গুলা যদি পজিটিভ সংখ্যা হয়। অর্থাৎ শূন্য বা শূন্যের চাইতে বড় হয় তাহলে সেগুলাকে কোন একটা array এর মধ্যে রাখবে। আর যদি নেগেটিভ সংখ্যা হয়। তাহলে লুপটা স্টপ করে দিবে। এবং লুপ বন্ধ করার আগ পর্যন্ত যতগুলা পজিটিভ সংখ্যা পাওয়া গেছে। সেগুলা রিটার্ন করে দিবে। */

let numbers = [34, 22, 74, 0, -123, 567, -99, 76, 44];

function positiveNumber(numbers) {
    let positive = [];
    for (let i = 0; i < numbers.length; i++) {
        let element = numbers[i];
        if (element >= 0) {
            positive.push(element);
        }
        else {
            break;
        }
    }
    return positive;
}

console.log(positiveNumber(numbers));