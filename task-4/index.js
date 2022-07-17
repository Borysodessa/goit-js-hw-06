
const counterValue = document.querySelector('#value');
const buttons = document.querySelectorAll('button');

const decrement = () => {
    counterValue.textContent = String(Number(counterValue.textContent) - 1);
};
const increment = () => {
    counterValue.textContent = String(Number(counterValue.textContent) + 1);
}

buttons[0].addEventListener('click', decrement);
buttons[1].addEventListener('click', increment);