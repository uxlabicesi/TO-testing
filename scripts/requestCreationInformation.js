/**
     * 
     * @param { } information 
     * 
     *To fill the request creation form, the fillRequestCreation function must be utilized from /scripts/requestCreationInformation.js.
        The function receives an Object with the following structure:
        {
            jobName: **String** with the job's name,
            responsability: **String** with the VALUE of the option previously selected by the user on the responsability select,
            decitions: **String** with the VALUE of the option previously selected by the user on the decitions select,
            incharge: **String** with the VALUE of the option previously selected by the user on the incharge select,
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
            profession: **String Array** with the profession the user asked for in the particular request,
            knowledge: **String** with the VALUE of all the options the user selected in the knowledge select,
            observations: **String** with the observations the user made for this request,
            skills: **String Array** with the value of the option for each skill selected by the user,
            skillOptions: **Object Array** with all the options that each skill select has, only needs to be included when
            the user selected more than 3 skills, but won't cause problem if it's included in that case too. The structure each object
            must follow is this:
            {
                value: With the value that the option will have,
                text: **String** with the text that will be displayed on screen
            },
            cityList: **Object Array** with the options for each city select. The structure of each object must be like the following:
            {
                value: With the value that the option will have,
                text: **String** with the text that will be displayed on screen
            }
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


        const skillContainers = document.querySelectorAll('.reqCreation__functionsContainer--skill');
        // for remove all skills before fill
        skillContainers.forEach((e ) => {
            e.remove();
        });

        info.skills.forEach((e, index) => {
            //if(index > 2) {
                createSkill(info.skillOptions);
            //}

            $('#form_skill'+index).val(e);
            $('#form_skill'+index).trigger('change');
            document.querySelector('#labelSkill'+index).classList.remove(
                'select__label--register');
            document.querySelector('#labelSkill'+index).classList.add('select__label--focused', 'select__label--focusedreqCreation');
        });
        $('.select2__selector--skill').on('change', avoidSkillRepetition);

        observations.value = info.observations;
        observationsLabel.classList.add('label--active');
        observationsLabel.closest('div').classList.add('textInput--focused');

        $('.select2__selector--knowledge').val(info.knowledge);
        $('.select2__selector--knowledge').trigger('change');
        document.querySelector('.select__label--knowledge').classList.remove(
            'select__label--register');
        document.querySelector('.select__label--knowledge').classList.add('select__label--focused', 'select__label--focusedreqCreation');

        // for update academicLevel With Option
        $('.select2__selector--academicLevel').val(info.academicLevel);
        $('.select2__selector--academicLevel').trigger('change');
        document.querySelector('.select__label--academicLevel').classList.remove(
            'select__label--register');
        document.querySelector('.select__label--academicLevel').classList.add('select__label--focused', 'select__label--focusedreqCreation');
        
        // for update profession With Option
        $('.select2__selector--profession').val(info.profession);
        $('.select2__selector--profession').trigger('change');
        document.querySelector('.select__label--profession').classList.remove(
            'select__label--register');
        document.querySelector('.select__label--profession').classList.add('select__label--focused', 'select__label--focusedreqCreation');

        // reset functions before rebuild
        const functionContainers = document.querySelectorAll('.reqCreation__functionsContainer--function');
        functionContainers.forEach((e ) => {
            e.remove();
        });

        //createFunction();

        info.functions.forEach((e, index) => {
           // if(index > 2) {
                createFunction();
                const input = document.getElementById('form_function' + index);
                const inputContainer = input.closest('div');
                inputContainer.classList.add('textInput--focused');
                inputContainer.querySelector('label').classList.add('label--active');
                input.value = e;
           /* } else {
                const input = document.getElementById('form_function' + index);
                const inputContainer = input.closest('div');
                inputContainer.classList.add('textInput--focused');
                inputContainer.querySelector('label').classList.add('label--active');
                input.value = e;
            }*/
        });

        info.cities.forEach((e, index) => {
            if(index > 0) {
                createCitySelect(info.cityList);
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

        $('.select2__selector--incharge').val(info.incharge);
        $('.select2__selector--incharge').trigger('change');
        document.querySelector('.select__label--incharge').classList.remove(
            'select__label--register');
        document.querySelector('.select__label--incharge').classList.add('select__label--focused', 'select__label--focusedreqCreation');

        $('.select2__selector--decition').val(info.decitions);
        $('.select2__selector--decition').trigger('change');
        document.querySelector('.select__label--decition').classList.remove(
            'select__label--register');
        document.querySelector('.select__label--decition').classList.add('select__label--focused', 'select__label--focusedreqCreation');

        $('.select2__selector--responsability').val(info.responsability);
        $('.select2__selector--responsability').trigger('change');
        document.querySelector('.select__label--responsability').classList.remove(
            'select__label--register');
        document.querySelector('.select__label--responsability').classList.add('select__label--focused', 'select__label--focusedreqCreation');

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

        const nextBtn = document.querySelector('.reqCreation__next');
        nextBtn.classList.remove('btn--inactive');
        nextBtn.removeAttribute('disabled');
    };
});