/**
 * The following code fragment, modify the data for pop up creation,
 * refers to createPopUp.js for login_register.js files for documentation and more info.
 * 
 * Warning, removing this script makes mandatory to re-write trigger event for pop up creation
 * 
 */

window.addEventListener('load', () => {

    const registerBtn = document.querySelector('.register__button');

    let informationPopUp = {
        title: "Registro Exitoso",
        text: "Ahora podemos entregarte el mejor talento para tu organización.",
        btn: "¡Quiero encontrar el mejor talento!",
        goTo: "./dashboard_main.html",
    };

    let rootForPopUp = ".popUp";

    registerBtn.addEventListener('click', () => {
        //checkValid(); 
        //if(isValid) {
        createPopUp(informationPopUp, rootForPopUp);
        //console.log("click");
        //}
    });

    // replace for start the login images and functions.
    startloginRegister("./resources/showPass.svg", "./resources/notShowPass.svg");


});