
/***
 *  @param {} info both options require this same structure for json array
 *  
 * [{candidate1},{candidate2},{candidate3}, ...etc]
 * 
 * each candiate require this structure
 * {
    profilePic: '/resources/imgPerfil.jpg', // (string) link for image
    name: 'Fabio Arias M', // (string) candidate name
    job: 'Diseñador Gráfico', // (string) candiate main caree/job
    telephone: ['+57 (300) 8200838','032 5552334'], // (string-array) list of phone numbers as strings 
    email: 'fabio.arias@candidatos.com.co', // (string) candidate mail
    id: 'id-custom-sample-1' // (string) id for each candidate,
    selected: true // (boolean) if selected true
    },
 */

/**
 * @description this function can be used directly to add candidates info, or delegated the call to default way using updateCandidatesInfo()
 * @param {} info 
 * 
 * // TODO: insert complete structure for json
 * // Needs to re-write the trigger event.
 */
let candidates = (info) => {};

window.addEventListener('load', () => {


    candidates = (info) => {
        if (info.length > 0) {
            const candidates = document.querySelector('.reqDetails__candidates');

            candidates.innerHTML = '';
            let aux = 0;
            info.forEach((e) => {
                let candidate = document.createElement('div');
                candidate.classList.add('candidate');
                candidate.setAttribute("id-candidate", info[aux].id) // included for selecting using atrribute 13/04/2020
                candidate.classList.add("id-candidate-"+info[aux].id) // included for selecting using atrribute when responsive

                let profile = document.createElement('div');
                profile.classList.add('candidate__profile');

                let profilePic = document.createElement('img');
                profilePic.setAttribute('src', "." + e.profilePic);
                profilePic.classList.add('candidate__profileImg');
                profile.appendChild(profilePic);

                let profileTitles = document.createElement('div')
                profileTitles.classList.add('candidate__profileTitles');

                let candidateName = document.createElement('h2');
                candidateName.classList.add('candidate__profileTitlesName');
                candidateName.innerHTML = e.name;
                profileTitles.appendChild(candidateName);

                let candidateJob = document.createElement('h3');
                candidateJob.classList.add('candidate__profileTitlesJob');
                candidateJob.innerHTML = e.job;
                profileTitles.appendChild(candidateJob);
                profile.appendChild(profileTitles);
                candidate.appendChild(profile);

                let candidateInfo = document.createElement('div');
                candidateInfo.classList.add('candidate__info');

                let cel = document.createElement('h2');
                cel.classList.add('candidate__infoCel');
                if (e.telephone > 1) {
                    e.telephone.forEach((number, index) => {
                        if (e.telephone.length === index - 1) {
                            cel.innerHTML += number;
                        } else {
                            cel.innerHTML += number + ' / ';
                        }
                    });
                } else {
                    cel.innerHTML = e.telephone[0];
                }
                candidateInfo.appendChild(cel);

                let email = document.createElement('h3');
                email.classList.add('candidate__infoEmail');
                email.innerHTML = e.email;
                candidateInfo.appendChild(email);
                candidate.appendChild(candidateInfo);

                let btn = document.createElement('button');
                if(!e.selected){
                    btn.classList.add('btn', 'btn--noFill', 'candidate__btn');
                    btn.innerHTML = 'Ver detalles';
                }else{
                    btn.classList.add('btn', 'btn--noFill--active', 'candidate__btn');
                    btn.innerHTML = 'Seleccionado';
                }

                btn.addEventListener('click', () => {
                    window.location.href = './dashboard_candidateDetails.html';
                });
                candidate.appendChild(btn);

                candidates.appendChild(candidate);

                aux++;
            });
        }
    }

    let buttonBarBottom = document.createElement('div');
    buttonBarBottom.classList.add('canDetails__buttonsGroup');

    let buttonEvaluation = document.createElement('button');
    buttonEvaluation.classList.add('btn');
    buttonEvaluation.classList.add('btn--medium');
    buttonEvaluation.classList.add('btn--blue');
    buttonEvaluation.innerHTML = "Calificar servicio";

    let buttonFinishProcess = document.createElement('button');
    buttonFinishProcess.classList.add('btn');
    buttonFinishProcess.classList.add('btn--medium');
    buttonFinishProcess.innerHTML = "Finalizar proceso";

    buttonBarBottom.appendChild(buttonEvaluation);
    buttonBarBottom.appendChild(buttonFinishProcess);

    document.querySelector('.reqDetails__content').appendChild(buttonBarBottom);


});