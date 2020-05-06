/**
 * the following function asiign behaviour for request creation on editmode, info receives 1 value, but its a json for future extension.
 * @param {JSON} info requires the following JSON structure:
 * {
 *  link: 'dashboard_requestCreation.html', // where is located the request Creation Flow
 * }
 */

let assignEditButtonsBehaviour = (info) => {};

window.addEventListener('load', () => {

    assignEditButtonsBehaviour = (info) => {
        const editButtons = document.querySelectorAll('.reqDetails__editBtn');
        editButtons.forEach((e) => {
            e.addEventListener('click', (event) => {
                const value = event.target.dataset.reqcreationstate;
                localStorage.setItem('reqCreationState', value);
                window.location.href = "./"+info.link;
            });
        });
    }

});