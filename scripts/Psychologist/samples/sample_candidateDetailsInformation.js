window.addEventListener('load', () => {
    var sample = {
        title: 'Diseñador UX',
        remainingTime: 1,
        name: 'Fabio Arias',
        job: 'Diseñador de Medios Interactivos',
        origin: 'Ezenza',
        id: '1130613425',
        tel: ['(300) 8200838', '032 5552334'],
        age: 32,
        city: 'Cali, Valle del Cauca',
        exp: [
            {position:'Experiencia Laboral 1',timeInMonths:24,enterprise:'empresa 1',duties:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." }, 
            {position:'Experiencia Laboral 2',timeInMonths:12,enterprise:'empresa 2',duties:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." },
            {position:'Experiencia Laboral 3',timeInMonths:6,enterprise:'empresa 3',duties:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." },
            ],
            /* exp: [
            'Experiencia Laboral 1', 
            'Experiencia Laboral 2', 
            'Experiencia Laboral 3'
            ],*/
        knowledge: ['Conocimiento 1', 'Conocimiento 2', 'Conocimiento 3'],
        licenses: ['Licencias 1', 'Licencias 2', 'Licencias 3'],
        formation: ['Formación académica 1', 'Formación académica 2', 'Formación académica 3'],
        references: [
            {
                // empty for testing behavior when we dont have aný data
                title: '',
                name: 'Nombre',
                position: 'Cargo',
                tel: 'Teléfono'
            },
            {
                title: 'Referencia personal 2',
                name: 'Nombre',
                position: '',
                tel: 'Teléfono'
            }
        ],
        selected: true,
        evaluated: false,
    }
    // candidateDetailsInformation.js
    addInformation(sample);
});