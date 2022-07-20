const inputRangeEl = document.querySelector('#font-size-control');
const spanText = document.querySelector('#text');

const onChangeFontSize = () => {
    spanText.style.fontSize = inputRangeEl.value + 'px';
}

inputRangeEl.addEventListener('input', onChangeFontSize);