window.addEventListener('load', () => {
    console.log("Using sample data...");
// TODO REMOVE AFTER DEBUG
let notifSample1 = {
    "job": "Diseñador de medios interactivos",
    "cities": ["Santiago de Cali, Valle del Cauca", "Medellín, Antioquia", "Bogotá D.C, Cundinamarca", "Jamundí, Valle del Cauca"],
    "status": [2, 1],
    "date": "25/03/2020",
    "isNew": true,
    "id": "sample_id",
}
let notifSample2 = {
    "job": "Abogado penalista",
    "cities": ["Santiago de Cali, Valle del Cauca"],
    "status": [2, 1],
    "date": "25/03/2020",
    "isNew": true,
    "id": "sample_id",
}
let notifSample3 = {
    "job": "Diseñador de medios interactivos",
    "cities": ["Santiago de Cali, Valle del Cauca", "Medellín, Antioquia", "Bogotá D.C, Cundinamarca", "Jamundí, Valle del Cauca"],
    "status": [2, 1],
    "date": "25/03/2020",
    "isNew": false,
    "id": "sample_id",
}
let notifSample4 = {
    "job": "Abogado penalista",
    "cities": ["Santiago de Cali, Valle del Cauca"],
    "status": [2, 1],
    "date": "25/03/2020",
    "isNew": false,
    "id": "sample_id",
}
let notifSample5 = {
    "job": "Abogado comercial",
    "cities": ["Santiago de Cali, Valle del Cauca"],
    "status": [2, 1],
    "date": "25/03/2020",
    "isNew": false,
    "id": "sample_id",
}
let notifSample4 = {
    "job": "Abogado laboral",
    "cities": ["Palmira, Valle del Cauca"],
    "status": [2, 1],
    "date": "25/03/2020",
    "isNew": false,
    "id": "sample_id",
}

createNotification(notifSample1,'.content','./resources/checkIcon.svg');
createNotification(notifSample2,'.content','./resources/checkIcon.svg');
createNotification(notifSample3,'.content','./resources/checkIcon.svg');
createNotification(notifSample4,'.content','./resources/checkIcon.svg');

});