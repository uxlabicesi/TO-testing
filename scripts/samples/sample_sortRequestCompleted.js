window.addEventListener('load', () => {
    console.log("Using sample data...");
    // TODO REMOVE AFTER DEBUG
    let sample = {
        "job": "DISEÑADOR DE MEDIOS INTERACTIVOS",
        "time": 1,
        "cities": ["Santiago de Cali, Valle del Cauca", "Medellín, Antioquia", "Bogotá D.C, Cundinamarca", "Jamundí, Valle del Cauca"],
        "length": "Término fijo a un año",
        "days": "Lunes a Viernes",
        "date": "25/03/2020",
        "payment": "12'500.000 COP",
        "status": [0, 0],
        "draft": false,
        "finished": true,
        "id": "sample_id",
        "finishedDate":"24/06/2020"
    }
    
    let sample2 = {
        "job": "Abogado",
        "time": 0,
        "cities": ["Santiago de Cali, Valle del Cauca", "Medellín, Antioquia", "Bogotá D.C, Cundinamarca", "Jamundí, Valle del Cauca"],
        "length": "Término fijo a un año",
        "days": "Lunes a Viernes",
        "date": "25/03/2020",
        "payment": "2'500.000 COP",
        "status": [0, 0],
        "draft": false,
        "finished": true,
        "id": "sample_id",
        "finishedDate":"24/06/2020"
    }  

    const sortSelect = document.querySelector('.content__select');
    const orderBtns = document.querySelectorAll('.content__orderbarBtn');

    sortSelect.addEventListener('change', handleChange);

    orderBtns.forEach((e) => {
        e.addEventListener('click', handleChange);
    });

    function handleChange() {
        //Empty the request's container
        const requestContainer = document.querySelector('.content__requests');
        requestContainer.innerHTML = '';

        createRequest(sample2);
        createRequest(sample);

        if(requestContainer.classList.contains('content__requests--list')) {
            console.log(requestContainer);
            //Called twice to update the new, sorted, requests to the list view
            changeRequestView();
            changeRequestView();
        }
    }
    
});