let addInformation = (info) => {};

function handleLoad() {

    var sample = {
        title: 'Diseñador UX',
        status: [2, 1],
        remainingTime: 1,
        name: 'Fabio Arias',
        profilePic: '/resources/imgPerfil.jpg',
        job: 'Deseñador de Medios Interactivos',
        origin: 'Ezenza',
        id: '1130613425',
        tel: ['(300) 8200838', '032 5552334'],
        age: 32,
        city: 'Cali, Valle del Cauca',
        exp: ['Experiencia Laboral 1', 'Experiencia Laboral 2', 'Experiencia Laboral 3'],
        knowledge: ['Conocimiento 1', 'Conocimiento 2', 'Conocimiento 3'],
        licenses: ['Licencias 1', 'Licensias 2', 'Licencias 3'],
        references: [
            {
                title: 'Referencia personal 1',
                name: 'Nombre',
                position: 'Cargo',
                tel: 'Teléfono'
            },
            {
                title: 'Referencia personal 2',
                name: 'Nombre',
                position: 'Cargo',
                tel: 'Teléfono'
            }
        ]
    }

    addInformation = (info) => {
        const title = document.querySelector('.reqDetails__title');
        const status = document.querySelector('.status');
        const statusCurrent = document.querySelector('.status__current');
        const statusList = document.querySelectorAll('.status__listItem');
        const remainingTime = document.querySelector('.reqDetails__remainingTime');
        const name = document.querySelector('.canDetails__contentHeaderTitlesTitle');
        const profilePic = document.querySelector('.canDetails__contentHeaderImg');
        const job = document.querySelector('.canDetails__contentHeaderJobStrong');
        const origin = document.querySelector('.origin');
        const id = document.querySelector('.id');
        const tel = document.querySelector('.tel');
        const age = document.querySelector('.age');
        const city = document.querySelector('.city');
        const exp = document.querySelector('.canDetails__infoSection--exp');
        const knowledge = document.querySelector('.canDetails__infoSection--knowledge');
        const licenses = document.querySelector('.canDetails__infoSection--licenses');
        const references = document.querySelector('.canDetails__infoSection--references');

        info.references.forEach((e) => {
            var li = document.createElement('li');
            var refTitle = document.createElement('h4');
            var refName = document.createElement('p');
            var refPosition = document.createElement('p');
            var refTel = document.createElement('p');

            refTitle.innerHTML = '<strong>' + e.title + '</strong>';
            refName.innerHTML = e.name;
            refPosition.innerHTML = e.position;
            refTel.innerHTML = e.tel;

            li.appendChild(refTitle);
            li.appendChild(refName);
            li.appendChild(refPosition);
            li.appendChild(refTel);
            references.appendChild(li);
        });

        info.licenses.forEach((e) => {
            var li = document.createElement('li');
            li.innerHTML = e;
            licenses.appendChild(li);
        });
        
        info.knowledge.forEach((e) => {
            var li = document.createElement('li');
            li.innerHTML = e;
            knowledge.appendChild(li);
        });

        info.exp.forEach((e) => {
            var li = document.createElement('li');
            li.innerHTML = e;
            exp.appendChild(li);
        });

        city.innerHTML = info.city;

        age.innerHTML = info.age + ' años';

        info.tel.forEach((e, index) => {
            tel.innerHTML = tel.innerHTML + e;
            if(!(index === info.tel.length - 1)) tel.innerHTML = tel.innerHTML + ' / ';
        });

        id.innerHTML = info.id;

        origin.innerHTML = info.origin;

        job.innerHTML = info.job;

        profilePic.setAttribute('src', info.profilePic);

        name.innerHTML = info.name;

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
                statusCurrent.innerHTML = 'Iniciado';
                break;

            case 2: 
                statusCurrent.innerHTML = 'En proceso de búsqueda';
                break;

            case 3: 
                statusCurrent.innerHTML = 'En espera de selección';
                break;

            case 4: 
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

        title.innerHTML = info.title;
    }

    addInformation(sample);
}  

window.addEventListener('load', handleLoad);