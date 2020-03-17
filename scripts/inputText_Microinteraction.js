function handleLoad() {

    const inputs = document.querySelectorAll('.textInput');

    inputs.forEach(input => {
        input.addEventListener('focus', (event) => {
            event.target.parentElement.classList.add('textInput--focused');

            let label = event.target.parentElement.querySelector('label');
            label.classList.remove('label--none');
            label.classList.add('label--active');
        });

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
}

window.addEventListener('load', handleLoad);