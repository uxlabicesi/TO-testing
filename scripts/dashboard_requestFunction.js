window.addEventListener('load', () => {
    const reqCreation = document.querySelector('.reqCreation__functions');
    const addFunction = document.querySelector('.btn--blue');

    addFunction.addEventListener('click',() => {
        const container = document.createElement('div');
        container.classList.add('reqCreation__functionsContainer');
        reqCreation.insertBefore(container, addFunction);

        const btnMove = document.createElement('button');
        btnMove.classList.add('reqCreation__functionsContainerBtnMove');
        container.appendChild(btnMove);

        const containerInput = document.createElement('div');
        containerInput.classList.add('textInput__container', 'textInput__container--reqCreation2col', 'textInput__container--reqFunctions');
        container.appendChild(containerInput);

        const inputLabel = document.createElement('label');
        inputLabel.classList.add('label', 'label--reqCreation');
        inputLabel.innerHTML = 'Función';
        inputLabel.htmlFor = 'function';
        containerInput.appendChild(inputLabel);

        const input = document.createElement('input');
        input.classList.add('textInput');
        input.id = 'function';
        containerInput.appendChild(input);

        const btnDelete = document.createElement('button');
        btnDelete.classList.add('reqCreation__functionsContainerBtnDelete');
        container.appendChild(btnDelete);

        btnDelete.addEventListener('click', () => {
            container.remove();
        });


        // Activates the microinteraction when the new input create for the add button is focused
        input.addEventListener('focus',(event)=>{
            event.target.parentElement.classList.add('textInput--focused');

            let label = event.target.parentElement.querySelector('label');
            label.classList.remove('label--none');
            label.classList.add('label--active');
        });

        // Desactivates the microinteraction when the new inputcreate for the add button loses focus, ONLY if the input is still empty
        input.addEventListener('blur', (event) => {

            let label = event.target.parentElement.querySelector('label');

            if(!input.value) {
                label.classList.remove('label--active');
                event.target.parentElement.classList.remove('textInput--focused');
            }
        });
    });

});