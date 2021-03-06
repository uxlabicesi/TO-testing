// empty function will be updated after window load.
let createRequest = (information, root='.content__requests') => {};

window.addEventListener('load', () => {
    
    /**
     * 
     * @param { } information 
     * 
     * Para crear una tarjeta de solicitud se debe utilizar la función createRequest en /scripts/createRequest.js.
        La función recibe un JSON con la siguiente estructura:
        {
        job: **String** con el nombre del cargo,
        amount: **Número** con la cantidad de personas requeridas para el cargo,
        time: **Número** de días faltantes,
        cities: **Arreglo** con el nombre de las ciudades,
        length: **String** Duración del contrato, ej: 'Término fijo a un año',
        days: **String** Días de trabajo, ej: 'Lunes a Viernes',
        date: **String** que contiene la fecha en formato DD/MM/YYYY ej. 25/03/2020,
        payment: **String** Pago con formato, ej: '2\'500.000 COP',
        draft: **booleano** indicando si se trata de un borrador, true indica que es borrador.
        finished: **booleano** indicando si se trata de una solicitud terminada, true indica que la solicitud finalizó 
        id: **string** identificador de la tarjeta
        finishedDate: *string* día en que finalizó el servicio ( pensando para la categoría completed)
        }
     */

    createRequestPsy = (information, root='.content__requests') => {


        let requestsContainer = document.querySelector(root);

        let jobTitle = information.job;
        let time = information.time;
        let city = information.cities;
        if (city.length > 1) {
            city = 'Varias ciudades';
        } else {
            city = information.cities[0];
        }
        let jobLength = information.length;
        let workDays = information.days;
        let creationDate = information.date;
        let payment = information.payment;
        let draft = information.draft;
        let finished = information.finished;
        let identificator = information.id;
        let finishedDate = information.finishedDate;

        let request = document.createElement('div');
        let requestCardContainer = document.createElement('div');
        let requestListContainer = document.createElement('div');
        requestListContainer.classList.add('request__list', 'request--inactive');
        requestCardContainer.classList.add('request__card');
        request.classList.add('request');

        request.appendChild(requestCardContainer);
        request.appendChild(requestListContainer);

        if (finished || draft) request.classList.add('request--gray');

        let text = document.createElement('p');
        if(information.amount > 1) {
            text.innerHTML = '<span>' + jobTitle + ' (' + information.amount +')</span> en ' + city + ' · <strong>' + payment + '</strong>';
        } else {
            text.innerHTML = '<span>' + jobTitle + '</span> en ' + city + ' · <strong>' + payment + '</strong>';
        }

        text.classList.add('request__information');
        requestListContainer.appendChild(text);

        let title = document.createElement('div');
        title.classList.add('request__title');

        let requestJobTitle = document.createElement('h2');
        requestJobTitle.classList.add('request__job');

        let newJobtittle = jobTitle.toLowerCase();
        jobTitle = newJobtittle[0].toUpperCase() + newJobtittle.slice(1);
        if (jobTitle.length < 13) {
            requestJobTitle.innerHTML = jobTitle;
        } else {
            requestJobTitle.innerHTML = jobTitle.slice(0, 12) + '...';
        }

        let requestTime = document.createElement('p');
        let requestTimeList = document.createElement('p');

        requestTime.classList.add('request__time');
        if (!draft) {
            if(!finished){
                if (time <= 0) {
                    time = 0;
                    requestTime.classList.add('request__time--delayed');
                    requestTime.classList.remove('request__time--ontime');
                    requestTimeList.classList.add('request__time--delayed');
                    requestTimeList.classList.remove('request__time--ontime');
                } else {
                    requestTime.classList.remove('request__time--delayed');
                    requestTime.classList.add('request__time--ontime');
                    requestTimeList.classList.remove('request__time--delayed');
                    requestTimeList.classList.add('request__time--ontime');
                }
                requestTime.innerHTML = 'Faltan ' + time + ' días';
                requestTimeList.innerHTML = 'Faltan ' + time + ' días';
            }else{
                requestTime.innerHTML = '(' + finishedDate + ')'; 
                requestTimeList.innerHTML = '(' + finishedDate + ')'; 
            }
        } else {
            requestTime.innerHTML = 'Borrador';
            request.classList.add('request--draft');
        }

        title.appendChild(requestJobTitle);
        title.appendChild(requestTime);
        requestCardContainer.appendChild(title);

        let requestInfo = document.createElement('div');
        requestInfo.classList.add('request__information');

        let requestCity = document.createElement('p');
        requestCity.innerHTML = city;

        let requestLength = document.createElement('p');
        requestLength.innerHTML = jobLength;

        let requestDays = document.createElement('p');
        requestDays.innerHTML = workDays;

        let requestDate = document.createElement('p');
        if(creationDate != undefined){
            requestDate.innerHTML = "Fecha de entrega: " + creationDate;
        }

        requestInfo.appendChild(requestCity);
        requestInfo.appendChild(requestLength);
        requestInfo.appendChild(requestDays);
        requestInfo.appendChild(requestDate);
        requestCardContainer.appendChild(requestInfo);

        let requestPrice = document.createElement('h4');
        requestPrice.classList.add('request__price');
        requestPrice.innerHTML = payment;

        requestCardContainer.appendChild(requestPrice);

        requestTimeList.classList.add('request__time');
        requestListContainer.appendChild(requestTimeList);
        request.setAttribute("id-request",identificator) // included for selecting using atrribute 08/04/2020
        requestsContainer.appendChild(request);
    }
});