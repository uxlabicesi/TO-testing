window.addEventListener('load', () => {
    $(document).ready(function() {

        $('.textInput__container').bootstrapValidator({   
    
            message: 'This value is not valid',
    
            feedbackIcons: {
                valid: 'glyphicon glyphicon-ok',
                invalid: 'glyphicon glyphicon-remove',
                validating: 'glyphicon glyphicon-refresh'
            },
    
            fields: {
                username: {
                    message: 'The username is not valid',
                    validators: {
                        notEmpty: {
                            message: 'Este campo es obligatorio'
                        },
                        stringLength: {
                            min: 6,
                            max: 30,
                            message: 'El nombre de usuario debe tener entre 6 y 30 caracteres de largo'
                        },
                        regexp: {
                            regexp: /^[a-zA-Z0-9_ ]+$/,
                            message: 'El nombre de usuario solo puede usar números, alfabético y guión bajo'
                        }
                    }
                },
                email: {
                    validators: {
                        notEmpty: {
                            message: 'Este campo es obligatorio'
                        },
                        emailAddress: {
                            message: 'El correo electronico no es valido'
                        } 
                    }
                },
                number: {
                    validators: {
                        notEmpty: {
                            message: 'Este campo es obligatorio'
                        },
                        regexp: {
                            regexp: /^[0-9]+$/,
                            message: 'El teléfono solo puede contener números'
                        },
                        stringLength: {
                            min: 7,
                            max: 10,
                            message: 'El telefono debe contener entre 7 y 10 números'
                        }
                    }
                },
                company: {
                    validators: {
                        notEmpty: {
                            message: 'Este campo es obligatorio'
                        }
                    }
                },
                password: {
                    validators: {
                        notEmpty: {
                            message: 'Este campo es obligatorio'
                        },
                        stringLength: {
                            min: 8,
                            message: 'La contraseña debe tener mínimo 8 caracteres'
                        }
                    }
                },
                nit: {
                    validators: {
                        notEmpty: {
                            message: 'Este campo es obligatorio'
                        }
                    },
                    regexp: {
                        regexp: /^[0-9]+$/,
                        message: 'El nit solo puede contener números'
                    }
                },
                sector: {
                    validators: {
                        notEmpty: {
                            message: 'Este campo es obligatorio'
                        }
                    }
                },
                city: {
                    validators: {
                        notEmpty: {
                            message: 'Este campo es obligatorio'
                        }
                    }
                },
            }
            
        });
    });
    
    var confirmPassword = document.querySelector('.passwordConfirmation');
    var password = document.querySelector('.password');

    confirmPassword.addEventListener('input', () => {
        const container = confirmPassword.closest('.textInput__container');
        let errorMessages = container.querySelectorAll('small');
        errorMessages.forEach((error) => {
            error.remove();
        });
        
        if(!confirmPassword.value) {
            container.classList.add('has-error');
            container.classList.remove('has-success');

            let errorMessage = document.createElement('small');
            errorMessage.classList.add('help-block');
            errorMessage.innerHTML = 'Este campo es obligatorio';
            container.appendChild(errorMessage);
        } else if(confirmPassword.value.length < 8 || confirmPassword.value != password.value) {
            container.classList.add('has-error');
            container.classList.remove('has-success');

            let errorMessage = document.createElement('small');
            errorMessage.classList.add('help-block');
            errorMessage.innerHTML = 'Las contraseñas no coinciden';
            container.appendChild(errorMessage);
        } else {
            container.classList.add('has-success');
            container.classList.remove('has-error');
        }
    });
});




