// primitive data type = number/string/boolean/null/undefined
// non-primitive data type = array/object/array like object
// null/undefined কে tribal ও বলা হয়। 




// primitive data type এ = sign মানে নিজের মান টা চেঞ্জ হবে। ফলে দুইটা ভেরিয়েবল নিজেদের জন্য আলাদা আলাদা মান রেফার করবে নতুনভাবে। 
let a = 3; // number
let b = 'Mahmud'; // string
let c = true; // boolean
console.log(a, b, c);
b = a; // b কে বলা হলো যে তুমি a এর মান তোমার নিজেরও করে নাও। 
console.log(a, b, c);


// non primitive data type এ = sign মানে দুইজন একই হয়ে যাবে। অর্থাৎ দুইজন একই মান রেফার করবে। 
let x = {name: 'Razib'};
let y = {name: 'Shakib'};
console.log(x, y);
y = x; // y কে বলা যে তুমি আর x একই। 
console.log(x, y); 
y.name = 'Shojib';
console.log(x, y); // যেহেতু y আর x একই, তাই y এর কিছু পালটানো মানে x এর ও সেটা পাল্টানো। 