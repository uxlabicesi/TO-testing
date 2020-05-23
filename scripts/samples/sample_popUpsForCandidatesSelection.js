window.addEventListener('load', () => {

   const selectionStateButton = document.querySelector('.btn__selection');
   const selectionState = document.querySelector('.reqDetails__selected');
   const candidateEvaluationBtn = document.querySelector('.btn__evaluation');
   const selectionDeleteBtn = document.querySelector('.btn--medium--cancel');

   let informationPopUp = {
      title: "Candidato seleccionado",
      text: "Seleccionaste a Fabio Arias, como candidato para Diseñador UX",
      btn: "Continuar",
      goTo: "",
   };

   
   let informationPopUpLastCandidate50 = {
      candidate: "Juan David Pelaez", // name
      job:"Diseñador de Medios Interactivos", // job name
      nextstate: 5, // 5 para pendiente de pago || 0 para finalizó el proceso
      title: "Candidato seleccionado",
      text: "Seleccionaste a tu último candidato",  // optional if state, job and candidate was entered
      btn: "Finalizar selección e ir a pagar",
      goTo: "#", // cambiar estado e ir al pago
      goBack: "Seleccionar e ir a verificar candidatos", // ir a los candidatos
      returnTo:"#",//text url for a option,
   };

   let informationPopUpLastCandidate100 = {
      candidate: "Juan David Pelaez", // name
      job:"Diseñador de Medios Interactivos", // job name
      nextstate: 0, // 5 para pendiente de pago || 0 para finalizó el proceso
      title: "Candidato seleccionado",
      text: "Seleccionaste a tu último candidato", // optional if state, job and candidate was entered
      btn: "Seleccionar y finalizar el proceso",
      goTo: "", // cambiar estado e ir a solicitudes completadas
      goBack: "Seleccionar e ir a verificar candidatos", // test for second option
      returnTo: "#", // ir a los candidatos
    
   };


   let informationPopUpEvaluationRequired = {
      title: "Aún nos falta un paso",
      text: "Recuerda evaluar el candidato antes de seleccionarlo",
      btn: "Evaluar",
      goTo: "",
   };

   let informationPopUpDeleteCandidate = {
      title: "Atención",
      text: "Estás a punto de eliminar la selección de este candidato",
      btn: "Eliminar y seleccionar otro candidato",
      goTo: "",
      goBack: "Mantener la selección de este candidato",
   };

   let rootForPopUp = ".popUp";

   //createPopUp(informationPopUpLastCandidate100, rootForPopUp);

   selectionStateButton.addEventListener('click', (ev) => {

      if(selectionStateButton.classList.contains('btn--medium--cancel')){
         createPopUp(informationPopUpDeleteCandidate, rootForPopUp);
      }

      if(!candidateEvaluationBtn.classList.contains('btn__evaluation--select')){
         createPopUp(informationPopUpEvaluationRequired, rootForPopUp);
      }  else if(!selectionStateButton.classList.contains('btn--medium--cancel')){
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