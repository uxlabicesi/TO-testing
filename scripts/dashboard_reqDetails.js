function handleLoad() {
    const status = document.querySelector('.status');
    const statusList = document.querySelector('.status__list');

    status.addEventListener('click', () => {
        statusList.classList.toggle('status__list--active');
    });

    document.addEventListener('click', (event) => {
        if(event.target.closest('.status') != status)
        statusList.classList.remove('status__list--active');
    });

    const candidateBtn = document.querySelector('.reqDetails__candidate');
    const requestBtn = document.querySelector('.reqDetails__request');
    const candidatesContainer = document.querySelector('.reqDetails__candidates');
    const requestContainer = document.querySelector('.reqDetails__details');

    candidateBtn.addEventListener('click', () => {
        candidateBtn.classList.add('reqDetails__contentCategory--active');
        requestBtn.classList.remove('reqDetails__contentCategory--active');
        candidatesContainer.classList.add('reqDetails__content--active');
        requestContainer.classList.remove('reqDetails__content--active');
    });

    requestBtn.addEventListener('click', () => {
        candidateBtn.classList.remove('reqDetails__contentCategory--active');
        requestBtn.classList.add('reqDetails__contentCategory--active');
        candidatesContainer.classList.remove('reqDetails__content--active');
        requestContainer.classList.add('reqDetails__content--active');
    });
}

window.addEventListener('load', handleLoad);