
const inputEl = document.querySelector('#name-input');
const mameOutputEl = document.querySelector('#name-output');
const changeNameOutput = () => {
    if(inputEl.value === ''){
        return mameOutputEl.textContent = 'Anonymous';
    }return mameOutputEl.textContent = inputEl.value;
}
inputEl.addEventListener('input', changeNameOutput);
