/**
 * The following code uses the createSkill function from ./scripts/dashboard_requestSkills.js
 * to create the first 3 skill selects that appear by default in the request creation process 
 * and create another skill everytime the adSkill button is pressed
 * 
 * Warning, removing this script makes mandatory to re-write trigger event for addSkill button
 * 
 * Full documentation on the createSkill function available at it's respective script file 
 * 
 */

window.addEventListener('load', () => {


    //The event listener must be created with the options that the select will take, refer to documentation
    const addSkill = document.querySelector('.reqCreation__content--skills .btn--blue');
    const options = [
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
        },
        {
            value: 'O6',
            text: 'Opción 6'
        },
    ]

    addSkill.addEventListener('click', () => {
        createSkill(options);
    });

    //This code creates the 3 default selects of the request creation process
    createSkill(options);
    createSkill(options);
    createSkill(options);
});