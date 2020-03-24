window.addEventListener('load', () => {
    let information = {
        job: 'Diseñador UX',
        time: 7,
        cities: ['Cali', 'Buenaventura'],
        length: 'Término fijo a 1 año',
        days: 'Lunes a Viernes',
        payment: '2\'500.000 COP',
        status: [2, 1],
        draft: false,
        finished: false
    };

    createRequest(information);

    console.log(information);

    function createRequest(information) {
        let requestsContainer = document.querySelector('.content__requests');

        let jobTitle = information.job;
        let time = information.time;
        let city;
        if(information.cities.length > 1) {
            city = 'Varias ciudades';
        } else {
            city = information.cities[0];
        }
        let jobLength = information.length;
        let workDays = information.days;
        let payment = information.payment;
        let status = information.status;
        let draft = information.draft;
        let finished = information.finished;

        let request = document.createElement('div');
        request.classList.add('request');
        if(finished) request.classList.add('request--finished');

        let title = document.createElement('div');
        title.classList.add('request__title');

        let requestJobTitle = document.createElement('h2');
        requestJobTitle.classList.add('request__job');
        if(jobTitle.length < 13) {
            requestJobTitle.innerHTML = jobTitle;
        } else {
            requestJobTitle.innerHTML = jobTitle.slice(0,12) + '...';
        }
        
        
        let requestTime = document.createElement('p');
        requestTime.classList.add('request__time');
        if(!draft) {
            requestTime.innerHTML = 'Faltan ' + time + 'días';
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

        requestInfo.appendChild(requestCity);
        requestInfo.appendChild(requestLength);
        requestInfo.appendChild(requestDays);
        request.appendChild(requestInfo);

        let requestPrice = document.createElement('h4');
        requestPrice.classList.add('request__price');
        requestPrice.innerHTML = payment;

        request.appendChild(requestPrice);

        let requestStatusBar = document.createElement('div');
        requestStatusBar.classList.add('request__statusBar');

        let requestState = document.createElement('p');
        requestState.classList.add('request__state');

        for(let i = 0; i < 5; i++) {
            let statusBar = document.createElement('div');
            statusBar.classList.add('request__status');
            
            if(!draft && !finished) {
                if(i < status[0]) {
                    statusBar.classList.add('request__status--completed');
                } else if(i === status[0]) {

                    if(status[1] === 0) {
                        statusBar.classList.add('request__status--yellow');
                        requestState.classList.add('request__state--yellow');
                    } else {
                        statusBar.classList.add('request__status--green');
                        requestState.classList.add('request__state--green');
                    }
                    
                    switch(status[0]) {
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
            } else if(draft) {
                statusBar.classList.add('request__status--draft');
                requestState.classList.add('request__state--draft');
                requestState.innerHTML = 'Borrador';
            } else if(finished) {
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