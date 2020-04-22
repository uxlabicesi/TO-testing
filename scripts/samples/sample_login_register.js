/**
 * The following code fragment, modify the data for pop up creation,
 * refers to createPopUp.js and login_register.js files for documentation and more info.
 * 
 * Warning, removing this script makes mandatory to re-write trigger event for pop up creation
 * 
 * updateDataForPopUp function, can be used for update the info based on server response.
 * 
 */

window.addEventListener('load', () => {
    updateDataForPopUp ({
        title: "Registro Exitoso",
        text: "Ahora podemos entregarte el mejor talento para tu organización.",
        btn: "¡Quiero encontrar el mejor talento!",
        goTo: "./dashboard_main.html", 
    });
});