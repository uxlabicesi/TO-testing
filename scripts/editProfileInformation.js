let editProfileInformation = (info) => {};

window.addEventListener('load', () => {

    editProfileInformation = (info) => {
        const companyName = document.getElementById('form_companyName');
        const companyNameContainer = companyName.closest('div');
        const nit = document.getElementById('form_nit');
        const nitContainer = nit.closest('div')
        const username = document.getElementById('form_username');
        const usernameContainer = username.closest('div')
        const number = document.getElementById('form_number');
        const numberContainer = number.closest('div');
        const email = document.getElementById('form_email');
        const emailContainer = email.closest('div')
        const address = document.getElementById('form_address');
        const addressContainer = address.closest('div')



        companyName.value = info.companyName;
        companyNameContainer.querySelector('label').classList.add('label--active');
        companyNameContainer.classList.add('textInput--focused');

        nit.value = info.nit;
        nitContainer.querySelector('label').classList.add('label--active');
        nitContainer.classList.add('textInput--focused');

        username.value = info.username;
        usernameContainer.querySelector('label').classList.add('label--active');
        usernameContainer.classList.add('textInput--focused');

        number.value = info.phoneNumber;
        numberContainer.querySelector('label').classList.add('label--active');
        numberContainer.classList.add('textInput--focused');

        email.value = info.email;
        emailContainer.querySelector('label').classList.add('label--active');
        emailContainer.classList.add('textInput--focused');

        address.value = info.address;
        addressContainer.querySelector('label').classList.add('label--active');
        addressContainer.classList.add('textInput--focused');

       

        const jobName = document.getElementById('form_job');
        jobName.value = info.job;





        $('.select2__selector--sector').val(info.sector);
        $('.select2__selector--sector').trigger('change');
        document.querySelector('.select__label--sector').classList.remove(
            'select__label--register');
        document.querySelector('.select__label--sector').classList.add('select__label--focused', 'select__label--focusedreqCreation');

        $('.select2__selector--city').val(info.city);
        $('.select2__selector--city').trigger('change');
        document.querySelector('.select__label--city').classList.remove(
            'select__label--register');
        document.querySelector('.select__label--city').classList.add('select__label--focused', 'select__label--focusedreqCreation');
    };
});