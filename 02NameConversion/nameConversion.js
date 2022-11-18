// console.log('Hello world');

const input = document.querySelector('#text');
const convert = document.querySelector('#convert-btn');

const camelCaseElement = document.querySelector('#camel-case');
const pascalCaseElement = document.querySelector('#pascal-case');
const snakeCaseElement = document.querySelector('#snake-case');
const screamingSnakeCaseElement = document.querySelector('#screaming-snake-case');
const kebabCaseElement = document.querySelector('#kebab-case');
const screamingKebabCaseElement = document.querySelector('#screaming-kebab-case');

//Camle Case

const makeCamelCase = (text) => {
    // console.log(text);
    const wordArray = text.split(' ');
    // console.log(wordArray);
    const array = wordArray.map((word, i) => {
        if (i == 0) {
            return (word = word.toLowerCase());
        } else {
            firstLetter = word.slice(0, 1);
            otherLetters = word.slice(1);
            return firstLetter.toUpperCase() + otherLetters;
        }
    });
    // console.log(array.join(''));
    return array.join('');
};

// Pascal case

const makePascalCase = (text) => {
    const wordArray = text.split(' ');
    const array = wordArray.map((word) => {
        // console.log(word);
        firstLetter = word.slice(0, 1);
        otherLetters = word.slice(1);
        return firstLetter.toUpperCase() + otherLetters;
    });
    return array.join('');
};

// Snake case

const makeSnakeCase = (text) => {
    const wordArray = text.split(' ');
    return wordArray.join('_');
};

// Screaming Snake case

const makeScreamingSnakeCase = (text) => {
    const wordArray = text.split(' ');
    return wordArray.join('_').toUpperCase();
}
// Kebab case

const makeKebabCase = (text) => {
    const wordArray = text.split(' ');
    return wordArray.join('-');
};

// Screaming Kebab case

const makeScreamingKebabCase = (text) => {
    const wordArray = text.split(' ');
    return wordArray.join('-').toUpperCase();
}

input.addEventListener('input', (e) => {
    let text = e.target.value;
    //   Camel Case
    const camelCase = makeCamelCase(text);
    camelCaseElement.innerText = camelCase;

    // Pascal case
    const pascalCase = makePascalCase(text);
    pascalCaseElement.innerText = pascalCase;

    // Snake case
    const snakeCase = makeSnakeCase(text);
    snakeCaseElement.innerText = snakeCase;

    // Screaming Snake case
    const screamingSnakeCase = makeScreamingSnakeCase(text);
    screamingSnakeCaseElement.innerText = screamingSnakeCase;

    // Kebab case
    const kebabCase = makeKebabCase(text);
    kebabCaseElement.innerText = kebabCase;

    // Screaming Kebab case
    const screamingKebabCase = makeScreamingKebabCase(text);
    screamingKebabCaseElement.innerText = screamingKebabCase;
});
