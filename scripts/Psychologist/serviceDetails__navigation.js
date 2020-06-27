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

    const tabs = document.querySelectorAll('.reqDetails__contentCategory');
    const sections = document.querySelectorAll('.servDetails__content');

    tabs.forEach((tab, index) => {
        tab.addEventListener('click', () => {
            tabs.forEach((e) => {
                e.classList.remove('reqDetails__contentCategory--active');
            })

            tab.classList.add('reqDetails__contentCategory--active');

            sections.forEach(e => {
                e.classList.remove('reqDetails__content--active');
            });

            sections[index].classList.add('reqDetails__content--active');
        })
    });
});