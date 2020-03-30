/*
    Validates the register form using BootstrapValidator. 
 */

window.addEventListener('load', () => {
    $(document).ready(function() {

        $('.registerForm').bootstrapValidator({ 
            fields: {
                username: {

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
                            message: 'El correo electrónico no es valido'
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
                password: {
                    validators: {
                        notEmpty: {
                            message: 'Este campo es obligatorio'
                        },
                        stringLength: {
                            min: 8,
                            message: 'La contraseña debe tener mínimo 8 caracteres'
                        },
                        regexp: {
                            regexp: /^(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/,
                            message: 'La contraseña debe tener por lo menos 8 caracteres que incluyan una 1 minúscula y 1 mayúscula'
                        },
                        identical: {
                            field: 'confirmPassword',
                            message: 'Las contraseñas no coinciden'
                        }
                    }
                },
                confirmPassword: {
                    validators: {
                        notEmpty: {
                            message: 'Este campo es obligatorio'
                        },
                        stringLength: {
                            min: 8,
                            message: 'La contraseña debe tener mínimo 8 caracteres'
                        },
                        regexp: {
                            regexp: /^(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/,
                            message: 'La contraseña debe tener por lo menos 8 caracteres que incluyan una 1 minúscula y 1 mayúscula'
                        },
                        identical: {
                            field: 'password',
                            message: 'Las contraseñas no coinciden'
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
                nitNumber: {
                    validators: {
                        notEmpty: {
                            message: 'Este campo es obligatorio'
                        },
                        regexp: {
                            regexp: /^[0-9a-zA-Z]+$/,
                            message: 'No se debe usar ni . ni -'
                        },
                        stringLength: {
                            min: 9,
                            max: 9,
                            message: 'El nit debe contener 9 números y no incluir el dígito de verificación.'
                        }
                    },
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
});





