/* calculate total cost of the products in a shopping cart */

const shoppingCart = [
    {productName: 'shoe', productPrice: 400, quantity: 2},
    {productName: 'belt', productPrice: 200, quantity: 8},
    {productName: 'shirt', productPrice: 900, quantity: 9},
    {productName: 'pant', productPrice: 1400, quantity: 6},
];

function priceCalculation(shoppingCart) {
    let sum = 0;
    for (let i = 0; i < shoppingCart.length; i++) {
        const element = shoppingCart[i];
        const cost = element.productPrice * element.quantity;
        sum += cost;
    }
    return sum;
}

const total = priceCalculation(shoppingCart);
console.log(total + 'taka');
console.log(total, 'taka');
console.log(total, 'taka', 'dam');
console.log(total, 'taka' + 'dam');