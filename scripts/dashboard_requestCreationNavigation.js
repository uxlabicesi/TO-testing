window.addEventListener('load', () => {

    const backBtn = document.querySelector('.reqCreation__back');
    const nextBtn = document.querySelector('.reqCreation__next');
    let reqCreationState = 0;
    const progressBar = document.querySelectorAll('.reqCreation__progress');
    const content = document.querySelectorAll('.reqCreation__content');

    nextBtn.addEventListener('click', () => {
        if(reqCreationState < 3) {
            content[reqCreationState].classList.remove('reqCreation__content--active');
            content[reqCreationState+1].classList.add('reqCreation__content--active');

            progressBar[reqCreationState].classList.remove('reqCreation__progress--current');
            progressBar[reqCreationState].classList.add('reqCreation__progress--completed');
            progressBar[reqCreationState+1].classList.remove('reqCreation__progress--incomplete');
            progressBar[reqCreationState+1].classList.add('reqCreation__progress--current');

            reqCreationState++;
        }
    }); 

    backBtn.addEventListener('click', () => {
        if(reqCreationState > 0) {
            content[reqCreationState].classList.remove('reqCreation__content--active');
            content[reqCreationState-1].classList.add('reqCreation__content--active');

            progressBar[reqCreationState].classList.remove('reqCreation__progress--current');
            progressBar[reqCreationState].classList.add('reqCreation__progress--incomplete');
            progressBar[reqCreationState-1].classList.remove('reqCreation__progress--completed');
            progressBar[reqCreationState-1].classList.add('reqCreation__progress--current');

            reqCreationState--;
        }
    });
});