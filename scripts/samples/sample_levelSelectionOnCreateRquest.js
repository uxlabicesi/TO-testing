window.addEventListener('load', () => {

    let resposabilityLevel = "";
    let decisionTaking = "";
    let peopleManagment = "";
    //let requestLevel = "";


    $('.select2__selector--responsability').on('select2:close', function (e) {
        let data = $('.select2__selector--responsability').select2('data');
        if (data.length > 0) {
            resposabilityLevel = data[0].text;
        }
        verifyRules();
        updateMessage();
    });

    $('.select2__selector--decition').on('select2:close', function (e) {
        let data = $('.select2__selector--decition').select2('data');
        if (data.length > 0) {
            decisionTaking = data[0].text;
        }
        
        verifyRules();
        updateMessage();
    });

    $('.select2__selector--incharge').on('select2:close', function (e) {
        let data = $('.select2__selector--incharge').select2('data');
        if (data.length > 0) {
            peopleManagment = data[0].text;
        }
        verifyRules();
        updateMessage();
    });

    /*$('.select2__selector--level').on('select2:close', function (e) {
         let data = $('.select2__selector--level').select2('data');
        if(data.length>0){
            requestLevel = data[0].text;
        }
        verifyRules();
    });*/

    function verifyRules() {
        let levelValue = '';
        if (resposabilityLevel === 'Bajo' || decisionTaking === 'Bajo') {
            levelValue = 'Operativo';
        }
         if (resposabilityLevel === 'Medio' || decisionTaking === 'Medio') {
            levelValue = 'Tactico';
        } 
         if (resposabilityLevel === 'Alto' || decisionTaking === 'Alto') {
            levelValue = 'Estrategico';
        }

        setValueAndUpdateView(levelValue);
    }



    function setValueAndUpdateView(stringValue) {
        let optionValue = '2';
        if (stringValue === 'Operativo') {
            optionValue = '4';
        } else if (stringValue === 'Tactico') {
            optionValue = '3';
        } else if (stringValue === 'Estrategico') {
            optionValue = '2';
        }
        $('.select2__selector--level').val(optionValue);
        $('.select2__selector--level').trigger('change');
    }

    let messageResponsability = document.querySelector('.reqCreation--msg--resp');
    let messageDecision = document.querySelector('.reqCreation--msg--decition');
    function updateMessage(){

        if (resposabilityLevel === 'Bajo') {
            messageResponsability.innerHTML="Su responsabilidad es realizar en forma eficaz las tareas que se asignan en la organización";
        }
        if (resposabilityLevel === 'Medio') {
            messageResponsability.innerHTML="Su responsabilidad es articular las actividades que se desarrollan en el nivel operativo, realizando análisis  y  gestión de  sus funciones.";
        }
        if (resposabilityLevel === 'Alto') {
            messageResponsability.innerHTML="Su responsabilidad es construir estrategias de la organización determinando los objetivos a mediano y  largo plazo y el modo en que la organización ha de interactuar con otras entidades.";
        }

        if (decisionTaking === 'Bajo') {
            messageDecision.innerHTML="La toma de decisiones está sujeta a la aprobación del jefe y recibe  supervisión y control por parte de éste.";
        }
        if (decisionTaking === 'Medio') {
            messageDecision.innerHTML="Puede tomar algunas decisiones en las actividades que realiza  que impacta su área y recibe acompañamiento  durante la ejecución de las tareas.";
        }
        if (decisionTaking === 'Alto') {
            messageDecision.innerHTML="Toma decisiones que contribuyen el logro de los objetivos empresariales, impactan proceso o grupo de procesos y está sujeto al control de roles gerenciales o dirección. ";
        }

        if(decisionTaking == ""){
            messageDecision.innerHTML = "Selecciona un nivel para mostrar la descripción del mismo";
        }

        if(resposabilityLevel == ""){
            messageResponsability.innerHTML = "Selecciona un nivel para mostrar la descripción del mismo";
        }
    }

    updateMessage();
});