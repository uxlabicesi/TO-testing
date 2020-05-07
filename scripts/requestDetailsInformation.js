/**
     * 
     * @param { } information 
     * 
     *To visualize a request's details, the requestDetailedInformation function must be utilized from /scripts/requestDetailsInformation.js.
        The function receives an Object with the following structure:
        {
        name: **String** with the job's name,
        amount: **String** with te required amount of candidates,
        status **Array** with two numbers, the first one indicates in which step of the process is the 
        request, it's a number between 0 and 4; and the second one is either 0 or 1, 0 if the user still
        needs to make an action and 1 if he doesn't need to make any action,
        remainingTime: **Número** with the remaining days,
        positionLevel: **String** with the job's level,
        cities: **String array** with the cities names,
        amountPerCity: **array** number of people per city (In the same order as cities),
        time: **String** with the working days,
        hiring: **String** with the type of contract,
        wage: **String** with the wage,
        functions: **Array** with the tasks for the job,
        academicLevel: **String** with the academic level,
        profession: **String Array ** with the professions,
        knowledge: **String** with the required knowledge,
        observations: **String** with the observations,
        skills: **Array** with the required skills.
        requirements: **Array** with the job's requirements,
        subtotal **Number**,
        isDraft: **boolean**,
        isCompleted: **boolean**, // activate the use of 'reqDetails__contentSection--inactive' class
        // the following were added for suppor new level selection system
        levelResponsability: **Number** // 0: Low, 1: mid: high
        levelDecision: **Number** // 0: Low, 1: mid: high
        peopleInCharge: true // 
     */

// empty function will be updated after window load.
let requestDetailedInformation = (info) => {};

