let txt = document.querySelector('.joke');
let button = document.querySelector('.btn');

button.addEventListener('click', getfunction);

async function getfunction() {
    const fetchJoke = await fetch(
        ' https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single',
        {
            headers: {
                Accept: 'application/json',
            },
        }
    );
    const jokeObj = await fetchJoke.json();
    console.log(jokeObj.joke);
    txt.innerText = jokeObj.joke;
}
