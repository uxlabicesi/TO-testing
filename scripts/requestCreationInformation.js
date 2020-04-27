/**
     * 
     * @param { } information 
     * 
     *To fill the request creation form, the fillRequestCreation function must be utilized from /scripts/requestCreationInformation.js.
        The function receives an Object with the following structure:
        {
            jobName: **String** with the job's name,
            jobLevel: **String** with the VALUE of the option previously selected by the user on the joblevel select,
            jobHiring: **String** with the VALUE of the option previously selected by the user on the jobhiring select,
            workingday: **String** with the VALUE of the option previously selected by the user on the workingday select,
            wage: **Number** with the number the user inputed for the job's wage,
            cities: **Object Array** with each element following this structure:
                {
                    city: **String** with the VALUE of the option selected by the user on the city select,
                    amount: **Number** with the amount inputed by the user on the amount number input related with the city select,
                }
            functions: **String Array** with the functions the user wrote previously,
            academicLevel: **String** with the VALUE of the option the user selected on the academicLevel select,
            profession: **String** with the profession the user asked for in the particular request,
            knowledge: **String Array** with the VALUE of all the options the user selected in the knowledge select,
            observations: **String** with the observations the user made for this request,
            skills: **String Array** with the skills the user requested previously,
     */

// empty function will be updated after window load.
let fillRequestCreation = (info) => {};

window.addEventListener('load', () => {
    
    fillRequestCreation = (info) => {
        const jobName = document.getElementById('form_position');
        const jobNameLabel = document.querySelector('.label--jobName');
        const wage = document.getElementById('form_wage');
        const wageLabel = document.querySelector('.label--wage');
        const profession = document.getElementById('form_profession');
        const professionLabel = document.querySelector('.label--profession');
        const observations = document.querySelector('.textInput--area');
        const observationsLabel = document.querySelector('.label--observations');

        info.skills.forEach((e, index) => {
            if(index > 2) {
                createSkill();
                const input = document.getElementById('form_skill' + index);
                const inputContainer = input.closest('div');

                inputContainer.classList.add('textInput--focused');
                inputContainer.querySelector('label').classList.add('label--active');
                input.value = e;
            } else {
                const input = document.getElementById('form_skill' + index);
                const inputContainer = input.closest('div');

                inputContainer.classList.add('textInput--focused');
                inputContainer.querySelector('label').classList.add('label--active');
                input.value = e;
            }
        });

        observations.value = info.observations;
        observationsLabel.classList.add('label--active');
        observationsLabel.closest('div').classList.add('textInput--focused');

        $('.select2__selector--knowledge').val(info.knowledge);
        $('.select2__selector--knowledge').trigger('change');
        document.querySelector('.select__label--knowledge').classList.remove(
            'select__label--register');
        document.querySelector('.select__label--knowledge').classList.add('select__label--focused', 'select__label--focusedreqCreation');

        profession.value = info.profession;
        professionLabel.classList.add('label--active');
        professionLabel.closest('div').classList.add('textInput--focused');

        $('.select2__selector--academicLevel').val(info.academicLevel);
        $('.select2__selector--academicLevel').trigger('change');
        document.querySelector('.select__label--academicLevel').classList.remove(
            'select__label--register');
        document.querySelector('.select__label--academicLevel').classList.add('select__label--focused', 'select__label--focusedreqCreation');

        info.functions.forEach((e, index) => {
            if(index > 2) {
                createFunction();
                const input = document.getElementById('form_function' + index);
                const inputContainer = input.closest('div');

                inputContainer.classList.add('textInput--focused');
                inputContainer.querySelector('label').classList.add('label--active');
                input.value = e;
            } else {
                const input = document.getElementById('form_function' + index);
                const inputContainer = input.closest('div');

                inputContainer.classList.add('textInput--focused');
                inputContainer.querySelector('label').classList.add('label--active');
                input.value = e;
            }
        });

        info.cities.forEach((e, index) => {
            if(index > 0) {
                createCitySelect();
                $('.select2__selector--reqCity' + (index - 1)).val(e.city);
                $('.select2__selector--reqCity' + (index - 1)).trigger('change');
                document.querySelector('.select__label--reqCity' + (index - 1)).classList.remove(
                    'select__label--register');
                document.querySelector('.select__label--reqCity' + (index - 1)).classList.add('select__label--focused', 'select__label--focusedreqCreation');
            
                document.querySelector('.textInput--reqCity' + (index - 1)).value = e.amount;
            } else {
                $('.select2__selector--reqCity').val(e.city);
                $('.select2__selector--reqCity').trigger('change');
                document.querySelector('.select__label--reqCity').classList.remove(
                    'select__label--register');
                document.querySelector('.select__label--reqCity').classList.add('select__label--focused', 'select__label--focusedreqCreation');
                
                document.querySelector('.textInput--reqCity').value = e.amount;
            }
        });

        wage.value = info.wage;
        wageLabel.classList.add('label--active');
        wageLabel.closest('div').classList.add('textInput--focused');

        $('.select2__selector--level').val(info.jobLevel);
        $('.select2__selector--level').trigger('change');
        document.querySelector('.select__label--level').classList.remove(
            'select__label--register');
        document.querySelector('.select__label--level').classList.add('select__label--focused', 'select__label--focusedreqCreation');

        $('.select2__selector--hiring').val(info.jobHiring);
        $('.select2__selector--hiring').trigger('change');
        document.querySelector('.select__label--hiring').classList.remove(
            'select__label--register');
        document.querySelector('.select__label--hiring').classList.add('select__label--focused', 'select__label--focusedreqCreation');

        $('.select2__selector--workingday').val(info.workingday);
        $('.select2__selector--workingday').trigger('change');
        document.querySelector('.select__label--workingday').classList.remove(
            'select__label--register');
        document.querySelector('.select__label--workingday').classList.add('select__label--focused', 'select__label--focusedreqCreation');

        jobName.value = info.jobName;
        jobNameLabel.classList.add('label--active');
        jobNameLabel.closest('div').classList.add('textInput--focused');
    };
});