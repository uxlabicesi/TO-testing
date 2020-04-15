window.addEventListener('load', () => {

    const nextBtn = document.querySelector('.reqCreation__next');

    nextBtn.addEventListener('click', () => {
        window.location.href = nextBtn.dataset.href;
    }); 
});