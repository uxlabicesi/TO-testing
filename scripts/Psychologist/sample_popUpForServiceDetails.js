
window.addEventListener('load', () => {

    let informationPopUpConfirmation = {
        title: "¡MUY BIEN!",
        text: "Has tomado este servicio, tendrás asignación en las próximas 24 horas.",
        btn: "Confirmar Aplicación",
        goTo: "",
        goBack: "Cancelar la solicitud",
        returnTo: "serviceDetails.html",
    };

    let informationPopUpCancel = {
        title: "¡ATENCIÓN!",
        text: "¿Deseas eliminar la aplicación para atender esta solicitud?",
        btn: "Deseo mantener la aplicación",
        goTo: "",
        goBack: "Deseo no tomar la solicitud",
        returnTo: "serviceDetails.html",
    };
      
    let rootForPopUp = ".popUp";

    let buttonFinishProcess = document.getElementById('btn--main');

    buttonFinishProcess.addEventListener('click', () => {
        if(buttonFinishProcess.classList.contains('complete-request--applied')){
            createPopUp(informationPopUpCancel, rootForPopUp);
        }else{            
            createPopUp(informationPopUpConfirmation, rootForPopUp);
            buttonFinishProcess.innerHTML = "Cancelar este proceso";
            buttonFinishProcess.classList.add("complete-request--applied");
        }
    });


});
