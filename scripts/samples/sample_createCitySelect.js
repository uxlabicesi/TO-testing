window.addEventListener('load', () => {

    const optionList = [
        {
            value: 'O1',
            text: 'Opción 1'
        },
        {
            value: 'O2',
            text: 'Opción 2'
        },
        {
            value: 'O3',
            text: 'Opción 3'
        },
        {
            value: 'O4',
            text: 'Opción 4'
        },
        {
            value: 'O5',
            text: 'Opción 5'
        },
    ];

    document.querySelector('.btn--blueAdd').addEventListener('click', () => {
        createCitySelect(optionList);
    });
});