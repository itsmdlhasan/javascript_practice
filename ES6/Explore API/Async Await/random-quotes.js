// const kanyeQuote = () => {
//     const url = 'https://api.kanye.rest/';
//     fetch(url)
//         .then((response) => response.json())
//         .then((data) => randomQuote(data));
// }

// const randomQuote = data => {
//     document.getElementById('random-quote').innerText = data.quote;
// }




// // async await rules
// const kanyeQuote = async () => {
//     const url = 'https://api.kanye.rest/';
//     const res = await fetch(url);
//     const data = await res.json();
//     randomQuote(data);
// }

// const randomQuote = data => {
//     document.getElementById('random-quote').innerText = data.quote;
// }





// async await rules with ERROR HANDLING
const kanyeQuote = async () => {
    try {
        const url = 'https://api.kanyest/';
        const res = await fetch(url);
        const data = await res.json();
        randomQuote(data);
    }
    catch(error) {
        console.log(error);
    }
}

const randomQuote = data => {
    document.getElementById('random-quote').innerText = data.quote;
}