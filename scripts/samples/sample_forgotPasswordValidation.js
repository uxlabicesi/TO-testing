/*
    Validates the register form using BootstrapValidator. 
 */

window.addEventListener('load', () => {
    $(document).ready(function() {
        $('.forgotPassword__form').bootstrapValidator({ 
            fields: {
                form_email: {
                        validators: {
                            notEmpty: {
                                message: 'Este campo es obligatorio'
                            },
                        }
                }
            }
        });
    });
});





