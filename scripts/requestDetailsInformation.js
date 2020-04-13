
// empty function will be updated after window load.
let requestDetailedInformation = (info) => {};
let candidates = (info) => {};

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
        positionName: **String** con el nombre del cargo,
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
        requirements: **Arreglo** con los requerimientos del cargo,
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
        const status = document.querySelector('.status');
        const statusCurrent = document.querySelector('.status__current');
        const statusList = document.querySelectorAll('.status__listItem');
        const remainingTime = document.querySelector('.reqDetails__remainingTime');
        const positionName = document.querySelector('.positionName');
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
        const requirements = document.querySelector('.reqDetails__infoSection--requirements');

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
        let aux = 0
        info.cities.forEach((e) => {
            let item = document.createElement('div');
            item.classList.add('reqDetails__infoSection--cities');
            //item.style = "margin-left:15px;"
            item.innerHTML = "" + e + " (" + info.amountPerCity[aux] + ")";
            city.appendChild(item);
            aux++;
        });

        positionLevel.innerHTML = info.positionLevel;

        positionName.innerHTML = info.positionName;

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

        switch(info.status[0]) {
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

        title.innerHTML = info.name + ' (' + info.amount+')';
    }

    candidates = (info) => {
        if(info.length > 0) {
            const candidates = document.querySelector('.reqDetails__candidates');

            candidates.innerHTML = '';

            info.forEach((e) => {
                let candidate = document.createElement('div');
                candidate.classList.add('candidate');

                let profile = document.createElement('div');
                profile.classList.add('candidate__profile');

                let profilePic = document.createElement('img');
                profilePic.setAttribute('src', "."+e.profilePic);
                profilePic.classList.add('candidate__profileImg');
                profile.appendChild(profilePic);

                let profileTitles = document.createElement('div')
                profileTitles.classList.add('candidate__profileTitles');
                
                let candidateName = document.createElement('h2');
                candidateName.classList.add('candidate__profileTitlesName');
                candidateName.innerHTML = e.name;
                profileTitles.appendChild(candidateName);

                let candidateJob = document.createElement('h3');
                candidateJob.classList.add('candidate__profileTitlesJob');
                candidateJob.innerHTML = e.job;
                profileTitles.appendChild(candidateJob);
                profile.appendChild(profileTitles);
                candidate.appendChild(profile);

                let candidateInfo = document.createElement('div');
                candidateInfo.classList.add('candidate__info');

                let cel = document.createElement('h2');
                cel.classList.add('candidate__infoCel');
                if(e.telephone > 1) {
                    e.telephone.forEach((number, index) => {
                        if(e.telephone.length === index-1) {
                            cel.innerHTML += number;
                        } else {
                            cel.innerHTML += number + ' / ';
                        }
                    });
                } else {
                    cel.innerHTML = e.telephone[0];
                }
                candidateInfo.appendChild(cel);

                let email = document.createElement('h3');
                email.classList.add('candidate__infoEmail');
                email.innerHTML = e.email;
                candidateInfo.appendChild(email);
                candidate.appendChild(candidateInfo);

                let btn = document.createElement('button');
                btn.classList.add('btn', 'btn--noFill', 'candidate__btn');
                btn.innerHTML = 'Ver detalles';
                btn.addEventListener('click', () => {
                    window.location.href = './dashboard_candidateDetails.html';
                });
                candidate.appendChild(btn);

                candidates.appendChild(candidate);
            });
        }
    }
    // TODO REMOVE AFTER DEBUG
    var sample = {
        name: 'Diseñador',
        amount: '20',
        status: [1, 1],
        remainingTime: 12,
        positionName: 'Diseñador Web',
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
        requirements: ['Desarrollo de prototipos',
                    'Definición de Insights',
                    'Evaluación de productos',
                    'Documentación de procesos',
                    'Facilitación de equipos de trabajo'],
    }

    var candidateSample = [
        {
            profilePic: '/resources/imgPerfil.jpg',
            name: 'Fabio Arias M',
            job: 'Diseñador Gráfico',
            telephone: ['+57 (300) 8200838',
                        '032 5552334'],
            email: 'fabio.arias@candidatos.com.co',
        },

        {
            profilePic: '/resources/imgPerfil.jpg',
            name: 'Fabio Arias M',
            job: 'Diseñador Gráfico',
            telephone: ['+57 (300) 8200838',
                        '032 5552334'],
            email: 'fabio.arias@candidatos.com.co',
        },

        {
            profilePic: '/resources/imgPerfil.jpg',
            name: 'Fabio Arias M',
            job: 'Diseñador Gráfico',
            telephone: ['+57 (300) 8200838',
                        '032 5552334'],
            email: 'fabio.arias@candidatos.com.co',
        },

        {
            profilePic: '/resources/imgPerfil.jpg',
            name: 'Fabio Arias M',
            job: 'Diseñador Gráfico',
            telephone: ['+57 (300) 8200838',
                        '032 5552334'],
            email: 'fabio.arias@candidatos.com.co',
        },
    ];

    requestDetailedInformation(sample);
    candidates(candidateSample);

});