// console.log('Hello world');

const input = document.querySelector('#text');
const convert = document.querySelector('#convert-btn');

const camelCaseElement = document.querySelector('#camel-case');

const makeCamelCase = (text) => {
    console.log(text);
    const wordArray = text.split(' ');
    console.log(wordArray);
    const array = wordArray.map((word, i) => {
        if (i == 0) {
            return word = word.toLowerCase();
        }
        else{
            firstLetter = word.slice(0,1);
            otherLetters = word.slice(1);
            return firstLetter.toUpperCase() + otherLetters;
        }
    });
    console.log(array.join(''));
    return array.join('');
};

convert.addEventListener('click', (e) => {
    let text = e.target.value;
    //   Camel Case
    const camelCase = makeCamelCase(text);
    camelCaseElement.innerText = camelCase;
});
