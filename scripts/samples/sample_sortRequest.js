window.addEventListener('load', () => {
    console.log("Using sample data...");
    // TODO REMOVE AFTER DEBUG
    let sample = [
        {
            "job": "DISEÑADOR DE MEDIOS INTERACTIVOS",
            "amount": 20,
            "time": 1,
            "cities": ["Santiago de Cali, Valle del Cauca", "Medellín, Antioquia", "Bogotá D.C, Cundinamarca", "Jamundí, Valle del Cauca"],
            "length": "Término fijo a un año",
            "days": "Lunes a Viernes",
            "date": "25/03/2020",
            "payment": "12'500.000 COP",
            "status": [2, 1],
            "draft": false,
            "finished": false,
            "id": "sample_id",
            "finishedDate":"24/06/2020"
        },

        {
            "job": "DISEÑADOR DE MEDIOS INTERACTIVOS",
            "amount": 5,
            "time": 0,
            "cities": ["Santiago de Cali, Valle del Cauca", "Medellín, Antioquia", "Bogotá D.C, Cundinamarca", "Jamundí, Valle del Cauca"],
            "length": "Término fijo a un año",
            "days": "Lunes a Viernes",
            "date": "25/03/2020",
            "payment": "2'500.000 COP",
            "status": [2, 1],
            "draft": false,
            "finished": false,
            "id": "sample_id",
            "finishedDate":"24/06/2020"
        } 
    ]

    const sortSelect = document.querySelector('.content__select');
    const orderBtns = document.querySelectorAll('.content__orderbarBtn');

    sortSelect.addEventListener('change', () => {
        sortRequests(sample);
    });

    orderBtns.forEach((e) => {
        e.addEventListener('click', () => {
            sortRequests(sample);
        });
    });    
});