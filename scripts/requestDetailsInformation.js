
   /**
     * 
     * @param { } information 
     * 
     * Para visualizar los detalles de una solicitud se debe utilizar la función addInformation en /scripts/requestDetailsInformation.js.
        La función recibe un JSON con la siguiente estructura:
        {
        name: **String** con el nombre del cargo,
        amount: **String** con la cantidad requerida,
        status **Arreglo** con dos números, el primero indica la etapa del proceso en la que se encuentra la solicitud, es un número entre 0   y 4; y el segundo es 0 o 1, 0 si el usuario aún debe realizar alguna acción y 1 si no debe realizar ninguna acción,
        remainingTime: **Número** de días faltantes,
        positionLevel: **String** con el nivel del cargo,
        cities: **String array** con los nombres de las ciudades,
        amountPerCity: **array** número de personas por ciudad (Mismo orden de las ciudades),
        time: **String** con la jornada de trabajo,
        hiring: **String** con el tipo de contratación,
        wage: **String** con el salario,
        functions: **Arreglo** con las funciones que debe desempeñar,
        academicLevel: **String** con el nivel académico,
        profession: **String** con la profesión,
        knowledge: **String** con los conocimientos requeridos,
        observations: **String** con las observaciones,
        skills: **Arreglo** con las competencias requeridas.
        //requirements: **Arreglo** con los requerimientos del cargo,
     */

    /* Para visualizar las tarjetas de los candidatos de una solicitud se debe utilizar la función candidates en /scripts/requestDetailsInformation.js.
        La función recibe un Arreglo de Objetos con la siguiente estructura:
    {
        profilePic: **String** con la ruta a la imagen de perfil,
        name: **String** con el nombre del candidato,
        job: **String** con la profesión del candidato, 
        telephone: **Arreglo** con el número, o los números, de teléfono del candidato. Deben estar en String y en el formato adecuado de número telefónico,
        email: **String** con el correo electrónico del candidato,
    }
     */

// empty function will be updated after window load.
let requestDetailedInformation = (info) => {};


window.addEventListener('load', () => {

    
    requestDetailedInformation = (info) => {

        const title = document.querySelector('.reqDetails__title');
        const name = document.querySelector('.name');
        const status = document.querySelector('.status');
        const statusCurrent = document.querySelector('.status__current');
        const statusList = document.querySelectorAll('.status__listItem');
        const remainingTime = document.querySelector('.reqDetails__remainingTime');
        const positionLevel = document.querySelector('.positionLevel');
        const city = document.querySelector('.city');
        //const amount = document.querySelector('.city');
        const time = document.querySelector('.time');
        const hiring = document.querySelector('.hiring');
        const wage = document.querySelector('.wage');
        const functions = document.querySelector('.reqDetails__infoSection--functions');
        const academicLevel = document.querySelector('.academicLevel');
        const profession = document.querySelector('.profession');
        const knowledge = document.querySelector('.knowledge');
        const observations = document.querySelector('.observations');
        const skills = document.querySelector('.reqDetails__infoSection--skills');

        const candidatesTabButton = document.querySelector('.reqDetails__candidates__tabButton');
        

        /*info.requirements.forEach((e) => {
            let item = document.createElement('li');
            item.innerHTML = e;
            requirements.appendChild(item);
        });*/

        info.skills.forEach((e) => {
            let item = document.createElement('li');
            item.innerHTML = MaysFirst(e.toLowerCase());
            skills.appendChild(item);
        });

        observations.innerHTML = MaysFirst(info.observations.toLowerCase());

        knowledge.innerHTML = info.knowledge;

        profession.innerHTML = MaysFirst(info.profession.toLowerCase());

        academicLevel.innerHTML = MaysFirst(info.academicLevel.toLowerCase());

        info.functions.forEach((e) => {
            let item = document.createElement('li');
            item.innerHTML = MaysFirst(e.toLowerCase());
            functions.appendChild(item);
        });

        wage.innerHTML = info.wage;

        hiring.innerHTML = MaysFirst(info.hiring.toLowerCase());

        time.innerHTML = MaysFirst(info.time.toLowerCase());

        //city.innerHTML = info.city;

        info.cities.forEach((e, index) => {
            let item = document.createElement('div');
            item.classList.add('reqDetails__infoSection--cities');
            //item.style = "margin-left:15px;"
            item.innerHTML = "" + e + " (" + info.amountPerCity[index] + ")";
            city.appendChild(item);

        });

        positionLevel.innerHTML = MaysFirst(info.positionLevel.toLowerCase());

        if(info.status[0] === -1) {
            remainingTime.innerHTML = 'Borrador';
            status.classList.add('status--gray');
            candidatesTabButton.classList.add('reqDetails__candidates__tabButton--hide');
        }else{
            candidatesTabButton.classList.remove('reqDetails__candidates__tabButton--hide');
            if(info.remainingTime === 1) {
                remainingTime.innerHTML = 'Falta 1 día';
            } else {
                remainingTime.innerHTML = 'Faltan ' + info.remainingTime + ' días';
            }
            if(status[1] === 0) {
                status.classList.add('status--yellow');
            } else {
                status.classList.add('status--green');
            }
        }

        switch(info.status[0]) {
            case -1:
                statusCurrent.innerHTML = 'Borrador';
                break;
            case 0:
                statusCurrent.innerHTML = 'Pendiente de pago';
                break;

            case 1: 
                statusCurrent.innerHTML = 'En verificación';
            break;

            case 2: 
                statusCurrent.innerHTML = 'Iniciado';
                break;

            case 3: 
                statusCurrent.innerHTML = 'En proceso de búsqueda';
                break;

            case 4: 
                statusCurrent.innerHTML = 'En espera de selección';
                break;

            case 5: 
                statusCurrent.innerHTML = 'Finalizó el proceso';
                break;
        }

        if(status[0] === -1) {
            statusList.add('status--inactive')
        }else{
            statusList.forEach((e, index) => {
                if(index < info.status[0]) {
                    e.classList.add('status--completed');
                } else if (index === info.status[0]) {
                    if(info.status[1] === 0) {
                        e.classList.add('status--yellow');
                    } else {
                        e.classList.add('status--green');
                    }
                } else {
                    e.classList.add('status--inactive');
                }
            });
        }
       
        title.innerHTML = info.name + ' (' + info.amount+')';
        name.innerHTML = MaysFirst(info.name.toLowerCase());

        // Función que recibe como parametro un string y lo convierte en minusculas con excepción de
        // la primera letra, es necesario agregarle al string que se quiera transformar la funcion de javascript
        // toLowerCase() Ej: MaysFirst(string.toLowerCase());
        function MaysFirst(string){
            return string.charAt(0).toUpperCase() + string.slice(1);
        }
    }
});