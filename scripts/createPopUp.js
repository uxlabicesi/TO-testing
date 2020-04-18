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

        let popUpTitle = information.title;
        let popUpText = information.text;
        let popUpBtn = information.btn;
    
        let popUp = document.createElement('div');
        popUp.classList.add('popUp');

        let popUpContent = document.createElement('div');
        popUpContent.classList.add('popUp__content');

        let popUpContentClose = document.createElement('div');
        popUpContentClose.classList.add('popUp__contentClose');

        let popUpContentCloseX = document.createElement('span');
        popUpContentCloseX.classList.add('popUp__contentCloseX');
        popUpContentCloseX.innerHTML = 'x';

        let body = document.createElement('div');
        body.classList.add('popUp__contentBody');

        let bodyTitle = document.createElement('h2');
        bodyTitle.classList.add('popUp__contentBodyTitle');
        bodyTitle.innerHTML = popUpTitle;

        let bodyText = document.createElement('h2');
        bodyText.classList.add('popUp__contentBodyText');
        bodyText.innerHTML = popUpText;


        let bodyBtn = document.createElement('h2');
        bodyBtn.classList.add('popUp__contentBodyBtn','btn','btn--large');
        bodyBtn.innerText = popUpBtn;

        body.appendChild(bodyTitle);
        body.appendChild(bodyText);
        body.appendChild(bodyBtn);
        popUpContentClose.appendChild(popUpContentCloseX);
        popUpContent.appendChild(popUpContentClose);
        popUpContent.appendChild(body);
        popUp.appendChild(popUpContent);
        popUpContainer.appendChild(popUp);
    }

    // let sample = {
    //     "title": "Registro Exitoso",
    //     "text": "Ahora podemos entregarte el mejor talento para tu organización.",
    //     "title": "¡Quiero encontrar el mejor talento!"
    // }

    // createPopUp(sample);

    /*
        Opens and closes the pop up modal by changing its style
     */
    var popUp = document.querySelector('.popUp');
    var close = document.querySelector('.popUp__contentClose');
    var body = document.querySelector('.popUp__contentBody');
    var btn = document.querySelector('.popUp__contentBodyBtn');

    close.addEventListener('click',function(){
        popUp.style.display = "none";
        body.style.position = "inherit";
        body.style.height = "auto";
        body.style.overflow = "visible";
    });

    btn.addEventListener('click',function(){
        popUp.style.display = "none";
        body.style.position = "inherit";
        body.style.height = "auto";
        body.style.overflow = "visible";
    });
    
    popUp.onclick = function(event) {
        if (event.target == popUp) {
            popUp.style.display = "none";
            body.style.position = "inherit";
            body.style.height = "auto";
            body.style.overflow = "visible";
        }
    }

});
