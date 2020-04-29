let createFunction = () => {};

window.addEventListener('load', () => {
    const form = document.querySelector('.reqCreation__content--function form');
    const addFunction = document.querySelector('.reqCreation__content--function .btn--blue');
    let functionCount = document.querySelectorAll('.reqCreation__content--function .textInput').length;
    let functionInputs = document.querySelectorAll('.reqCreation__content--function .textInput');
    const deleteFunctions = document.querySelectorAll('.reqCreation__functionsContainerBtnDelete');
    
    
    deleteFunctions.forEach((elem) =>{
        elem.addEventListener('click', (event) =>{
            functionCount--;
            event.target.parentElement.remove();
            functionInputs = document.querySelectorAll('.reqCreation__content--function .textInput');
            updateIds();
        });
    });

    function updateIds(){
        functionInputs.forEach((elem,index)=>{
            elem.id = 'form_function'+index;
        });
    }

    addFunction.addEventListener('click', createFunction);

    createFunction = () => {
        let functionCount = document.querySelectorAll('.reqCreation__content--function .textInput').length;

        const container = document.createElement('div');
        container.classList.add('reqCreation__functionsContainer');
        form.appendChild(container)

        const btnMove = document.createElement('button');
        btnMove.classList.add('reqCreation__functionsContainerBtnMove');
        container.appendChild(btnMove);

        const containerInput = document.createElement('div');
        containerInput.classList.add('textInput__container', 'textInput__container--reqCreation2col', 'textInput__container--reqFunctions');
        container.appendChild(containerInput);

        const inputLabel = document.createElement('label');
        inputLabel.classList.add('label', 'label--reqCreation');
        inputLabel.innerHTML = 'Función';
        inputLabel.htmlFor = 'form_function'+functionCount;
        containerInput.appendChild(inputLabel); 

        const input = document.createElement('input');
        input.classList.add('textInput');
        input.id = 'form_function'+functionCount;
        functionInputs = document.querySelectorAll('.reqCreation__content--function .textInput');
        containerInput.appendChild(input);

        functionCount++;

        const btnDelete = document.createElement('button');
        btnDelete.classList.add('reqCreation__functionsContainerBtnDelete');
        container.appendChild(btnDelete);

        btnDelete.addEventListener('click', () => {
            functionCount--;
            if(functionCount < 5) {
                addFunction.removeAttribute('disabled');
                addFunction.classList.remove('btn--inactive');
            }
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

        if(functionCount > 4){
            addFunction.setAttribute('disabled','disabled');
            addFunction.classList.add('btn--inactive');
        }
    }

});