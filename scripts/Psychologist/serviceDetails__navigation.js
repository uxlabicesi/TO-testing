window.addEventListener('load', () => {
    const applicantHeader = document.getElementById('applicants-header');
    const applicantContainer = document.getElementById('applicants-container');
    const candidateHeader = document.getElementById('candidates-header');
    const candidateContainer = document.getElementById('candidates-container');

    applicantHeader.addEventListener('click', () => {
        applicantContainer.classList.toggle('servDetails__section--hidden');
        applicantHeader.classList.toggle('servDetails__sectionHeader--hidden');
    });

    candidateHeader.addEventListener('click', () => {
        candidateContainer.classList.toggle('servDetails__section--hidden');
        candidateHeader.classList.toggle('servDetails__sectionHeader--hidden');
    });
});