window.addEventListener('load', () => {
    const autocompleteButton = document.querySelector('.btn--autocomplete');

    autocompleteButton.addEventListener('click', (ev) => {
       ev.preventDefault();
    });

    const cleanFormButton = document.querySelector('.btn--clean');

    cleanFormButton.addEventListener('click', (ev) => {
       ev.preventDefault();
    });
});