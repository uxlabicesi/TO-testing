window.addEventListener('load', () => {
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

    let informationHelp = {
        title: "¿Necesitas ayuda?",
        //
        text: "Ana María Lemos <a href=\"mailto:ana_lemos@ezenza.co\" class=\"link__mail\">(ana_lemos@ezenza.co)</a>  te ayudará a través <a href=\"#\" class=\"link__wtsp\">whatsapp</a> o llama al número <a href=\"tel:+573153734144\" class=\"link__mail\">+573153734144</a>",
        btn: "Continuar",
        goTo: "",
        goBack: "",
        wtsppLink: "https://wa.me/573153734144?text=Hola,%20necesito%20ayuda%20en%20Talentos%20Online.",
     };

     const helpBtn = document.querySelector('.mainnav__footerHelp');

    helpBtn.addEventListener('click', (ev) =>{
        ev.preventDefault();
        createPopUp(informationHelp, root = '.popUp');
    });
    

    });