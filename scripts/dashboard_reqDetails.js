/*
    This scripts has the purpose of showing/hiding the status list and changing between displaying the 
    request information or the candidates for that request. Both tasks are achieved through adding/removing
    classes to the elements affected.    
 */

function handleLoad() {

    // Show/Hide the status list
    const status = document.querySelector('.status');
    const statusList = document.querySelector('.status__list');

    status.addEventListener('click', () => {
        statusList.classList.toggle('status__list--active');
    });

    document.addEventListener('click', (event) => {
        if(event.target.closest('.status') != status)
        statusList.classList.remove('status__list--active');
    });

    // Changing between displaying the request's information and request's candidates
    const candidateBtn = document.querySelector('.reqDetails__candidate');
    const requestBtn = document.querySelector('.reqDetails__request');
    const candidatesContainer = document.querySelector('.reqDetails__candidates');
    const requestContainer = document.querySelector('.reqDetails__details');
    const detailsBtn = document.querySelectorAll('.candidate__btn');

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