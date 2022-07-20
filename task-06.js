const validationInputEl = document.querySelector('#validation-input');
const changeColor = () => {
    if (validationInputEl.value.length === Number(validationInputEl.dataset.length)) {
        validationInputEl.classList.remove('invalid');
        return validationInputEl.classList.add('valid');
    }
    validationInputEl.classList.remove('valid');
    return validationInputEl.classList.add('invalid');
}
validationInputEl.addEventListener('blur', changeColor);