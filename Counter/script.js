const incrementButton = document.querySelector('#increment-button');
const decrementButton = document.querySelector('#decrement-button');
const resetButton = document.querySelector('#reset-button');

let count = 0;

const countDisplay = document.querySelector('#count-value');

countDisplay.innerHTML = count;

incrementButton.addEventListener('click', () => {
    count++;
    countDisplay.innerHTML = count;
})

decrementButton.addEventListener('click', () => {
    if(count>0){
        count--;
    }
    countDisplay.innerHTML = count;
})

resetButton.addEventListener('click', () => {
    count = 0;
    countDisplay.innerHTML = count;
})