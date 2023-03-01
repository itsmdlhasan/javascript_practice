// 1. true মানে truthy, false মানে falsy
// 2. যে কোনো ধণাত্মক বা ঋণাত্মক সংখ্যা truthy, কিন্তু শূন্য সবসময় false
// 3. যে কোনো string truthy, কিন্তু string টা empty হলে falsy
// 4. যে কোনো array বা object truthy, এর ভিতরে মান থাকুক বা না থাকুক
// 5. undefined যে কোনো কিছু falsy
// 6. null যে কোনো কিছু falsy

let x = 5;
if(x) {
    console.log('this is truth');
}
else {
    console.log('this is false');
}

// bang (!) চিহ্ন দ্বারা রিভার্স ওয়েতে চেক করা হয়।
if(!x) {
    console.log('this is truth');
}
else {
    console.log('this is false');
}

// double bang (!!) দ্বারা পুনরায় নেগিটিভ কে পজিটিভ করে চেক করা হয়। 
if(!!x) {
    console.log('this is truth');
}
else {
    console.log('this is false');
}