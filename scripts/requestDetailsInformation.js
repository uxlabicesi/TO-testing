
// empty function will be updated after window load.
let requestDetailedInformation = (info) => {};
//let candidates = (info) => {};

window.addEventListener('load', () => {

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
            item.innerHTML = e;
            skills.appendChild(item);
        });

        observations.innerHTML = info.observations;

        knowledge.innerHTML = info.knowledge;

        profession.innerHTML = info.profession;

        academicLevel.innerHTML = info.academicLevel;

        info.functions.forEach((e) => {
            let item = document.createElement('li');
            item.innerHTML = e;
            functions.appendChild(item);
        });

        wage.innerHTML = info.wage;

        hiring.innerHTML = info.hiring;

        time.innerHTML = info.time;

        //city.innerHTML = info.city;

        info.cities.forEach((e, index) => {
            let item = document.createElement('div');
            item.classList.add('reqDetails__infoSection--cities');
            //item.style = "margin-left:15px;"
            item.innerHTML = "" + e + " (" + info.amountPerCity[index] + ")";
            city.appendChild(item);

        });

        positionLevel.innerHTML = info.positionLevel;

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
        name.innerHTML = info.name;
    }

    // TODO REMOVE AFTER DEBUG
    var sample = {
        name: 'Diseñador Web',
        amount: '20',
        status: [0, 1], // -1, 0 para borradores
        remainingTime: 12,
        positionLevel: 'Técnico',
        cities: ['Santiago de Cali - Valle del Cauca',
                 'Popayán, Cauca',
                 'Palmira, Valle del Cauca'],
        amountPerCity:[10,5,3],
        time: 'Medio tiempo',
        hiring: 'Término indefinido',
        wage: '2\'500.500 COP',
        functions: ['Diseño de interfaz de usuario',
                    'Investigación de usuarios',
                    'Evaluación de usabilidad',
                    'Creación de conceptos',
                    'Sustentación de propuestas'],
        academicLevel: 'Universitario',
        profession: 'Diseñador',
        knowledge: 'UX, UI, Research, Lean, Agile',
        observations: 'Estamos buscando una persona que trabaje muy bien en equipo y enfoque en metodologías agiles.',
        skills: ['Desarrollo de prototipos',
                'Definición de Insights',
                'Evaluación de productos',
                'Documentación de procesos',
                'Facilitación de equipos de trabajo'],
        /*requirements: ['Desarrollo de prototipos',
                    'Definición de Insights',
                    'Evaluación de productos',
                    'Documentación de procesos',
                    'Facilitación de equipos de trabajo'],*/
    }

    requestDetailedInformation(sample);
    

});