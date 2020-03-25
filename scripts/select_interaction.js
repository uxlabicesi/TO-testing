$(document).ready(function () {
    

    $('.select2__selector--sector').select2({
        placeholder: "¿A qué sector pertenece?",
        theme: "talentos",
        width: '100%', // need to override the changed default
        containerCss: {
            "height": "55px"
        },
        //debug: true, // used for verbose console
    });

    $('.select2__selector--city').select2({
        tags: true,
        placeholder: "¿En qué ciudad está su oficina principal?",
        theme: "talentos",
        width: '100%', // need to override the changed default
        containerCss: {
            "height": "55px"
        },
        //debug: true,  // used for verbose console
    });

    /*
        Next 2 functions were created for manage microinteraction,first one for control the open event 
        and add the class 'select__label--focused'; and remove the class 
        'select__label--register. the close menu event review the state of selection and 
        modify the same 2 classes.
    */

    $('.select2__selector--sector').on('select2:open', function (e) {
        document.querySelector('.select__label--sector').classList.remove(
            'select__label--register');
        document.querySelector('.select__label--sector').classList.add(
            'select__label--focused');
    });

    $('.select2__selector--sector').on('select2:close', function (e) {
        let value = $('.select2__selector--sector').select2('data')[0].id;
        if(value === ''){
            document.querySelector('.select__label--sector').classList.add('select__label--register');
            document.querySelector('.select__label--sector').classList.remove(
            'select__label--focused');
        }
    });


    $('.select2__selector--city').on('select2:open', function (e) {
        document.querySelector('.select__label--city').classList.remove(
            'select__label--register');
        document.querySelector('.select__label--city').classList.add('select__label--focused');
    });

    $('.select2__selector--city').on('select2:close', function (e) {
        let value = $('.select2__selector--city').select2('data')[0].id;
        if(value === ''){
            document.querySelector('.select__label--city').classList.add('select__label--register');
        document.querySelector('.select__label--city').classList.remove(
            'select__label--focused');
        }
    });
});
