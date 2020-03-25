function handleLoad() {

    let menuButton = document.querySelector('.mainheader__menu');

    document.addEventListener('click', (event) => {
        let target = event.target;
        let nav = document.querySelector('.mainnav');
        if(target.closest('.mainnav') == null && target.closest('.mainheader__menu') != menuButton) {
            nav.classList.remove('mainnav--active');
        }
        console.log(target);
    });

    menuButton.addEventListener('click', () => {
        let nav = document.querySelector('.mainnav');
        nav.classList.add('mainnav--active');
        console.log('evento');
    });
}

window.addEventListener('load', handleLoad);