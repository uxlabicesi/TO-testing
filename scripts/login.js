/* 
    Redirects the user to the register page when the register button in the login page is pressed
 */

window.addEventListener('load', () => {
    let registerButton = document.querySelector('.btn--blue');

    registerButton.addEventListener('click', () => {
        window.location.href = './login_register.html';
    });

    let splashPage = document.querySelector('.splashPage');
    let splashPageBtn = document.querySelector('.splashPage__btn');

    splashPageBtn.addEventListener('click', () => {
        splashPage.style.display = 'none';
    });
});