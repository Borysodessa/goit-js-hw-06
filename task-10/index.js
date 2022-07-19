const inputNumber = document.querySelector('input');
const btnCreate = document.querySelector('button[data-create]');
const btnDestroy = document.querySelector('button[data-destroy]');
const divBoxes = document.querySelector('#boxes');
let widthValue = 30;
const divs = [];


function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
}

const onCreateDiv = (evt) => {
    for (let i = 0; i < inputNumber.value; i += 1) {
        const div = document.createElement('div');
        div.style.width = `${widthValue + 'px'}`;
        div.style.height = `${widthValue + 'px'}`;
        div.style.backgroundColor = getRandomHexColor();
        widthValue += 10;
        divs.push(div);
        console.log(div);
    }
    divBoxes.append(...divs);
}
btnCreate.addEventListener('click', onCreateDiv);

const destroyBoxes = () => {
    console.log(456)
    divBoxes.innerHTML = '';
}
btnDestroy.addEventListener('click', destroyBoxes);
