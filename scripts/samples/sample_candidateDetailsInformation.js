// TODO REMOVE AFTER DEBUGGING

/***
 * The following function add information to candidate details page(view), the main function addInformation ws expose at file: candidateDetailsInformation.js
 * 
 */

window.addEventListener('load', () => {

var sample = {
    title: 'Diseñador UX',
    status: [2, 1],
    remainingTime: 1,
    name: 'Fabio Arias',
    profilePic: './resources/imgPerfil.jpg',
    job: 'Diseñador de Medios Interactivos',
    origin: 'Ezenza',
    id: '1130613425',
    tel: ['(300) 8200838', '032 5552334'],
    age: 32,
    city: 'Cali, Valle del Cauca',
    exp: [
        {position:'Experiencia Laboral 1',timeInMonths:24,enterprise:'empresa 1',duties:"Lorem ipsum loen dae, Lorem ipsum loen dae, Lorem ipsum loen dae." }, 
        {position:'Experiencia Laboral 2',timeInMonths:12,enterprise:'empresa 2',duties:"Lorem ipsum loen dae, Lorem ipsum loen dae, Lorem ipsum loen dae." },
        {position:'Experiencia Laboral 3',timeInMonths:6,enterprise:'empresa 3',duties:"Lorem ipsum loen dae, Lorem ipsum loen dae, Lorem ipsum loen dae." },
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
            title: 'Referencia personal 1',
            name: 'Nombre',
            position: 'Cargo',
            tel: 'Teléfono'
        },
        {
            title: 'Referencia personal 2',
            name: 'Nombre',
            position: 'Cargo',
            tel: 'Teléfono'
        }
    ],
    evaluation: [6,1,4], // added for second time interaction, represent initial or prev evaluation
    selected: false,
    evaluated: false,
}
// candidateDetailsInformation.js
addInformation(sample);
});