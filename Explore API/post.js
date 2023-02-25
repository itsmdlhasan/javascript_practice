function loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => displayPosts(data));
}

function displayPosts(posts) {
    const postContainer = document.getElementById('posts-container');
    for (const post of posts) {
        const divPost = document.createElement('div');
        divPost.classList.add('bgBlue');
        divPost.innerHTML = `
        <h4>User-${post.id}</h4>
        <h5>Post: ${post.title}</h5>
        <p>Post Description: ${post.body}</p>
        `
        postContainer.appendChild(divPost);
    }
}
loadPosts();

