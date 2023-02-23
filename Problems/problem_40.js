/* find the cheapest phone from an array of phone objects */

const phones = [
    {name: 'samsung', price: 43000, color: 'silver'},
    {name: 'oneplus', price: 35000, color: 'black'},
    {name: 'oppo', price: 20000, color: 'green'},
];

function cheapestPhone(phones) {
    let cheapest = phones[0];
    for (let i = 0; i < phones.length; i++) {
        const element = phones[i];
        if (element.price < cheapest.price) {
            cheapest = element;
        }
    }
    return cheapest;
}

console.log(cheapestPhone(phones));