let candidatesTabButton = document.querySelector('.reqDetails__candidates__tabButton');

    candidatesTabButton.addEventListener('click', () => {
       // if you want to re-write all trigger... using directly the function candidates(), or use the function updateCandidatesInfo() for changing values of candidateInfo (variable)
       // (do-not remove, unless you will re-write trigger and use option 2) require for using the updateCandidatesInfo
       candidates(candidateInfo);
    });