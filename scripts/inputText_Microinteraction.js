/*
    This script manages the microinteraction of the label on the text inputs by adding or removing
    the "textInput--focused" class on the input container and adding/removing the "label--active" 
    class from the input's label
 */

window.addEventListener('load', () => {

    const inputs = document.querySelectorAll('.textInput');

    inputs.forEach(input => {

        
        // the following fragment fix the autocomplete problem, starts manually the feedback event when the inputs is not empty
        if(input.value !== ""){
            input.parentElement.classList.add('textInput--focused');
            let label = input.parentElement.querySelector('label');
            if(label!=null){
                label.classList.remove('label--none');
                label.classList.add('label--active');
            }
        }else{
            let label = input.parentElement.querySelector('label');
            if(!input.value && label!=null) {
                label.classList.remove('label--active');
                input.parentElement.classList.remove('textInput--focused');
            }
        }


        // Activates the microinteraction when the input is focused
        input.addEventListener('focus', (event) => {
            event.target.parentElement.classList.add('textInput--focused');

            let label = event.target.parentElement.querySelector('label');
            if(label!=null){
                label.classList.remove('label--none');
                label.classList.add('label--active');
            }
        });

        // Desactivates the microinteraction when the input loses focus, ONLY if the input is still empty
        input.addEventListener('blur', (event) => {

            let label = event.target.parentElement.querySelector('label');

            if(!input.value) {
                label.classList.remove('label--active');
                event.target.parentElement.classList.remove('textInput--focused');
            }
        });
    });
});