// TODO REMOVE AFTER DEBUGGING

/***
 * The following function fills the request creation form for the user when he edits the request(view), the main function fillRequestCreation is expose at file: requestCreationInfomation.js
 * 
 */

 window.addEventListener('load', () => {

    let info = {
        jobName: 'Diseñador Web',
        responsability: 'O3',
        decitions: 'O6',
        incharge: 'O2',
        jobLevel: 'O1',
        jobHiring: 'O2',
        workingday: 'O1',
        wage: 1000000,
        cities: [
            {
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
        ],
        academicLevel: 'O8',
        profession: ['O1','O2'],
        knowledge: [
            'O2',
            'O6',
        ],
        observations: 'Estamos buscando una persona que trabaje muy bien en equipo y enfoque en metodologías agiles.',
        skills: [
            'Desarrollo de prototipos',
            'Definición de insights',
            'Evaluación de usabilidad',
            'Creación de conceptos',
            'Sustentación de propuestas',
        ],
        cityList: [
            {
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

    fillRequestCreation(info);
 });