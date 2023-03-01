let student1 = {name: 'Jalil', partner: 'Borsha'};
let student2 = {name: 'Raj', partner: 'Anika'};
let student3 = 26;

function makeCouple(couple1, couple2, couple3) {
    couple1.name = 'Ononto';
    couple2.partner = 'Mim';
    couple3 = 30;
}

console.log(student1, student2, student3);
makeCouple(student1, student2, student3);
console.log(student1, student2, student3); // pass by reference দ্বারা ফাংশন চালানোর পর ভ্যালু primitive হলে চেঞ্জ হবে না যেমন student3 এর ভ্যালু চেঞ্জ হয়নি, এটাকে বলে pass by value.
// কিন্তু non-primitive ভ্যালু দেয়া এমন গুলা চেঞ্জ হবে যেমন student1 ও student2 চেঞ্জ হয়েছে। এটা হচ্ছে pass by reference.