window.addEventListener('load', () => {
    const autocompleteButton = document.querySelector('.btn--autocomplete');

    autocompleteButton.addEventListener('click', (ev) => {
       ev.preventDefault();
    });

    const cleanFormButton = document.querySelector('.reqCreation__clear');

    cleanFormButton.addEventListener('click', clearRequestCreation);
});