// normal rules, by default fetch method is called GET
function fetchData() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json()) // promise-1=convert data to json
        .then(data => console.log(data)) // promise-2=get converted data
}


// add button to fetch data
function displayUser() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json()) // promise-1=convert data to json
        .then(data => users(data)) // promise-2=get converted data
}

function users(data) {
    for (const user of data) {
        console.log(user);
    }
}


// add button to fetch every single user data on html DOM
function singleUser(data) {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json()) // promise-1=convert data to json
        .then(data => userName(data)) // promise-2=get converted data
}

function userName(data) {
    const userList = document.getElementById('users-list');
    for (const user of data) {
        const li = document.createElement('li');
        li.innerHTML = `
        <h3>User ID: ${user.id}</h3>
        <h4>User Name: ${user.name}</h4>
        `
        userList.appendChild(li);
        li.classList.add('bg-blue');
    }
}


console.log(chulbul());
var chulbul = () => 2 + 2;