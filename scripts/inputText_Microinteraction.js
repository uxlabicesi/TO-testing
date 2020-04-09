/*
    This script manages the microinteraction of the label on the text inputs by adding or removing
    the "textInput--focused" class on the input container and adding/removing the "label--active" 
    class from the input's label
 */

window.addEventListener('load', () => {

    const inputs = document.querySelectorAll('.textInput');

    inputs.forEach(input => {

        // Activates the microinteraction when the input is focused
        input.addEventListener('focus', (event) => {
            event.target.parentElement.classList.add('textInput--focused');

            let label = event.target.parentElement.querySelector('label');
            label.classList.remove('label--none');
            label.classList.add('label--active');
        });

        // Deactivates the microinteraction when the input loses focus, ONLY if the input is still empty
        input.addEventListener('blur', (event) => {
            event.target.parentElement.classList.remove('textInput--focused');

            let label = event.target.parentElement.querySelector('label');
            label.classList.remove('label--active');


            if(input.value) {
                label.classList.add('label--active');
                event.target.parentElement.classList.add('textInput--focused');
            }
        });
    });
});