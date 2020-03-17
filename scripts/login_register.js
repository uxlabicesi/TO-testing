window.addEventListener('load', () => {
    const registerBtn = document.querySelector('.register__button');
    const textInputs = document.querySelectorAll('.textInput__container');
    const selectList = document.querySelectorAll('.select__value');
    const checkbox = document.querySelector('.checkboxInput');
    let isValid = true;

    document.addEventListener('click', checkValid);

    textInputs.forEach((textInput) => {
        textInput.addEventListener('change', checkValid);
    });

    checkbox.addEventListener('change', checkValid);

    function checkValid(event) {
        console.log('Validate');

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
});