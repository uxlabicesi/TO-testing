
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
    id: 'id-custom-sample-1' // (string) id for each candidate
    },
 */


/**
 * @description this function updates the candidates info, this information will be used for prepare the event click for candidatesTabButton.
 * @param {} info 
 * 
 * // TODO: insert complete structure for json
 * Option 1 - update by using this function from another js file.
 */
let updateCandidatesInfo = (info) => {};

/**
 * @description this function can be used directly to add candidates info, or delegated the call to default way using updateCandidatesInfo()
 * @param {} info 
 * 
 * // TODO: insert complete structure for json
 * // Option 2 - re-write the trigger event.
 */
let candidates = (info) => {};

window.addEventListener('load', () => {

    let candidateInfo = {}

    updateCandidatesInfo = (info) => {
        candidateInfo = info;
    }

    candidates = (info) => {
        if (info.length > 0) {
            const candidates = document.querySelector('.reqDetails__candidates');

            candidates.innerHTML = '';
            let aux = 0;
            info.forEach((e) => {
                let candidate = document.createElement('div');
                candidate.classList.add('candidate');
                candidate.setAttribute("id-candidate", info[aux].id) // included for selecting using atrribute 13/04/2020

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
                btn.classList.add('btn', 'btn--noFill', 'candidate__btn');
                btn.innerHTML = 'Ver detalles';
                btn.addEventListener('click', () => {
                    window.location.href = './dashboard_candidateDetails.html';
                });
                candidate.appendChild(btn);

                candidates.appendChild(candidate);

                aux++;
            });
        }
    }

    let candidatesTabButton = document.querySelector('.reqDetails__candidates__tabButton');

    candidatesTabButton.addEventListener('click', () => {
       // if you want to re-write all trigger... using directly the function candidates(), or use the function updateCandidatesInfo() for changing values of candidateInfo (variable)
       
       // (do-not remove, unless you will re-write trigger and use option 2) require for using the updateCandidatesInfo
       candidates(candidateInfo);
    });


});