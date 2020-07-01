window.addEventListener('load', () => {

    let buttonFinishProcess = document.getElementById('btn--secondary');

    buttonFinishProcess.addEventListener('click',( ) => {
        createPopUpPostOffer([
            '01','02',
        ]);
    });
});

