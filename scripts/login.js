/* 
    Redirects the user to the register page when the register button in the login page is pressed
 */

  /***
  * This function was created for add parameters for images, and 1 para,meter (third) 
  * for link to register
  * 
  */

let startlogin = (srcShowPassIcon = "./resources/showPass.svg", srcNoShowPassIcon = "./resources/notShowPass.svg", linkToRegister='./login_register.html') => {}

window.addEventListener('load', () => {

    startlogin = (srcShowPassIcon = "./resources/showPass.svg", srcNoShowPassIcon = "./resources/notShowPass.svg", linkToRegister='./login_register.html') => {
        let registerButton = document.querySelector('.btn--blue');
        let showPass = document.querySelector('.login__passShow');

        showPass.addEventListener('mouseenter', () =>{
            let pass = document.querySelector('.login__pass');
            showPass.setAttribute("src", srcShowPassIcon);
            if(pass.type == "password"){
                pass.type = "text";
            }
        });

        showPass.addEventListener('mouseleave', () =>{
            setTimeout(() => {
                let pass = document.querySelector('.login__pass');
                showPass.setAttribute("src", srcNoShowPassIcon);
                if(pass.type == "text"){
                    pass.type = "password";
                }
            }, 5000);
        });

        registerButton.addEventListener('click', () => {
            window.location.href = linkToRegister;
        });

        let splashPage = document.querySelector('.splashPage');
        let splashPageBtn = document.querySelector('.splashPage__btn');

        splashPageBtn.addEventListener('click', () => {
            splashPage.style.display = 'none';
        });
    }
});