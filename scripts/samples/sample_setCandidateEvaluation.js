/**
 * the folling function shows the possible usage for candidate Evaluation Button inside the candidate details page.
 * 
 * the function uses the createPopUp function, you can go to ceratePopUp.js for more details
 * 
 */


window.addEventListener('load', () => {

    const candidateEvaluationBtn = document.querySelector('.btn__evaluation');
    const selectionStateButton = document.querySelector('.btn__selection');
    // use these for get the evaluation values
    const rangeInputExperience = document.getElementById('range_experience');
    const rangeInputSkills = document.getElementById('range_skills');
    const rangeInputEducation = document.getElementById('range_education');

    let informationPopUp = {
        title: "Evaluación completa",
        text: "Mejoramos cada día para brindarte el mejor talento",
        btn: "Continuar",
        goTo: "",
    };

    let rootForPopUp = ".popUp";

    candidateEvaluationBtn.addEventListener('click', (ev) => {
        createPopUp(informationPopUp, rootForPopUp);
        candidateEvaluationBtn.innerHTML="Reevaluar candidato";
        //selectionStateButton.classList.remove('btn--inactive');
        ev.preventDefault();
    });

});