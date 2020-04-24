// TODO REMOVE AFTER DEBUGGING

/***
 * The following function fills the request creation form for the user when he edits the request(view), the main function fillRequestCreation is expose at file: requestCreationInfomation.js
 * 
 */

 window.addEventListener('load', () => {

    let info = {
        jobName: 'Diseñador Web',
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
                city: 'O7',
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
        profession: 'Diseñador',
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
        ]
    };

    fillRequestCreation(info);
 });