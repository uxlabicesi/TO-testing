// empty function will be updated after window load.
let createPopUp = (information, root='.popUp') => {};

window.addEventListener('load', () => {
    
    /**
     * 
     * @param { } information 
     * 
     * 
     */

    createPopUp = (information, root='.popUp') => {
        let popUpContainer = document.querySelector(root);
        let popUp = document.querySelector('.popUp');

        popUpContainer.classList.remove('popUp--inactive');

        let popUpTitle = information.title;
        let popUpText = information.text;
        let popUpBtn = information.btn;
        let goTo = information.goTo;
    
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
        bodyBtn.classList.add('popUp__contentBodyBtn','btn','btn--large');
        bodyBtn.innerText = popUpBtn;
        
        bodyBtn.addEventListener('click', () =>{
            window.location.href = goTo;
        });

        body.appendChild(bodyTitle);
        body.appendChild(bodyText);
        body.appendChild(bodyBtn);
        popUpContentClose.appendChild(popUpContentCloseX);
        popUpContent.appendChild(popUpContentClose);
        popUpContent.appendChild(body);
        popUp.appendChild(popUpContent);

        popUpContentClose.addEventListener('click',function(){
            body.classList.add('popUp__contentBody--inactive');
            popUpContainer.classList.add('popUp--inactive');
        });
    
        bodyBtn.addEventListener('click',function(){
            body.classList.add('popUp__contentBody--inactive');
            popUpContainer.classList.add('popUp--inactive');
        });
        
        popUp.onclick = function(event) {
            if (event.target == popUp) {
                body.classList.add('popUp__contentBody--inactive');
                popUpContainer.classList.add('popUp--inactive');
            }
        }
    }

    /*
        Opens and closes the pop up modal by changing its style
     */
    

});
