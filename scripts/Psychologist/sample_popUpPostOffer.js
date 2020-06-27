window.addEventListener('load', () => {

    let buttonFinishProcess = document.querySelector('.complete-request');
    let body = document.querySelector('body');
    let titleRequest = document.querySelector('.reqDetails__title');

    buttonFinishProcess.addEventListener('click',( ) => {
    
        let popUp = document.createElement('div');
        popUp.classList.add('popUpOffer');

        let popUpContent = document.createElement('div');
        popUpContent.classList.add('popUpOffer__content');
       
        popUp.classList.remove('popUpOffer--inactive');
    
        let section = document.createElement('div');
        section.classList.add('popUpOffer__contentSection')

        let sectionTitle = document.createElement('p');
        sectionTitle.classList.add('popUpOffer__contentSectionTitle');
        sectionTitle.innerText = 'Publicar oferta';
    
        let popUpContentClose = document.createElement('span');
        popUpContentClose.classList.add('popUpOffer__contentSectionClose','register__modalContentCloseX');
        popUpContentClose.innerText = 'x';
        popUpContentClose.style.cursor = "pointer";

        let infoTitle = document.createElement('div');
        infoTitle.classList.add('popUpOffer__contentInfo')

        let title = document.createElement('h2');
        title.classList.add('popUpOffer__contentInfoTitle');
        title.innerText = titleRequest.textContent;

        let subTitle = document.createElement('h3');
        subTitle.classList.add('popUpOffer__contentInfoSubTitle');
        subTitle.innerText = 'HOTEL SHERATON / Cali';

        let divider = document.createElement('div');
        divider.classList.add('popUpOffer__contentDivider');

        let form = document.createElement('form');
        form.classList.add('popUpOffer__contentForm','registerForm');

        let formRow = document.createElement('div');
        formRow.classList.add('popUpOffer__contentFormRow');

        let formRowSec = document.createElement('div');
        formRowSec.classList.add('popUpOffer__contentFormRow');

        let formRowThree = document.createElement('div');
        formRowThree.classList.add('popUpOffer__contentFormRow');

        let formRowFour = document.createElement('div');
        formRowFour.classList.add('popUpOffer__contentFormRow');

        let formRowFive = document.createElement('div');
        formRowFive.classList.add('popUpOffer__contentFormRow','popUpOffer__contentFormRow--five');

        let button = document.createElement('button');
        button.classList.add('btn','btn--medium');
        button.innerText = 'Publicar';

        // --------------------------------------------------------------------------------------------------
        createTextInput('Nombre del cargo',formRow,form,'positionName');
        createTextInput('Número de vacantes',formRow,form,'vacancy');
        createTextInput('Salario',formRow,form,'wage');
        createTextInput('Sector',formRowSec,form,'sector','textInput__container--serviceDetails2col');
        createTextInput('Ciudad',formRowSec,form,'city','textInput__container--serviceDetails2col');
        createTextInput('Estado de la oferta',formRowThree,form,'offer');
        createTextInput('Fecha de vigencia',formRowThree,form,'date');
        // createTextInput('Plataformas',formRowThree,form,'platforms');
        createSelectInput('Plataformas',formRowThree,form,'platforms',[
            {value: '01',text: 'Facebook'},
            {value: '02',text: 'Twitter'},
            {value: '03',text: 'LinkedIn'},
        ]);
        createTextArea('Descripción',formRowFour,form,'description');
        // --------------------------------------------------------------------------------------------------
      
        section.appendChild(sectionTitle);
        section.appendChild(popUpContentClose);

        infoTitle.appendChild(title);
        infoTitle.appendChild(subTitle);

        popUpContent.appendChild(section);
        popUpContent.appendChild(infoTitle);
        popUpContent.appendChild(divider);
        formRowFive.appendChild(button);
        popUpContent.appendChild(form);
        popUpContent.appendChild(formRowFive);
        popUp.appendChild(popUpContent);
        body.appendChild(popUp);

        body.classList.add('popUpOffer__noScroll');

        popUpContentClose.addEventListener('click', (ev) => {
            ev.preventDefault();
            closePopUp();
        });

        popUp.onclick = function (event) {
            if (event.target == popUp) {
                popUp.classList.add('popUpOffer--inactive');
                if(body.hasChildNodes()){
                    body.removeChild(popUp);
                    body.classList.remove('popUpOffer__noScroll');
                }
            }
        }

        function closePopUp() {
            popUp.classList.add('popUpOffer--inactive');
            if(body.hasChildNodes()){
                body.removeChild(popUp);
                body.classList.remove('popUpOffer__noScroll');
            }
        }

    });

    createTextInput = (labelName,container,root,id,classContainerInput,type) => {

        let textInputContainer = document.createElement('div');
        if(classContainerInput){
            textInputContainer.classList.add(classContainerInput);
        }
        textInputContainer.classList.add('textInput__container','form-group', 'textInput__container--serviceDetails');
    
        let label = document.createElement('label');
        label.classList.add('label','label--serviceDetails','label--reqCreation');
        label.innerText = labelName;
        label.htmlFor = id;

    
        let input = document.createElement('input');
        if(type){
            input.type = type;
        }
        input.classList.add('textInput');
        input.id = id;

        textInputContainer.appendChild(label);
        textInputContainer.appendChild(input);

        container.appendChild(textInputContainer);

        root.appendChild(container);
        

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
    };

    createSelectInput = (labelName,container,root,id,options) => {

        let textInputContainer = document.createElement('div');
        textInputContainer.classList.add('selectadd','form-group', 'selectadd--servDetails');

        let label = document.createElement('label');
        label.classList.add('select__label','select__label--visible','select__label--platforms', 'select__label--register');
        label.innerText = labelName;
        label.htmlFor = id;

        let select = document.createElement('select');
        select.classList.add('select2__selector--platforms');
        select.id = id;
        select.multiple = 'multiple';

        options.forEach(opt => {
            let option = document.createElement('option');
            option.value = opt.value;
            option.text = opt.text;
            select.appendChild(option);
        });

        
        textInputContainer.appendChild(label);
        textInputContainer.appendChild(select);

        container.appendChild(textInputContainer);

        root.appendChild(container);

        $('#platforms').ready(function() {
            $('#platforms').select2({
                tags: true,
                placeholder: "",
                theme: "talentos",
                width: '100%',
                containerCss: {
                    "height": "55px"
                },
                //debug: true,  // used for verbose console
            });

            $('#platforms').on('select2:open', function (e) {
                document.querySelector('.select__label--platforms').classList.remove(
                    'select__label--register');
                document.querySelector('.select__label--platforms').classList.add('select__label--focused');
            });
        
            $('.select__label--platforms').on('click', function (e) {
                $('#platforms').select2('open');
                document.querySelector('.select__label--platforms').classList.remove(
                    'select__label--register');
                document.querySelector('.select__label--platforms').classList.add('select__label--focused');
            });
        
            $('#platforms').on('select2:close', function (e) {
                //let value = $('#platforms').select2('data')[0].id;
                let value = $('#platforms').select2('data').length;
                if(value === 0){ // TODO : make same process for all multiple tags, if required
                    document.querySelector('.select__label--platforms').classList.add('select__label--register');
                document.querySelector('.select__label--platforms').classList.remove(
                    'select__label--focused');
                }
            });
        });
        
    };

    createTextArea = (labelName,container,root,id) =>{

        let textInputContainer = document.createElement('div');
        textInputContainer.classList.add('textInput__container','form-group', 'textInput__container--serviceDetailsTextArea');

        let input =  document.createElement('textarea');
        input.classList.add('textInput', 'textInput--area');
        input.id = id;
        input.addEventListener('input',()=>{
            auto_grow(input);
        })
        input.addEventListener('keydown',()=>{
            auto_grow(input);
        })
        input.addEventListener('change',()=>{
            auto_grow(input);
        })
        let label = document.createElement('label');
        label.classList.add('label','label--serviceDetails','label--reqCreation');
        label.innerText = labelName;
        label.htmlFor = id;

        textInputContainer.appendChild(label);
        textInputContainer.appendChild(input);

        container.appendChild(textInputContainer);

        root.appendChild(container);

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
    }

    

});

