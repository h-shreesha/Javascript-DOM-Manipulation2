let count = 0;

let value = document.querySelector('.demo');
// console.log(value.innerHTML);

let btns = document.querySelectorAll('.btn');
// console.log(btns);

btns.forEach(function (items) {
    items.addEventListener('click', function (val) {
        console.log(val);
        let style = val.currentTarget.classList;
        if (style.contains('increase')) {
            count++;
        } else if (style.contains('decrease')) {
            count--;
        } else {
            count = 0;
        }
        if (count > 0){
            value.style.color = "red"
        } value.textContent = count;
    });
});
