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
                        stringLength: {
                            min: 6,
                            max: 30,
                            message: 'El nombre de usuario debe tener entre 6 y 30 caracteres de largo'
                        },
                        regexp: {
                            regexp: /^[a-zA-Z_ ]+$/,
                            message: 'El nombre del cargo solo puede contener letras y guión bajo'
                        }
                    }
                },
                level: {
                    validators: {
                        notEmpty: {
                            message: 'Este campo es obligatorio'
                        },
                        regexp: {
                            regexp: /^[a-zA-Z_ ]+$/,
                            message: 'El nivel del cargo solo puede contener letras y guión bajo'
                        }
                    }
                },
                hiring: {
                    validators: {
                        notEmpty: {
                            message: 'Este campo es obligatorio'
                        },
                        regexp: {
                            regexp: /^[a-zA-Z_ ]+$/,
                            message: 'El tipo de contratación solo puede contener letras y guión bajo'
                        }
                    }
                },
                workingday: {
                    validators: {
                        notEmpty: {
                            message: 'Este campo es obligatorio'
                        },
                        regexp: {
                            regexp: /^[a-zA-Z_ ]+$/,
                            message: 'La jornada solo puede contener letras y guión bajo'
                        }
                    }
                },
                wage: {
                    validators: {
                        notEmpty: {
                            message: 'Este campo es obligatorio'
                        },
                        regexp: {
                            regexp: /^[0-9 ]+$/,
                            message: 'El salario solo puede contener números'
                        }
                    }
                },
            }
        });
    });
});

