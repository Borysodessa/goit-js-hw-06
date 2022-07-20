const loginFormEl = document.querySelector('.login-form');

const handleSubmit = (event) => {
    event.preventDefault();
    const {
        elements: {email, password}
    } = event.currentTarget;
    if (email.value === '' || password === '') {
        return alert('Все поля должны быть заполнены');
    }
    console.log(`{email: ${email.value}, password: ${password.value}}`);
    event.currentTarget.reset()
}

loginFormEl.addEventListener('submit', handleSubmit);