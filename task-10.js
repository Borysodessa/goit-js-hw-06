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

    }
    divBoxes.append(...divs);
}
btnCreate.addEventListener('click', onCreateDiv);

const destroyBoxes = (event) => {

    divBoxes.innerHTML = '';
   // event.currentTarget.reset();----------------??????????
}
btnDestroy.addEventListener('click', destroyBoxes);
