let createSkill = (options) => {};

window.addEventListener('load', () => {
    

    /*deleteFunctions.forEach((elem) =>{
        elem.addEventListener('click', (event) =>{
            skillCount--;
            event.target.parentElement.remove();
            functionInputs = document.querySelectorAll('.reqCreation__content--function .textInput');
            updateIds();
        });
    });*/

    createSkill = (options) => {
        let selectList = document.querySelectorAll('.select2__selector--skill');

        if(selectList.length < 5) {
            const skill = document.createElement('div');
            const skillsContainer = document.getElementById('reqFormFourthState');
            const deleteBtn = document.createElement('button');
            const selectContainer = document.createElement('div');
            const selectadd = document.createElement('div');
            const label = document.createElement('label');
            const select = document.createElement('select');
    
            skillsContainer.appendChild(skill);
            skill.classList.add('reqCreation__functionsContainer', 'reqCreation__functionsContainer--skill');
            skill.appendChild(selectContainer)
            skill.appendChild(deleteBtn);
            deleteBtn.classList.add('reqCreation__functionsContainerBtnDelete');
            selectContainer.classList.add('elect__container', 'select__container--reqCreation2col');
            selectContainer.appendChild(selectadd);
            selectadd.classList.add('selectadd', 'selectadd--reqCreation', 'form-group');
            selectadd.appendChild(label);
            selectadd.appendChild(select);
            label.classList.add('select__label', 'select__label--register', 'select__label--skill', 'label--skill');
            label.innerHTML = 'COMPETENCIA';
            select.classList.add('select2__selector--skill');
            selectadd.setAttribute('name', 'skill');
    
            const emptyOption = document.createElement('option');
            select.appendChild(emptyOption);
            options.forEach((e) => {
                const option = document.createElement('option');
                option.setAttribute('value', e.value);
                option.innerHTML = e.text;
                select.appendChild(option);
            });
    
            function updateIds(selectList){
                selectList.forEach((elem,index)=>{
                    elem.id = 'form_skill' + index;
                    elem.closest('div').querySelector('label').id = 'labelSkill' + index;
                    $('#form_skill'+index).select2({
                        //tags: true,
                        placeholder: "COMPETENCIA",
                        theme: "talentos",
                        width: '100%', // need to override the changed default
                        containerCss: {
                            "min-height": "55px" // for multiples tags support responsive
                        },
                    });
                        //debug: true,  // used for verbose console
    
                    $('#form_skill'+index).on('select2:open', function (e) {
                        document.querySelector('#labelSkill'+index).classList.remove(
                            'select__label--register');
                        document.querySelector('#labelSkill'+index).classList.add(
                            'select__label--focused');
                    });
                
                    $('#form_skill'+index).on('select2:close', function (e) {
                        let value = $('#form_skill'+index).select2('data')[0].id;
                        if(value === ''){
                            document.querySelector('#labelSkill'+index).classList.add('select__label--register');
                            document.querySelector('#labelSkill'+index).classList.remove(
                            'select__label--focused');
                        }
                    });
    
                });
             }
            
    
            selectList = document.querySelectorAll('.select2__selector--skill');
            if(selectList.length == 5) {
                const addSkill = document.querySelector('.reqCreation__content--skills .btn--blue');
                addSkill.setAttribute('disabled','disabled');
                addSkill.classList.add('btn--inactive');
            }
            updateIds(selectList);
    
            deleteBtn.addEventListener('click', () => {
                selectList = document.querySelectorAll('.select2__selector--skill');
                if(selectList.length > 3) {
                    event.target.parentElement.remove();
                    selectList = document.querySelectorAll('.select2__selector--skill');
                    updateIds(selectList);
                }
                const addSkill = document.querySelector('.reqCreation__content--skills .btn--blue');
                addSkill.removeAttribute('disabled');
                addSkill.classList.remove('btn--inactive');
            });
        }
        
    };

    

});