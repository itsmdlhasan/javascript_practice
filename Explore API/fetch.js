fetch('https://jsonplaceholder.typicode.com/todos/1') // this url is API
    .then(response => response.json()) // .json is not equal but close to JSON.parse
    .then(json => console.log(json))


const url = 'https://jsonplaceholder.typicode.com/todos/1';
fetch(url)
    .then(response => response.json())
    .then(json => console.log(json))

function loadData() {
    const url = 'https://jsonplaceholder.typicode.com/todos/1';
    fetch(url)
        .then(response => response.json())
        .then(json => alert(json))
}