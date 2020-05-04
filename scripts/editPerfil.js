
window.addEventListener('load', () => {

    /*
        Checks if all inputs on the register form have value, and if the terms and conditions checkbox
        has been checked, when these conditions are met, adds the class "btn--active" and removes
        the class "btn--inactive" from the register button
     */
    const registerBtn = document.querySelector('.register__button');
    const textInputs = document.querySelectorAll('.textInput__container');
    const selectList = document.querySelectorAll('.select__value');
    const checkbox = document.querySelector('.checkboxInput');
    let isValid = true;
    let showPass = document.querySelector('.login__passShow');
    let showPassConfirmation = document.querySelector('.login__passShowConfirmation');
    const mq = window.matchMedia( "(max-width: 576px)" );

    showPass.addEventListener('click', () =>{
        if (mq.matches) {
            let pass = document.querySelector('.password');
            showPass.setAttribute("src", "./resources/showPass.svg");
            if(pass.type == "password"){
                pass.type = "text";
            }else{
                showPass.setAttribute("src", "./resources/notShowPass.svg");
                pass.type = "password";
            }
        }
    });

    showPassConfirmation.addEventListener('click', () =>{
        if (mq.matches) {
            let pass = document.querySelector('.passwordConfirmation');
            showPassConfirmation.setAttribute("src", "./resources/showPass.svg");
            if(pass.type == "password"){
                pass.type = "text";
            }else{
                showPassConfirmation.setAttribute("src", "./resources/notShowPass.svg");
                pass.type = "password";
            }
        }
    });

    showPass.addEventListener('mouseenter', () =>{
        let pass = document.querySelector('.password');
        showPass.setAttribute("src", "./resources/showPass.svg");
        if(pass.type == "password"){
            pass.type = "text";
        }
    });

    showPassConfirmation.addEventListener('mouseenter', () =>{
        let passConfirmation = document.querySelector('.passwordConfirmation');
        showPassConfirmation.setAttribute("src", "./resources/showPass.svg");
        if(passConfirmation.type == "password"){
            passConfirmation.type = "text";
        }
    });

    showPass.addEventListener('mouseleave', () =>{
        let pass = document.querySelector('.password');
        showPass.setAttribute("src", "./resources/notShowPass.svg");
        if(pass.type == "text"){
            pass.type = "password";
        }
    });

    showPassConfirmation.addEventListener('mouseleave', () =>{
        let passConfirmation = document.querySelector('.passwordConfirmation');
        showPassConfirmation.setAttribute("src", "./resources/notShowPass.svg");
        if(passConfirmation.type == "text"){
            passConfirmation.type = "password";
        }
    });

    document.addEventListener('click', checkValid);

    textInputs.forEach((textInput) => {
        textInput.addEventListener('change', checkValid);
        textInput.addEventListener('keyup', checkValid);// Added for NC8146
    });


    function checkValid(event) {

        textInputs.forEach((textInput) => {
            if(!(isValid && textInput.classList.contains('has-success'))) {
                isValid = false;
            }
        });

        selectList.forEach((select) => {
            if(!(isValid && select.value)) {
                isValid = false;
            }
        });      

        isValid = true;
    }

});