/*
    Validates the creation request form using BootstrapValidator. 
 */

window.addEventListener('load', () => {
    $(document).ready(function() {
        $('.reqForm').bootstrapValidator({ 
            fields: {
                job: {
                    validators: {
                        notEmpty: {
                            message: 'Este campo es obligatorio'
                        },
                        regexp: {
                            regexp: /^[ñÑa-zA-Z_ ]+$/,
                            message: 'Solo puede contener letras y guión bajo'
                        }
                    }
                },
                observations:{
                    validators: {
                        stringLength: {
                            max: 500,
                            message: 'no se pueden exceder los 500 caracteres'
                        }
                    }
                },
            }
        });
    });
});

