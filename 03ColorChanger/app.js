const canvas = document.getElementById('canvas');
const button = document.getElementById('button');

// Generate Random No. Between 0 to 255
const randomNumberGrnrrator = () => {
    return Math.floor(Math.random() * 255);
};

button.addEventListener('click', () => {
    canvas.style.backgroundColor = `rgb(
        ${randomNumberGrnrrator()},
        ${randomNumberGrnrrator()},
        ${randomNumberGrnrrator()}
    )`;
});
