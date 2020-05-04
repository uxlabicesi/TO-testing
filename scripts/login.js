/* 
    Redirects the user to the register page when the register button in the login page is pressed
 */

window.addEventListener('load', () => {
    let registerButton = document.querySelector('.btn--blue');
    let showPass = document.querySelector('.login__passShow');

    showPass.addEventListener('mouseenter', () =>{
        let pass = document.querySelector('.login__pass');
        showPass.setAttribute("src", "./resources/showPass.svg");
        if(pass.type == "password"){
            pass.type = "text";
        }
    });

    showPass.addEventListener('mouseleave', () =>{
        let pass = document.querySelector('.login__pass');
        showPass.setAttribute("src", "./resources/notShowPass.svg");
        if(pass.type == "text"){
            pass.type = "password";
        }
    });

    registerButton.addEventListener('click', () => {
        window.location.href = './login_register.html';
    });

    let splashPage = document.querySelector('.splashPage');
    let splashPageBtn = document.querySelector('.splashPage__btn');

    splashPageBtn.addEventListener('click', () => {
        splashPage.style.display = 'none';
    });
});