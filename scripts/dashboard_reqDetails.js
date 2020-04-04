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
}

window.addEventListener('load', handleLoad);