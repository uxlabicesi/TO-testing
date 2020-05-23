window.addEventListener('load', () => {

    const cleanFormButton = document.querySelector('.reqCreation__clear');
    cleanFormButton.addEventListener('click', clearRequestCreation);

    let info = {
        jobName: 'Diseñador Web',
        responsability: 'O3',
        decitions: 'O1',
        incharge: 'O2',
        jobLevel: 'O1',
        jobHiring: 'O2',
        workingday: 'O1',
        wage: 1000000,
        cities: [{
                city: 'O5',
                amount: 4,
            },
            {
                city: 'O3',
                amount: 2,
            }
        ],
        functions: [
            'Diseño de interfaz de usuario',
            'Investigación de usuarios',
            'Evaluación de usabilidad',
            'Creación de conceptos',
            'Creación de conceptos'
        ],
        academicLevel: 'O8',
        profession: ['','O1', "" ,'O2'], // test with bad data
        knowledge: [
            '',
            'O1',
            'O2',
            'O6',
        ],
        observations: 'Estamos buscando una persona que trabaje muy bien en equipo y enfoque en metodologías agiles.',
        skills: [
            'O2',
            'O5',
            'O1',
            'O3',
            'O4',
        ],
        skillOptions: [{
                value: 'O1',
                text: 'Opción 1'
            },
            {
                value: 'O2',
                text: 'Opción 2'
            },
            {
                value: 'O3',
                text: 'Opción 3'
            },
            {
                value: 'O4',
                text: 'Opción 4'
            },
            {
                value: 'O5',
                text: 'Opción 5'
            },
            {
                value: 'O6',
                text: 'Opción 6'
            },
        ],
        cityList: [{
                value: 'O1',
                text: 'Opción 1'
            },
            {
                value: 'O2',
                text: 'Opción 2'
            },
            {
                value: 'O3',
                text: 'Opción 3'
            },
            {
                value: 'O4',
                text: 'Opción 4'
            },
            {
                value: 'O5',
                text: 'Opción 5'
            }
        ]
    };

   


    const autocompleteButton = document.querySelector('.btn--autocomplete');

    autocompleteButton.addEventListener('click', (ev) => {
       ev.preventDefault();
       fillRequestCreation(info);
    });


});