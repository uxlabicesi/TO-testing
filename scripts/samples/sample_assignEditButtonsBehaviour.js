/**
 * the following sample function asigns behaviour for request creation on editmode, info receives 1 value, but its a json for future extension.
 * @param {JSON} info requires the following JSON structure:
 * {
 *  link: 'dashboard_requestCreation.html', // where is located the request Creation Flow
 * }
 */

window.addEventListener('load', () => {

    let sample = {
        link: 'dashboard_requestCreation.html', // where is located the request Creation Flow
    };
    assignEditButtonsBehaviour(sample);

});