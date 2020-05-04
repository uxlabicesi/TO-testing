// TODO update 
/** 
 * the external function (updateDataForPopUp) can be called for updating the
 * information data for popUp making, call it after the function createPopUp,
 * if you want to create pop up directly and not based on updating values, 
 * refers to createPopup.js using this option (you maybe will need to rewrite
 * the trigger event) * 
 * First parameter require the following structure:
 * 
 * * information object contains the following structure JSON:
    * {
    * title: text for main title
    * text: description text
    * btn: text for button
    * goto: text url for button
    * }
 * 
 * Second parameter is optional modify the root class for append the popUp.
 */


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

    checkbox.addEventListener('change', checkValid);


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

        if(!(isValid && checkbox.checked)) {
            isValid = false;
        }

        if(isValid) {
            registerBtn.classList.remove('btn--inactive');
        } else {
            registerBtn.classList.add('btn--inactive');
        }       

        isValid = true;
    }

    /*
        Opens and closes the terms and conditions modal by changing its style
     */
    var modal = document.querySelector('.register__modal');
    var terms = document.querySelector('.register__terms');
    var close = document.querySelector('.register__modalContentClose');
    var body = document.querySelector('.register__body');


    terms.addEventListener('click',function(){
        modal.style.display= "block";
        body.style.position = "static";
		body.style.height = "100%";
		body.style.overflow = "hidden";
    });

    close.addEventListener('click',function(){
        modal.style.display = "none";
        body.style.position = "inherit";
        body.style.height = "auto";
        body.style.overflow = "visible";
    });
    
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";

            body.style.position = "inherit";
            body.style.height = "auto";
            body.style.overflow = "visible";
        }
    }

});