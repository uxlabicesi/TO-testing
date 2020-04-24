window.addEventListener('load', () => {


    window.onclick = function(event) {}

    const candidateEvaluationBtn = document.querySelector('.btn__evaluation');
    // use these for get the values... 
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
        ev.preventDefault();
    });

});