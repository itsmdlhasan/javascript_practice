/* একটা প্রোগ্রাম লিখো যেখানে  ২০ বার পর্যন্ত ৬ তোলার চেষ্টা করা হবে। */

for (i = 0; i < 20; i++) {
    let random = Math.round(Math.random()*6);
    console.log(random);
}