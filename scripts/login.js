/* 
    Redirects the user to the register page when the register button in the login page is pressed
 */

function handleLoad() {
    let registerButton = document.querySelector('.btn--blue');

    registerButton.addEventListener('click', () => {
        window.location.href = './login_register.html';
    });
}

window.addEventListener('load', handleLoad);