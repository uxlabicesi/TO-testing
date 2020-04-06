
// empty function will be updated after window load.
let createRequest = (information, root='.content__requests') => {};

window.addEventListener('load', () => {

    /*let sample = {
        "job": "DISEÑADOR DE MEDIOS INTERACTIVOS",
        "time": 1,
        "cities": ["Santiago de Cali, Valle del Cauca", "Medellín, Antioquia", "Bogotá D.C, Cundinamarca", "Jamundí, Valle del Cauca"],
        "length": "Término fijo a un año",
        "days": "Lunes a Viernes",
        "date": "25/03/2020",
        "payment": "2'500.000 COP",
        "status": [2, 1],
        "draft": false,
        "finished": false
    }

    let sample2 = {
        "job": "DISEÑADOR DE MEDIOS INTERACTIVOS",
        "time": 0,
        "cities": ["Santiago de Cali, Valle del Cauca", "Medellín, Antioquia", "Bogotá D.C, Cundinamarca", "Jamundí, Valle del Cauca"],
        "length": "Término fijo a un año",
        "days": "Lunes a Viernes",
        "date": "25/03/2020",
        "payment": "2'500.000 COP",
        "status": [2, 1],
        "draft": false,
        "finished": false
    }
    /**
     * 
     * @param { } information 
     * 
     * Para crear una tarjeta de solicitud se debe utilizar la función createRequest en /scripts/createRequest.js.
        La función recibe un JSON con la siguiente estructura:
        {
        job: **String** con el nombre del cargo,
        time: **Número** de días faltantes,
        cities: **Arreglo** con el nombre de las ciudades,
        length: **String** Duración del contrato, ej: 'Término fijo a un año',
        days: **String** Días de trabajo, ej: 'Lunes a Viernes',
        date: **String** que contiene la fecha en formato DD/MM/YYYY ej. 25/03/2020,
        payment: **String** Pago con formato, ej: '2\'500.000 COP',
        status: **Arreglo** con dos números, el primero indica la etapa del proceso en la que se encuentra la solicitud, es un número entre 0   y 4; y el segundo es 0 o 1, 0 si el usuario aún debe realizar alguna acción y 1 si no debe realizar ninguna acción,
        draft: **booleano** indicando si se trata de un borrador, true indica que es borrador.
        finished: **booleano** indicando si se trata de una solicitud terminada, true indica que la solicitud finalizó 
        }
     */

    createRequest = (information, root='.content__requests') => {
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
        let status = information.status;
        let draft = information.draft;
        let finished = information.finished;

        let request = document.createElement('div');
        request.classList.add('request');
        if (finished || draft) request.classList.add('request--gray');

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
        requestTime.classList.add('request__time');
        if (!draft) {
            if (time <= 0) {
                time = 0;
                requestTime.classList.add('request__time--delayed');
                requestTime.classList.remove('request__time--ontime');
            } else {
                requestTime.classList.remove('request__time--delayed');
                requestTime.classList.add('request__time--ontime');
            }
            requestTime.innerHTML = 'Faltan ' + time + ' días';
        } else {
            requestTime.innerHTML = 'Borrador';
            request.classList.add('request--draft');
        }

        title.appendChild(requestJobTitle);
        title.appendChild(requestTime);
        request.appendChild(title);

        let requestInfo = document.createElement('div');
        requestInfo.classList.add('request__information');

        let requestCity = document.createElement('p');
        requestCity.innerHTML = city;

        let requestLength = document.createElement('p');
        requestLength.innerHTML = jobLength;

        let requestDays = document.createElement('p');
        requestDays.innerHTML = workDays;

        let requestDate = document.createElement('p');
        requestDate.innerHTML = "Solicitado: " + creationDate;

        requestInfo.appendChild(requestCity);
        requestInfo.appendChild(requestLength);
        requestInfo.appendChild(requestDays);
        requestInfo.appendChild(requestDate);
        request.appendChild(requestInfo);

        let requestPrice = document.createElement('h4');
        requestPrice.classList.add('request__price');
        requestPrice.innerHTML = payment;

        request.appendChild(requestPrice);

        let requestStatusBar = document.createElement('div');
        requestStatusBar.classList.add('request__statusBar');

        let requestState = document.createElement('p');
        requestState.classList.add('request__state');

        for (let i = 0; i < 5; i++) {
            let statusBar = document.createElement('div');
            statusBar.classList.add('request__status');

            if (!draft && !finished) {
                if (i < status[0]) {
                    statusBar.classList.add('request__status--completed');
                } else if (i === status[0]) {

                    if (status[1] === 0) {
                        statusBar.classList.add('request__status--yellow');
                        requestState.classList.add('request__state--yellow');
                    } else {
                        statusBar.classList.add('request__status--green');
                        requestState.classList.add('request__state--green');
                    }

                    switch (status[0]) {
                        case 0:
                            requestState.innerHTML = 'Pendiente de pago';
                            break;

                        case 1:
                            requestState.innerHTML = 'Iniciado';
                            break;

                        case 2:
                            requestState.innerHTML = 'En proceso de búsqueda';
                            break;

                        case 3:
                            requestState.innerHTML = 'En espera de selección';
                            break;

                        case 4:
                            requestState.innerHTML = 'Finalizando el proceso';
                            break;
                    }
                } else {
                    statusBar.classList.add('request__status--inactive');
                }
            } else if (draft) {
                statusBar.classList.add('request__status--draft');
                requestState.classList.add('request__state--draft');
                requestState.innerHTML = 'Borrador';
            } else if (finished) {
                statusBar.classList.add('request__status--green');
                requestState.classList.add('request__state--green');
                requestState.innerHTML = 'Finalizado';
            }

            requestStatusBar.appendChild(statusBar);
        }

        request.appendChild(requestStatusBar);
        request.appendChild(requestState);

        requestsContainer.appendChild(request);
    }
});