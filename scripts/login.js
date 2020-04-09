/* 
    Redirects the user to the register page when the register button in the login page is pressed
 */

window.addEventListener('load', () => {
    let registerButton = document.querySelector('.btn--blue');

    registerButton.addEventListener('click', () => {
        window.location.href = './login_register.html';
    });
});