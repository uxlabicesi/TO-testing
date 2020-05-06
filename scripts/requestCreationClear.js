let clearRequestCreation = () => {};

window.addEventListener('load', () => {

    
    clearRequestCreation = () => {
        const nextBtn = document.querySelector('.reqCreation__next');
        nextBtn.classList.add('btn--inactive');
        nextBtn.setAttribute('disabled', true);

        const jobName = document.getElementById('form_position');
        const jobNameLabel = document.querySelector('.label--jobName');
        const wage = document.getElementById('form_wage');
        const wageLabel = document.querySelector('.label--wage');
        const observations = document.querySelector('.textInput--area');
        const observationsLabel = document.querySelector('.label--observations');
        const functionContainers = document.querySelectorAll('.reqCreation__functionsContainer--function');
        const skillContainers = document.querySelectorAll('.reqCreation__functionsContainer--skill');
        const cityRows = document.querySelectorAll('.reqCreation__row--city');

        cityRows.forEach((e, index) => {
            if(index > 0) {
                $('.select2__selector--reqCity'+(index - 1)).val(null);
                $('.select2__selector--reqCity'+(index - 1)).trigger('change');
                document.querySelector('.select__label--reqCity'+(index - 1)).classList.add(
                    'select__label--register');
                document.querySelector('.select__label--reqCity'+(index - 1)).classList.remove('select__label--focused', 'select__label--focusedreqCreation');
            } else {
                $('.select2__selector--reqCity').val(null);
                $('.select2__selector--reqCity').trigger('change');
                document.querySelector('.select__label--reqCity').classList.add(
                    'select__label--register');
                document.querySelector('.select__label--reqCity').classList.remove('select__label--focused', 'select__label--focusedreqCreation');
            }

            e.querySelector('input').value = 1;            
        });

        functionContainers.forEach((e) => {
            const input = e.querySelector('input');
            const label = e.querySelector('label');

            input.value = '';
            label.classList.remove('label--active');
            e.querySelector('.textInput__container').classList.remove('textInput--focused');
        });

        skillContainers.forEach((e, index) => {
            $('#form_skill'+index).val(null);
        $('#form_skill'+index).trigger('change');
        document.querySelector('#labelSkill'+index).classList.add(
            'select__label--register');
        document.querySelector('#labelSkill'+index).classList.remove('select__label--focused', 'select__label--focusedreqCreation');
        });

        jobName.value = '';
        jobNameLabel.classList.remove('label--active');
        jobNameLabel.closest('div').classList.remove('textInput--focused');

        wage.value = '';
        wageLabel.classList.remove('label--active');
        wageLabel.closest('div').classList.remove('textInput--focused');

        observations.value = '';
        observationsLabel.classList.remove('label--active');
        observationsLabel.closest('div').classList.remove('textInput--focused');

        $('.select2__selector--knowledge').val(null);
        $('.select2__selector--knowledge').trigger('change');
        document.querySelector('.select__label--knowledge').classList.add(
            'select__label--register');
        document.querySelector('.select__label--knowledge').classList.remove('select__label--focused', 'select__label--focusedreqCreation');
    
        $('.select2__selector--academicLevel').val(null);
        $('.select2__selector--academicLevel').trigger('change');
        document.querySelector('.select__label--academicLevel').classList.add(
            'select__label--register');
        document.querySelector('.select__label--academicLevel').classList.remove('select__label--focused', 'select__label--focusedreqCreation');
   
        $('.select2__selector--profession').val(null);
        $('.select2__selector--profession').trigger('change');
        document.querySelector('.select__label--profession').classList.add(
            'select__label--register');
        document.querySelector('.select__label--profession').classList.remove('select__label--focused', 'select__label--focusedreqCreation');
   
        $('.select2__selector--incharge').val(null);
        $('.select2__selector--incharge').trigger('change');
        document.querySelector('.select__label--incharge').classList.add(
            'select__label--register');
        document.querySelector('.select__label--incharge').classList.remove('select__label--focused', 'select__label--focusedreqCreation');
    
        $('.select2__selector--decition').val(null);
        $('.select2__selector--decition').trigger('change');
        document.querySelector('.select__label--decition').classList.add(
            'select__label--register');
        document.querySelector('.select__label--decition').classList.remove('select__label--focused', 'select__label--focusedreqCreation');
   
        $('.select2__selector--responsability').val(null);
        $('.select2__selector--responsability').trigger('change');
        document.querySelector('.select__label--responsability').classList.add(
            'select__label--register');
        document.querySelector('.select__label--responsability').classList.remove('select__label--focused', 'select__label--focusedreqCreation');
    
        $('.select2__selector--level').val(null);
        $('.select2__selector--level').trigger('change');
        document.querySelector('.select__label--level').classList.add(
            'select__label--register');
        document.querySelector('.select__label--level').classList.remove('select__label--focused', 'select__label--focusedreqCreation');
    
        $('.select2__selector--hiring').val(null);
        $('.select2__selector--hiring').trigger('change');
        document.querySelector('.select__label--hiring').classList.add(
            'select__label--register');
        document.querySelector('.select__label--hiring').classList.remove('select__label--focused', 'select__label--focusedreqCreation');
  
        $('.select2__selector--workingday').val(null);
        $('.select2__selector--workingday').trigger('change');
        document.querySelector('.select__label--workingday').classList.add(
            'select__label--register');
        document.querySelector('.select__label--workingday').classList.remove('select__label--focused', 'select__label--focusedreqCreation');
    };
});