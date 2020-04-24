let fillRequestCreation = (info) => {};



window.addEventListener('load', () => {

    let info = {
        jobName: 'Diseñador Web',
        jobLevel: 'O1',
        jobHiring: 'O2',
        workingday: 'O1',
        wage: 1000000,
        cities: [
            {
                city: 'O5',
                amount: 4,
            },
            {
                city: 'O7',
                amount: 2,
            }
        ],
        functions: [
            'Diseño de interfaz de usuario',
            'Investigación de usuarios',
            'Evaluación de usabilidad',
            'Creación de conceptos',
        ]
    };
    

    fillRequestCreation = (info) => {
        const jobName = document.getElementById('form_position');
        const jobNameLabel = document.querySelector('.label--jobName');
        const wage = document.getElementById('form_wage');
        const wageLabel = document.querySelector('.label--wage');

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
            console.log(e);
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

    fillRequestCreation(info);
});