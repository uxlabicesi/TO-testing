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
            }
        });
    });
});

