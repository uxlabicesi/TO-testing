function handleLoad() {
    let registerButton = document.querySelector('.btn--blue');

    registerButton.addEventListener('click', () => {
        window.location.href = './login_register.html';
    });
}

window.addEventListener('load', handleLoad);