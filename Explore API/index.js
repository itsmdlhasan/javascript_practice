function favoriteUser() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data2 => displayUsers2(data2))
}


function favoriteUser2() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data3 => displayUsers3(data3))
}


function displayUsers2(data2) {
    for(const dat of data2) {
        console.log(dat.name);
    }
}


// function displayUsers3(data3) {
//     const ul = document.getElementById('user-list');
//     for(const everyUser of data3){
//         const li = document.createElement('li');
//         li.innerText = everyUser.name;
//         ul.appendChild(li);
//     }
// }


function displayUsers3(data3) {
    const ul = document.getElementById('user-list');
    for(const everyUser of data3){
        const li = document.createElement('li');
        li.innerHTML = `<p>ok ${everyUser.name}</p>`;
        ul.appendChild(li);
    }
}

function deletePost() {
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'DELETE',
    });
}
const stuInfo = JSON.stringify({ name: "James", roll: 3 }); 
console.log(stuInfo); 