// empty function will be updated after window load.
let createNotification = (information, root = '.content', srcNotifIcon = "./resources/checkIcon.svg") => {};

window.addEventListener('load', () => {

    /**
     * 
     * @param { } information 
     * 
     * Para crear una tarjeta de solicitud se debe utilizar la función createRequest en /scripts/createRequest.js.
     *  La función recibe un JSON con la siguiente estructura:
     *  "job": "DISEÑADOR DE MEDIOS INTERACTIVOS",
     *  "cities": ["Santiago de Cali, Valle del Cauca"],
     *  "status": [2, 1], // mismo nivel de estados para las solicitudes
     *  "date": "25/03/2020",
     *  "isNew": false,
     *  "id": "sample_id",
     *  // for database direct info
     *  "text": String
     */

    createNotification = (information, root = '.content', srcNotifIcon = "./resources/checkIcon.svg") => {


        let notificationContainer = document.querySelector(root);

        let date = information.date;
        let isNew = information.isNew;
        let identificator = information.id;

        // create the div for card notification
        let notification = document.createElement('div');
        // assign style for card content
        notification.classList.add('content__card');

        // define main style ( inactive or active )
        if(!isNew){
            notification.classList.add('content__card--inactive');
        }
        // create message main p
        let message = document.createElement('p');
        message.classList.add("card__employment")

        if(information.text!==undefined && information.text!==null && information.text!=="" ){
            // for mesages taht no represent status change
            let baseInfo = information.text;
            // for unique string
            message.innerHTML = baseInfo;
        }else{
            // for status related messages
            let job = information.job;
            let cities = information.cities;
            let status = information.status;
            // modify style massage for one or multiple cities
            if(cities.length > 1) {
                cities = 'varias ciudades';
            } else {
                cities = information.cities[0];
            }
            // define status line
            let statusDescriptor = "";
            switch (status[0]) {
                case -1:
                    statusDescriptorL = "Borrador";
                    break;
                case 0:
                    statusDescriptor = "Pendiente de pago";
                    break;
                case 1:
                    statusDescriptor = "En verificación";
                    break;
                case 2:
                    statusDescriptor = "Iniciado";
                    break;
                case 3:
                    statusDescriptor = "En proceso de búsqueda";
                    break;
                case 4:
                    statusDescriptor = "En espera de selección";
                    break;
                case 5:
                    statusDescriptor = "Finalizó el proceso";
                    break;
            }
            // for individual parameters
            message.innerHTML = "Tu solicitud de " + "<strong>"+job+"</strong> en <strong>" + cities + "</strong> está en " + "<strong>" + statusDescriptor + "</strong>";
        }
        // create image for notification card
        let iconSupport = document.createElement('img');
        iconSupport.src = srcNotifIcon;
        // create DOM
        notificationContainer.appendChild(notification);
        notification.setAttribute("id-request", identificator) 
        notification.appendChild(iconSupport);
        notification.appendChild(message);
    }
});