/* remove duplicates from an array */

const names = ['abul', 'chulbul', 'abul', 'kabul', 'habul', 'habul'];

function removeDuplicate(names) {
    const unique = [];
    for (let i = 0; i < names.length; i++) {
        const element = names[i];
        if (unique.includes(element) === false) {
            unique.push(element);
        }
    }
    return unique;
}

const result = removeDuplicate(names);
console.log(result);