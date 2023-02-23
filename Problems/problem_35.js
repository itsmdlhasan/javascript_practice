/* Reverse String */


// forward function
function forwardString(text) {
    for (let i = 0; i < text.length; i++) {
        const element = text[i];
        console.log(element);
    }
}

const myString = 'I am a good boy';
const forwarded = forwardString(myString);


// reverse function
function reverseString(lyrics) {
    for (let i = lyrics.length-1; i >= 0; i--) { // এখানে -১ দেওয়ার কারন হচ্ছে যেহেতু রিভার্স ওয়েতে লেংথ ২৪ টা গণনা করে কিন্তু আসলে ক্যারেক্টার আছে ২৩ টা। ফরওয়ার্ডে এই ভেজাল থাকেনা কারন আগেই থেমে যায়। 
        const elements = lyrics[i];
        console.log(elements);
    }
}

const lyrics = 'Ami tar cholona vulbona';
const reversed = reverseString(lyrics);