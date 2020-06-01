    /**
     * @description Opens and closes the pop up modal by changing its style, can be called directly rewriting the trigger event, or using defalt way (for login_register)by using the function 
     * updateDataForPopUp, for more information go to login register.
     * 
     * @param { } information object contains the following structure JSON:
     * {
     * title: text for main title
     * text: description text
     * btn: text for button
     * goTo: text url for button
     * goBack: text for a option
     * returnTo: text url for a option
     * }
     * 
     */

    // empty function will be updated after window load.
    let createPopUp = (information, root = '.popUp') => {};

    window.addEventListener('load', () => {

        /*
        Opens and closes the pop up modal by changing its style
        */

        createPopUp = (information, root = '.popUp') => {
            let popUpContainer = document.querySelector(root);
            let popUp = document.querySelector(root);

            popUpContainer.classList.remove('popUp--inactive');

            let popUpTitle = information.title;
            let popUpText = information.text;
            let popUpBtn = information.btn;
            let goTo = information.goTo;
            let goBack = information.goBack;
            let returnTo = information.returnTo;
            let candidate = information.candidate;
            let job = information.job;
            let nextstate = information.nextstate;



            let functionGo = information.functionGoto;
            let functionBack = information.functionGoBack;
    

    

            if( candidate !== null && candidate !== undefined && candidate !== '' ){
                if( job !== null && job !== undefined && job !== '' ){
                    popUpText = "Seleccionaste a <strong>" + candidate.toString() + "</strong> para el cargo <strong>" + job.toString() + "</strong>";
                    if(nextstate === 0){
                        popUpText = popUpText + "<br><br>Finalizaste tu proceso de selección, estás cerca de tener el mejor talento." 
                    }else{
                        popUpText = popUpText + "<br><br>Tu proceso está a punto de finalizar" 
                    }

                }
            }

      /*candidate: "Juan David Pelaez", // name
      job:"Diseñador de Medios Interactivos", // job name
      nextstate: 0, // 5 para pendiente de pago || 0 para finalizó el proceso
      title: "Candidato seleccionado",
      text: "Seleccionaste a tu último candidato",
      btn: "Completar selección y finalizar el proceso",
      goTo: "", // cambiar estado e ir a solicitudes completadas
      goBack: "Seleccionar e ir a verificar candidatos", // test for second option
      returnTo: "#", // ir a los candidatos*/
           
            //
            // let popUp = document.createElement('div');
            // popUp.classList.add('popUp');

            let popUpContent = document.createElement('div');
            popUpContent.classList.add('popUp__content');

            let popUpContentClose = document.createElement('div');
            popUpContentClose.classList.add('popUp__contentClose');

            let popUpContentCloseX = document.createElement('span');
            popUpContentCloseX.classList.add('popUp__contentCloseX');
            popUpContentCloseX.innerText = 'x';

            let body = document.createElement('div');
            body.classList.add('popUp__contentBody');

            let bodyTitle = document.createElement('h2');
            bodyTitle.classList.add('popUp__contentBodyTitle');
            bodyTitle.innerHTML = popUpTitle;

            let bodyText = document.createElement('h2');
            bodyText.classList.add('popUp__contentBodyText');
            bodyText.innerHTML = popUpText;


            let bodyBtn = document.createElement('button');
            bodyBtn.classList.add('popUp__contentBodyBtn', 'btn', 'btn--large');
            bodyBtn.innerText = popUpBtn;

            bodyBtn.addEventListener('click', (ev) => {
                if(goTo!==''){
                    ev.preventDefault();
                    window.location.href = goTo;
                }else if(goTo!=='' && information.functionGoto !== null && information.functionGoto !== undefined){
                    ev.preventDefault();
                    functionGo();
                    window.location.href = goTo;
                }else if(information.functionGoto !== null && information.functionGoto !== undefined){
                    functionGo();
                    ev.preventDefault();
                }else{
                    ev.preventDefault();
                }
            });


            let bodyBack = document.createElement('span');
            bodyBack.classList.add('popUp__contentBodyBack');
            
            if(goBack != undefined){
                bodyBack.innerText = goBack;
                //bodyBack.setAttribute('href',returnTo);
            }


            bodyBack.addEventListener('click', (ev) => {
                ev.preventDefault();
                if(goBack!==''){
                    window.location.href = returnTo;
                }
                if(goBack!=='' && information.functionGoBack !== null && information.functionGoBack !== undefined){
                    functionBack();
                    window.location.href = returnTo;
                }
                if(information.functionGoBack !== null && information.functionGoBack !== undefined){
                    functionBack();
                }
            });


            body.appendChild(bodyTitle);
            body.appendChild(bodyText);
            if(goTo!==''||goTo!==null||goTo!==undefined){
                body.appendChild(bodyBtn);
            }
            body.appendChild(bodyBack);
            popUpContentClose.appendChild(popUpContentCloseX);
            popUpContent.appendChild(popUpContentClose);
            popUpContent.appendChild(body);
            popUp.appendChild(popUpContent);

            popUpContentClose.addEventListener('click', function () {
                body.classList.add('popUp__contentBody--inactive');
                popUpContainer.classList.add('popUp--inactive');
                popUp.removeChild(popUpContent);
            });

            bodyBtn.addEventListener('click', function () {
                body.classList.add('popUp__contentBody--inactive');
                popUpContainer.classList.add('popUp--inactive');
                popUp.removeChild(popUpContent);
            });

            popUp.onclick = function (event) {
                if (event.target == popUp) {
                    body.classList.add('popUp__contentBody--inactive');
                    popUpContainer.classList.add('popUp--inactive');
                    popUp.removeChild(popUpContent);
                }
            }


            // for wtspp on help
            if(information.wtsppLink !== null && information.wtsppLink !== undefined  && information.wtsppLink !== ''){
                const linkToWA = document.querySelector('.link__wtsp');
                linkToWA.href = information.wtsppLink;
                linkToWA.target = '_blank';
            }

        }




    });