let createCandidateList = (info) => {};

/**
 * The following script is used to fill the applicants and candidates lists displayed on the Avaliable Candidates
 * tab by using the function createCandidateList, this function receives an Object Array in which every Object must
 * follow this structure:
 * {
 *  name: **String** with the name of the candidate,
 *  job: **String** with the job or position of the candidate,
 *  city: **String** with the city where the candidate is located,
 *  affinity: **Number** with the percentage of affinity the candidate has for the job,
 *  inProcess: **Boolean** true when the In Process tag should be displayed,
 *  candidate: **Boolean** which is true if the person belongs to the candidate section, located on the bottom half 
 *  of the screen, and false if the person is an applicant, which is the section located on the top half of the screen
 *  url: **string** with the url of the page where the user will be redirected when clicking this candidate
 * }
 * 
 * The function can be called more than once if necessary, i.e, If it has to be called once for applicants and once for candidates
 */
window.addEventListener('load', () => {

    const applicantsContainer = document.getElementById('applicants-container');
    const candidatesContainer = document.getElementById('candidates-container');

    createCandidateList = (info) => {
        info.forEach(element => {
            const candidate = document.createElement('div');
            candidate.classList.add('servDetails__candidate');

            const name = document.createElement('p');
            name.classList.add('servDetails__text--bold', 'servDetails__text--blue');
            name.innerHTML = element.name;
            candidate.appendChild(name);

            const job = document.createElement('p');
            job.innerHTML = element.job;
            candidate.appendChild(job);

            const city = document.createElement('p');
            city.classList.add('servDetails__text--bold', 'servDetails__text--blue');
            city.innerHTML = element.city;
            candidate.appendChild(city);

            const progressBar = document.createElement('div');
            progressBar.classList.add('servDetails__progressBar');
            candidate.appendChild(progressBar);

            const currentProgress = document.createElement('div');
            currentProgress.classList.add('servDetails__currentProgress');
            currentProgress.style.width = (element.affinity * 110 / 100) + 'px';
            if(element.affinity < 33) {
                currentProgress.classList.add('servDetails__currentProgress--red');
            } else if (element.affinity < 66) {
                currentProgress.classList.add('servDetails__currentProgress--yellow');
            } else {
                currentProgress.classList.add('servDetails__currentProgress--green');
            }
            progressBar.appendChild(currentProgress);

            const progressText = document.createElement('p');
            progressText.innerHTML = element.affinity + '%';
            progressBar.appendChild(progressText);

            const inProcess = document.createElement('div');
            inProcess.classList.add('servDetails__inProcess');
            if(element.inProcess) inProcess.classList.add('servDetails__inProcess--active');
            const inProcessText = document.createElement('p');
            inProcessText.innerHTML = 'En proceso';
            inProcess.appendChild(inProcessText);
            candidate.appendChild(inProcess);

            if(element.candidate) {
                candidatesContainer.appendChild(candidate);
            } else {
                applicantsContainer.appendChild(candidate);
            }

            candidate.addEventListener('click', () => {
                if(element.url) window.location.href = element.url;
            });
        });
    } 
});