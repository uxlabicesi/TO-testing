// empty function will be updated after window load.
let createNotification = (information, root = '.content') => {};

window.addEventListener('load', () => {

    /**
     * 
     * @param { } information 
     * 
     * Para crear una tarjeta de solicitud se debe utilizar la función createRequest en /scripts/createRequest.js.
     *  La función recibe un JSON con la siguiente estructura:
     *  "job": "DISEÑADOR DE MEDIOS INTERACTIVOS",
     *  "cities": ["Santiago de Cali, Valle del Cauca"],
     *  "status": [2, 1],
     *  "date": "25/03/2020",
     *  "isNew": false,
     *  "id": "sample_id",
     */

    createNotification = (information, root = '.content') => {


        let notificationContainer = document.querySelector(root);

        let job = information.job;
        let cities = information.cities;
        let status = information.status;
        let date = information.date;
        let isNew = information.isNew;
        let identificator = information.id;

        if (cities.length > 1) {
            cities = 'varias ciudades';
        } else {
            cities = information.cities[0];
        }




        let notification = document.createElement('div');
        notification.classList.add('content__card');
        if(!isNew){
            notification.classList.add('content__card--inactive');
        }

        let statusDescriptor = "";
        switch (status[0]) {
            case 0:
                statusDescriptor = 'Pendiente de pago';
                break;

            case 1:
                statusDescriptor =  'Iniciado';
                break;

            case 2:
                statusDescriptor =  'En proceso de búsqueda';
                break;

            case 3:
                statusDescriptor =  'En espera de selección';
                break;

            case 4:
                statusDescriptor =  'Finalizando el proceso';
                break;
        }


        let message = document.createElement('p');
        message.classList.add("card__employment")
        message.innerHTML = "Tu solicitud de " + "<strong>"+job+"</strong> en <strong>" + cities + "</strong> está en " + "<strong>" + statusDescriptor + "</strong>"

        let iconSupport = document.createElement('img');
        iconSupport.src = "./resources/checkIcon.svg";

        notificationContainer.appendChild(notification);
        notification.setAttribute("id-request", identificator) 
        notification.appendChild(iconSupport);
        notification.appendChild(message);
    }
});