window.addEventListener("load", () => {
    requestDetailedInformation = (info) => {
        const title = document.querySelector(".reqDetails__title");
        const name = document.querySelector(".name");
        const status = document.querySelector(".status");
        const statusCurrent = document.querySelector(".status__current");
        const statusList = document.querySelectorAll(".status__listItem");
        const remainingTime = document.querySelector(".reqDetails__remainingTime");
        const positionLevel = document.querySelector(".positionLevel");
        const city = document.querySelector(".city");
        //const amount = document.querySelector('.city');
        const time = document.querySelector(".time");
        const hiring = document.querySelector(".hiring");
        const wage = document.querySelector(".wage");
        const functions = document.querySelector(".reqDetails__infoSection--functions");
        const academicLevel = document.querySelector(".academicLevel");
        const profession = document.querySelector(".profession");
        const knowledge = document.querySelector(".knowledge");
        const observations = document.querySelector(".observations");
        const skills = document.querySelector(".reqDetails__infoSection--skills");

        const candidatesTabButton = document.querySelector(".reqDetails__candidates__tabButton");
        const evaluationTabButton = document.querySelector(".reqDetails__evaluation__tabButton");


        // added for level

        const responsability = document.querySelector(".responsability");
        const decision = document.querySelector(".decision");
        const incharge = document.querySelector(".incharge");

        switch(info.levelResponsability){
            case 0:
                responsability.innerHTML = "Bajo";
            break;
            case 1:
                responsability.innerHTML = "Medio";
            break;
            case 2:
                responsability.innerHTML = "Alto";
            break;
        }

        switch(info.levelDecision){
            case 0:
                decision.innerHTML = "Bajo";
            break;
            case 1:
                decision.innerHTML = "Medio";
            break;
            case 2:
                decision.innerHTML = "Alto";
            break;
        }

        incharge.innerHTML = info.peopleInCharge==true?"Sí":"No";

        /*info.requirements.forEach((e) => {
                let item = document.createElement('li');
                item.innerHTML = e;
                requirements.appendChild(item);
            });*/

        info.skills.forEach((e) => {
            let item = document.createElement("li");
            item.innerHTML = MayusFirst(e);
            skills.appendChild(item);
        });

        observations.innerHTML = MayusFirst(info.observations);

        knowledge.innerHTML = info.knowledge;

        //profession.innerHTML = MayusFirst(info.profession);
        // mod for multiples professions
        let itemForProfessions = document.createElement('div');
        itemForProfessions.classList.add('reqDetails__infoSection--cities');
        let professionsAsString = "";
        info.profession.forEach((e, index) => {
            if(index < info.profession.length-1){
                professionsAsString += MayusFirst(e) + ", ";
            }else{
                professionsAsString += MayusFirst(e) + ".";
            }
        });
        itemForProfessions.innerHTML = professionsAsString;
        profession.appendChild(itemForProfessions);




        academicLevel.innerHTML = MayusFirst(info.academicLevel);

        info.functions.forEach((e) => {
            let item = document.createElement("li");
            item.innerHTML = MayusFirst(e);
            functions.appendChild(item);
        });

        wage.innerHTML = info.wage;

        hiring.innerHTML = MayusFirst(info.hiring);

        time.innerHTML = MayusFirst(info.time);

        //city.innerHTML = info.city;

        info.cities.forEach((e, index) => {
            let item = document.createElement("div");
            item.classList.add("reqDetails__infoSection--cities");
            //item.style = "margin-left:15px;"
            item.innerHTML = "" + e + " (" + info.amountPerCity[index] + ")";
            city.appendChild(item);
        });

        positionLevel.innerHTML = MayusFirst(info.positionLevel);

        if (info.status[0] === -1) {
            remainingTime.innerHTML = "Borrador";
            status.classList.add("status--gray");
            candidatesTabButton.classList.add("reqDetails__candidates__tabButton--hide");
            evaluationTabButton.classList.add("reqDetails__candidates__tabButton--hide");
        } else {
            evaluationTabButton.classList.add("reqDetails__candidates__tabButton--hide");
            if (info.remainingTime === 1) {
                remainingTime.innerHTML = "Falta 1 día";
            } else {
                remainingTime.innerHTML = "Faltan " + info.remainingTime + " días";
            }

            if (status[1] === 0) {
                status.classList.add("status--yellow");
            } else {
                status.classList.add("status--green");
            }

            candidatesTabButton.classList.remove("reqDetails__candidates__tabButton--hide");
            // Do not erase, its required for global evaluation process
            /*if (info.status[0] === 5) {
                evaluationTabButton.classList.remove("reqDetails__candidates__tabButton--hide");
            }*/
        }
        // create buttons bar and button por interaction
        createInteractionButtons(info.status[0], info.isDraft, info.isCompleted);

        switch (info.status[0]) {
            case -1:
                statusCurrent.innerHTML = "Borrador";
                break;
            case 0:
                statusCurrent.innerHTML = "Pendiente de pago";
                break;

            case 1:
                statusCurrent.innerHTML = "En verificación";
                break;

            case 2:
                statusCurrent.innerHTML = "Iniciado";
                break;

            case 3:
                statusCurrent.innerHTML = "En proceso de búsqueda";
                break;

            case 4:
                statusCurrent.innerHTML = "En espera de selección";
                break;

            case 5:
                statusCurrent.innerHTML = "Finalizó el proceso";
                break;
        }

        if (status[0] === -1) {
            statusList.add("status--inactive");
        } else {
            statusList.forEach((e, index) => {
                if (index < info.status[0]) {
                    e.classList.add("status--completed");
                } else if (index === info.status[0]) {
                    if (info.status[1] === 0) {
                        e.classList.add("status--yellow");
                    } else {
                        e.classList.add("status--green");
                    }
                } else {
                    e.classList.add("status--inactive");
                }
            });
        }

        title.innerHTML = MayusFirst(info.name) + " (" + info.amount + ")";
        name.innerHTML = MayusFirst(info.name);

        // This function formats text so the first letter of a string is in upper case and the
        // rest of it is lower case
        function MayusFirst(string) {
            return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
        }

        // this fragment add clases for inactive view
        if (info.isCompleted) {
            functions.classList.add('reqDetails__contentSection--inactive');
            skills.classList.add('reqDetails__contentSection--inactive');
            title.classList.add('reqDetails__contentSection--inactive');
            name.classList.add('reqDetails__contentSection--inactive');
            status.classList.add('reqDetails__contentSection--inactive');
            statusCurrent.classList.add('reqDetails__contentSection--inactive');
            //statusList.classList.add('reqDetails__contentSection--inactive');
            remainingTime.classList.add('reqDetails__contentSection--inactive');
            positionLevel.classList.add('reqDetails__contentSection--inactive');
            city.classList.add('reqDetails__contentSection--inactive');
            //const amount = document.querySelector('.city');
            time.classList.add('reqDetails__contentSection--inactive');
            hiring.classList.add('reqDetails__contentSection--inactive');
            wage.classList.add('reqDetails__contentSection--inactive');
            functions.classList.add('reqDetails__contentSection--inactive');
            academicLevel.classList.add('reqDetails__contentSection--inactive');
            profession.classList.add('reqDetails__contentSection--inactive');
            knowledge.classList.add('reqDetails__contentSection--inactive');
            observations.classList.add('reqDetails__contentSection--inactive');
            skills.classList.add('reqDetails__contentSection--inactive');

            document.querySelectorAll('h3, strong, li').forEach((e) => {
                e.classList.add('reqDetails__contentSection--inactive');
            });
        }


    };

    /**
     * The following aux function helps to create and define buttos for interaction depending on global stus for the request.
     * @param {} status 
     */

    function createInteractionButtons(status, isDraft, isCompleted) {
        // status for normal reques non completed, just in progress
        if (!isCompleted) {
            let buttonBarBottom = document.createElement("div");
            buttonBarBottom.classList.add("canDetails__buttonsGroup");
            let buttonEvaluation = document.createElement("button");
            buttonEvaluation.classList.add("btn");
            buttonEvaluation.classList.add("btn--medium");
            let buttonFinishProcess = document.createElement("button");
            buttonFinishProcess.classList.add("btn");
            buttonFinishProcess.classList.add("btn--medium");



            switch (status) {
                case -1: // borrador
                    // the following code fragment adds button for continue creation process
                    let buttonContinue = document.createElement("button");
                    buttonContinue.classList.add("btn");
                    buttonContinue.classList.add("btn--medium");
                    buttonContinue.classList.add("btn--green");
                    buttonContinue.innerHTML = "Completar solicitud";
                    buttonBarBottom.appendChild(buttonContinue);

                    let buttonPay= document.createElement("button");
                    buttonPay.classList.add("btn");
                    buttonPay.classList.add("btn--medium");
                    buttonPay.classList.add("btn--blue");
                    buttonPay.innerHTML = "Pagar solicitud";
                    buttonBarBottom.appendChild(buttonPay);

                    buttonPay.classList.add("pay-request");
                    buttonContinue.classList.add("complete-request");

                    document
                        .querySelector(".reqDetails__content")
                        .appendChild(buttonBarBottom);
                    break;
                case 0: // pendiente de pago
                case 1: // en verificación
                case 2: // iniciado
                case 3: // en proceso de búsqueda
                case 4: // finalizó el proceso
                    // the following code fragment adds buttons for request evaluation and finish process but inactive
                    buttonEvaluation.classList.add("btn--inactive");
                    buttonEvaluation.innerHTML = "Calificar servicio";
                    buttonFinishProcess.classList.add("btn--inactive");
                    buttonFinishProcess.innerHTML = "Finalizar proceso";
                    buttonBarBottom.appendChild(buttonEvaluation);
                    buttonBarBottom.appendChild(buttonFinishProcess);

                    buttonEvaluation.classList.add("score-request");
                    buttonFinishProcess.classList.add("complete-request");

                    document
                        .querySelector(".reqDetails__content")
                        .appendChild(buttonBarBottom);
                    break;
                case 5:
                    // the following code fragment adds buttons for request evaluation and finish process active
                    buttonEvaluation.classList.add("btn--blue");
                    buttonEvaluation.innerHTML = "Calificar servicio";
                    buttonFinishProcess.innerHTML = "Finalizar proceso";
                    buttonBarBottom.appendChild(buttonEvaluation);
                    buttonBarBottom.appendChild(buttonFinishProcess);

                    buttonEvaluation.classList.add("score-request");
                    buttonFinishProcess.classList.add("complete-request");

                    document
                        .querySelector(".reqDetails__content")
                        .appendChild(buttonBarBottom);
                    break;
            }
        }else{
            // add button for new request based on the current completed request
            let buttonBarBottom = document.createElement("div");
            buttonBarBottom.classList.add("canDetails__buttonsGroup");
            let buttonRepeatRequest = document.createElement("button");
            buttonRepeatRequest.classList.add("btn");
            buttonRepeatRequest.classList.add("btn--medium");
            buttonRepeatRequest.classList.add("btn--green");
            buttonRepeatRequest.innerHTML = "Solicitar de nuevo";
            buttonBarBottom.appendChild(buttonRepeatRequest);
            // for create again same request
            buttonRepeatRequest.classList.add("duplicate-request");

            document
                .querySelector(".reqDetails__content")
                .appendChild(buttonBarBottom);
        }

    }
});