/* 
1. Show output from 1-50
2. If the number is divisible by 3 then show 'foo' there
3. If the number is divisible by 5 then show 'bar' there
4. If the number is divisible by both then show 'foobar' there
*/

for (let i = 1; i <= 50; i++) {
    if (i % 3 === 0 && i % 5 !== 0) {
        console.log('foo');
    }
    else if (i % 5 === 0 && i % 3 !== 0) {
        console.log('bar');
    }
    else if (i % 3 === 0 && i % 5 === 0) {
        console.log('foobar');
    }
    else {
        console.log(i);
    }
}