function loadMyData() {
    const url = 'https://jsonplaceholder.typicode.com/users';
    fetch(url)
        .then(response => response.json())
        .then(dataDekhaw => displayUsers(dataDekhaw))
}

function displayUsers(dataDekhaw) {
    console.log(dataDekhaw);
}