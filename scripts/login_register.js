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

    document.addEventListener('click', checkValid);

    textInputs.forEach((textInput) => {
        textInput.addEventListener('change', checkValid);
        textInput.addEventListener('keyup', checkValid);// Added for NC8146
    });

    checkbox.addEventListener('change', checkValid);

    registerBtn.addEventListener('click', ()=>{
        console.log('holis');
        checkValid();
        if(isValid) {
            createPopUp({
                title: "Registro Exitoso",
                text: "Ahora podemos entregarte el mejor talento para tu organización.",
                title: "¡Quiero encontrar el mejor talento!"
            });
        }
        
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