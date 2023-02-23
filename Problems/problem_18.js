/* একটা ফাংশন লিখবা যেটা যেকোন নামকে uppercase বা রেগুলার কেইস হিসেবে নিবে আর আউটপুট হিসেবে সেই নাম lowercase করে রিটার্ন করবে। */

function makeLowerCase(str) {
    return str.toLowerCase();
}
console.log(makeLowerCase('MAHMUD'));
console.log(makeLowerCase('Nabid'));




// অথবা এইভাবে  
function convertCase(str, flag) {
    if (flag === 'upper') {
        return str.toUpperCase();
    } else if (flag === 'lower') {
        return str.toLowerCase();
    } else {
        return str;
    }
}

let result = convertCase("Hello World", "upper");
console.log(result); // outputs "HELLO WORLD"

result = convertCase("Hello World", "lower");
console.log(result); // outputs "hello world"

result = convertCase("Hello World", "default");
console.log(result); // outputs "Hello World"