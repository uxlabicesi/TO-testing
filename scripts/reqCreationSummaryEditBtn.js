window.addEventListener('load', () => {

    const editButtons = document.querySelectorAll('.reqDetails__editBtn');

    editButtons.forEach((e) => {
        e.addEventListener('click', (event) => {
            const value = event.target.dataset.reqcreationstate;
            console.log(value);
            localStorage.setItem('reqCreationState', value);
            window.location.href = '/dashboard_requestCreation.html';
        });
    });
});