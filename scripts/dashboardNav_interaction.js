/*
    This script has the function of show or hide the navigation menu by adding or removing the
    "mainnav--active" class from the navigation when the user clicks or taps on the burger menu
    icon on the small screen version of the dashboard
 */
window.addEventListener('load', () => {

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
});