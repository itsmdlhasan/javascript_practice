/* তোমার যত বই আছে সেগুলার দাম নিয়ে একটা array লিখে ফেলো। যে বই গুলোর দাম ২০০ টাকার উপরে সেগুলাকে স্কিপ করবে। অর্থাৎ সেগুলাকে আউটপুট হিসেবে দেখাবে না। বাকিদের কে আউটপুট হিসেবে দেখাবে। দেখো করতে পারো কিনা। */

var bookPrice = [122, 88, 93, 55, 67, 230, 34, 740, 55, 900, 55];

for (var i = 0; i < bookPrice.length; i++) {
    var maxPrice = bookPrice[i];
    if (maxPrice > 200) {
        continue;
    }
    console.log(maxPrice);
}

// program ta evabe var charao lekha jay
for (var i = 0; i < bookPrice.length; i++) {
    if (bookPrice[i] > 200) {
        continue;
    }
    console.log(bookPrice[i]);
}