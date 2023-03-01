// একটা ফাংশনের ভিতর থেকে আরেকটা ফাংশনকে প্যারামিটার এর সাহায্যে কল করা। অর্থাৎ এখানে প্যারামিটার এর ভ্যালু হিসেবে আরেকটা ফাংশনকে ভ্যালু হিসেবে পাঠানো হয়। 

function greeting(greetQuote, name) {
    greetQuote(name); // called back
}

function greetQuote(name){
    console.log('Good morning', name);
}

greeting(greetQuote, 'Brad');
greeting(greetQuote, 'Pit');
greeting(greetQuote, 'Chulbul');