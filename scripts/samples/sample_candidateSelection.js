window.addEventListener('load', () => {

   const selectionStateButton = document.querySelector('.btn__selection');
   const selectionState = document.querySelector('.reqDetails__selected');
   const candidateEvaluationBtn = document.querySelector('.btn__evaluation');

   let informationPopUp = {
      title: "Candidato seleccionado",
      text: "Seleccionaste a Fabio Arias, como candidato para Diseñador UX",
      btn: "Continuar",
      goTo: "",
   };

   let informationPopUpEvaluationRequired = {
      title: "Aún falta un paso",
      text: "Debes calificar al candidato antes de poder seleccionarlo",
      btn: "Calificar",
      goTo: "",
  };

   let rootForPopUp = ".popUp";

   selectionStateButton.addEventListener('click', (ev) => {

      if(!candidateEvaluationBtn.classList.contains('btn__evaluation--select')){
         createPopUp(informationPopUpEvaluationRequired, rootForPopUp);
      }  else {
         createPopUp(informationPopUp, rootForPopUp);
         selectionStateButton.innerHTML = "Eliminar selección";
         selectionStateButton.classList.add('btn--medium--cancel')
         selectionState.classList.add('reqDetails__selected--show');
         selectionState.classList.remove('reqDetails__selected--hide');
         selectionState.innerHTML = "Seleccionado";
      }

      // for change the button state
      // if (selectionStateButton.classList.contains('btn--medium--cancel')) {
      //    selectionStateButton.innerHTML = "Seleccionar candidato";
      //    selectionStateButton.classList.remove('btn--medium--cancel')
      //    selectionState.classList.remove('reqDetails__selected--show');
      //    selectionState.classList.add('reqDetails__selected--hide');
      //    selectionState.innerHTML = "";
      // } 
      ev.preventDefault();
   });

});