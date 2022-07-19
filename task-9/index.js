const btnChangeColor = document.querySelector('.change-color');
const body = document.querySelector('body');
const spanColor = document.querySelector('.color');


function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
}

const onChangeColor = (evt) => {
    body.style.backgroundColor = getRandomHexColor();
    spanColor.textContent = getRandomHexColor();
}
btnChangeColor.addEventListener('click', onChangeColor);
