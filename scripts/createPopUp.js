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

            bodyBtn.addEventListener('click', () => {
                window.location.href = goTo;
            });

            let bodyBack = document.createElement('a');
            bodyBack.classList.add('popUp__contentBodyBack');
            
            if(goBack != undefined){
                bodyBack.innerText = goBack;
                bodyBack.setAttribute('href',returnTo);
            }

            body.appendChild(bodyTitle);
            body.appendChild(bodyText);
            body.appendChild(bodyBtn);
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

        }




    });