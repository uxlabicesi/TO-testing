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
        //tags: true,
        placeholder: "¿En qué ciudad está su oficina principal?",
        theme: "talentos",
        width: '100%', // need to override the changed default
        containerCss: {
            "height": "55px"
        },
        //debug: true,  // used for verbose console
    });

    $('.select2__selector--reqCity').select2({
        //tags: true,
        placeholder: "CIUDAD",
        theme: "talentos",
        width: '100%', // need to override the changed default
        containerCss: {
            "height": "55px"
        },
        //debug: true,  // used for verbose console
    });

    $('.select2__selector--workingday').select2({
        //tags: true,
        placeholder: "JORNADA",
        theme: "talentos",
        width: '100%', // need to override the changed default
        containerCss: {
            "height": "55px"
        },
        //debug: true,  // used for verbose console
    });

    /*$('.select2__selector--workingday').select2({
        tags: true,
        placeholder: "JORNADA",
        theme: "talentos",
        width: '100%', // need to override the changed default
        containerCss: {
            "height": "55px"
        },
        //debug: true,  // used for verbose console
    });*/

    $('.select2__selector--hiring').select2({
        tags: true,
        placeholder: "TIPO DE CONTRATACIÓN",
        theme: "talentos",
        width: '100%', // need to override the changed default
        containerCss: {
            "height": "55px"
        },
        //debug: true,  // used for verbose console
    });

    $('.select2__selector--level').select2({
        tags: true, // Verify if its needed
        placeholder: "NIVEL DEL CARGO",
        theme: "talentos",
        width: '100%', // need to override the changed default
        containerCss: {
            "height": "55px"
        },

        //debug: true,  // used for verbose console
    });

    // this line disable the selection option for direct level selection
    $(".select2__selector--level").prop("disabled", true);

    $('.select2__selector--academicLevel').select2({
        //tags: true,
        placeholder: "NIVEL ACADÉMICO",
        theme: "talentos",
        width: '100%', // need to override the changed default
        containerCss: {
            "height": "55px"
        },
        //debug: true,  // used for verbose console
    });

    // added for support profession as a single selection
    $('.select2__selector--profession').select2({
        //tags: true,
        placeholder: "",
        theme: "talentos",
        width: '100%', // need to override the changed default
        containerCss: {
            "height": "100%",
            "min-height":"55px",
        },
        //debug: true,  // used for verbose console
    });


    $('.select2__selector--knowledge').select2({
        tags: true,
        placeholder: "",
        theme: "talentos",
        width: '100%', // need to override the changed default
        containerCss: {
            "height": "100%",
            "min-height":"55px",
        },
        //debug: true,  // used for verbose console
    });

    $('.select2__selector--responsability').select2({
        //tags: true,
        placeholder: "NIVEL DE RESPONSABILIDAD",
        theme: "talentos",
        width: '100%', // need to override the changed default
        containerCss: {
            "min-height": "55px" // for multiples tags support responsive
        },
        //debug: true,  // used for verbose console
    });

    $('.select2__selector--decition').select2({
        //tags: true,
        placeholder: "NIVEL DE TOMA DE DECISIONES",
        theme: "talentos",
        width: '100%', // need to override the changed default
        containerCss: {
            "min-height": "55px" // for multiples tags support responsive
        },
        //debug: true,  // used for verbose console
    });

    $('.select2__selector--incharge').select2({
        //tags: true,
        placeholder: "TIENE PERSONAS A CARGO",
        theme: "talentos",
        width: '100%', // need to override the changed default
        containerCss: {
            "min-height": "55px" // for multiples tags support responsive
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

//-------------------------------------------------------------------------------------------------------

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

//-------------------------------------------------------------------------------------------------------

    $('.select2__selector--reqCity').on('select2:open', function (e) {
        document.querySelector('.select__label--reqCity').classList.remove(
            'select__label--register');
        document.querySelector('.select__label--reqCity').classList.add('select__label--focused', 'select__label--focusedreqCreation');
    });

    $('.select2__selector--reqCity').on('select2:close', function (e) {
        let value = $('.select2__selector--reqCity').select2('data')[0].id;
        if(value === ''){
            document.querySelector('.select__label--reqCity').classList.add('select__label--register');
        document.querySelector('.select__label--reqCity').classList.remove(
            'select__label--focused', 'select__label--focusedreqCreation');
        }
    });

//-------------------------------------------------------------------------------------------------------

    $('.select2__selector--workingday').on('select2:open', function (e) {
        document.querySelector('.select__label--workingday').classList.remove(
            'select__label--register');
        document.querySelector('.select__label--workingday').classList.add('select__label--focused', 'select__label--focusedreqCreation');
    });

    $('.select2__selector--workingday').on('select2:close', function (e) {
        let value = $('.select2__selector--workingday').select2('data')[0].id;
        if(value === ''){
            document.querySelector('.select__label--workingday').classList.add('select__label--register');
        document.querySelector('.select__label--workingday').classList.remove(
            'select__label--focused', 'select__label--focusedreqCreation');
        }
    });

//-------------------------------------------------------------------------------------------------------

    $('.select2__selector--hiring').on('select2:open', function (e) {
        document.querySelector('.select__label--hiring').classList.remove(
            'select__label--register');
        document.querySelector('.select__label--hiring').classList.add('select__label--focused', 'select__label--focusedreqCreation');
    });

    $('.select2__selector--hiring').on('select2:close', function (e) {
        let value = $('.select2__selector--hiring').select2('data')[0].id;
        if(value === ''){
            document.querySelector('.select__label--hiring').classList.add('select__label--register');
        document.querySelector('.select__label--hiring').classList.remove(
            'select__label--focused', 'select__label--focusedreqCreation');
        }
    });

//-------------------------------------------------------------------------------------------------------

    /*$('.select2__selector--level').on('select2:open', function (e) {
        document.querySelector('.select__label--level').classList.remove(
            'select__label--register');
        document.querySelector('.select__label--level').classList.add('select__label--focused', 'select__label--focusedreqCreation');
    });

    $('.select2__selector--level').on('select2:close', function (e) {
        let value = $('.select2__selector--level').select2('data')[0].id;
        if(value === ''){
            document.querySelector('.select__label--level').classList.add('select__label--register');
        document.querySelector('.select__label--level').classList.remove(
            'select__label--focused', 'select__label--focusedreqCreation');
        }
    });*/

    
//-------------------------------------------------------------------------------------------------------

    $('.select2__selector--academicLevel').on('select2:open', function (e) {
        document.querySelector('.select__label--academicLevel').classList.remove(
            'select__label--register');
        document.querySelector('.select__label--academicLevel').classList.add('select__label--focused', 'select__label--focusedreqCreation');
    });

    $('.select2__selector--academicLevel').on('select2:close', function (e) {
        let value = $('.select2__selector--academicLevel').select2('data')[0].id;
        if(value === ''){
            document.querySelector('.select__label--academicLevel').classList.add('select__label--register');
        document.querySelector('.select__label--academicLevel').classList.remove(
            'select__label--focused', 'select__label--focusedreqCreation');
        }
    });

//-------------------------------------------------------------------------------------------------------
// added for support label interaction in Profession
$('.select2__selector--profession').on('select2:open', function (e) {
    document.querySelector('.select__label--profession').classList.remove(
        'select__label--register');
    document.querySelector('.select__label--profession').classList.add('select__label--focused', 'select__label--focusedreqCreation');
});

$('.select2__selector--profession').on('select2:close', function (e) {
    let value = $('.select2__selector--profession').select2('data').length;
    if(value === 0){
        document.querySelector('.select__label--profession').classList.add('select__label--register');
    document.querySelector('.select__label--profession').classList.remove(
        'select__label--focused', 'select__label--focusedreqCreation');
    }
});

//-------------------------------------------------------------------------------------------------------

$('.select2__selector--responsability').on('select2:open', function (e) {
    document.querySelector('.select__label--responsability').classList.remove(
        'select__label--register');
    document.querySelector('.select__label--responsability').classList.add('select__label--focused', 'select__label--focusedreqCreation');
});

$('.select2__selector--responsability').on('select2:close', function (e) {
    let value = $('.select2__selector--responsability').select2('data')[0].id;
    if(value === ''){
        document.querySelector('.select__label--responsability').classList.add('select__label--register');
    document.querySelector('.select__label--responsability').classList.remove(
        'select__label--focused', 'select__label--focusedreqCreation');
    }
});

//-------------------------------------------------------------------------------------------------------

$('.select2__selector--decition').on('select2:open', function (e) {
    document.querySelector('.select__label--decition').classList.remove(
        'select__label--register');
    document.querySelector('.select__label--decition').classList.add('select__label--focused', 'select__label--focusedreqCreation');
});

$('.select2__selector--decition').on('select2:close', function (e) {
    let value = $('.select2__selector--decition').select2('data')[0].id;
    if(value === ''){
        document.querySelector('.select__label--decition').classList.add('select__label--register');
    document.querySelector('.select__label--decition').classList.remove(
        'select__label--focused', 'select__label--focusedreqCreation');
    }
});

//-------------------------------------------------------------------------------------------------------

$('.select2__selector--incharge').on('select2:open', function (e) {
    document.querySelector('.select__label--incharge').classList.remove(
        'select__label--register');
    document.querySelector('.select__label--incharge').classList.add('select__label--focused', 'select__label--focusedreqCreation');
});

$('.select2__selector--incharge').on('select2:close', function (e) {
    let value = $('.select2__selector--incharge').select2('data')[0].id;
    if(value === ''){
        document.querySelector('.select__label--incharge').classList.add('select__label--register');
    document.querySelector('.select__label--incharge').classList.remove(
        'select__label--focused', 'select__label--focusedreqCreation');
    }
});

//-------------------------------------------------------------------------------------------------------

    $('.select2__selector--knowledge').on('select2:open', function (e) {
        document.querySelector('.select__label--knowledge').classList.remove(
            'select__label--register');
        document.querySelector('.select__label--knowledge').classList.add('select__label--focused', 'select__label--focusedreqCreation');
    });

    $('.select__label--visible').on('click', function (e) {
        $('.select2__selector--knowledge').select2('open');
        document.querySelector('.select__label--knowledge').classList.remove(
            'select__label--register');
        document.querySelector('.select__label--knowledge').classList.add('select__label--focused', 'select__label--focusedreqCreation');
    });

    $('.select2__selector--knowledge').on('select2:close', function (e) {
        //let value = $('.select2__selector--knowledge').select2('data')[0].id;
        let value = $('.select2__selector--knowledge').select2('data').length;
        if(value === 0){ // TODO : make same process for all multiple tags, if required
            document.querySelector('.select__label--knowledge').classList.add('select__label--register');
        document.querySelector('.select__label--knowledge').classList.remove(
            'select__label--focused', 'select__label--focusedreqCreation');
        }
    });

    $('.select2__selector--knowledge').on('select2:opening select2:closing', function( event ) {
        var $searchfield = $(this).parent().find('.select2-search__field');
        $searchfield.prop('disabled', true);
        $searchfield.prop('visible', false);
    });

    $('.select2__selector--profession').on('select2:opening select2:closing', function( event ) {
        var $searchfield = $(this).parent().find('.select2-search__field');
        $searchfield.prop('disabled', true);
        $searchfield.prop('visible', false);
    });
});

