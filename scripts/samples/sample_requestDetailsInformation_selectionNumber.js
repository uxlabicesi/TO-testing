/**
 * The following fragment sets the value for number of selected candidates per request
 * the following function exposes for use the fragment.
 */

let setNumberOfSelectedCandidates = (selected, required) => {};

window.addEventListener('load', () => {
    const selectionNumberIndicator = document.querySelector('.reqDetails__selectedNumber');
    setNumberOfSelectedCandidates = (selected, required) => {
        selectionNumberIndicator.innerHTML = "["+selected+"/"+required+"]"
    }
});
