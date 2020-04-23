
   /**
     * 
     * @param { } information 
     * 
     *To visualize a request's details, the requestDetailedInformation function must be utilized from /scripts/requestDetailsInformation.js.
        The function receives an Object with the following structure:
        {
        name: **String** with the job's name,
        amount: **String** with te required amount of candidates,
        status **Array** with two numbers, the first one indicates in which step of the process is the 
        request, it's a number between 0 and 4; and the second one is either 0 or 1, 0 if the user still
        needs to make an action and 1 if he doesn't need to make any action,
        remainingTime: **Número** with the remaining days,
        positionLevel: **String** with the job's level,
        cities: **String array** with the cities names,
        amountPerCity: **array** number of people per city (In the same order as cities),
        time: **String** with the working days,
        hiring: **String** with the type of contract,
        wage: **String** with the wage,
        functions: **Array** with the tasks for the job,
        academicLevel: **String** with the academic level,
        profession: **String** with the profession,
        knowledge: **String** with the required knowledge,
        observations: **String** with the observations,
        skills: **Array** with the required skills.
        requirements: **Array** with the job's requirements,
        subtotal **Number**
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
            item.innerHTML = MayusFirst(e);
            skills.appendChild(item);
        });

        observations.innerHTML = MayusFirst(info.observations);

        knowledge.innerHTML = info.knowledge;

        profession.innerHTML = MayusFirst(info.profession);

        academicLevel.innerHTML = MayusFirst(info.academicLevel);

        info.functions.forEach((e) => {
            let item = document.createElement('li');
            item.innerHTML = MayusFirst(e);
            functions.appendChild(item);
        });

        wage.innerHTML = info.wage;

        hiring.innerHTML = MayusFirst(info.hiring);

        time.innerHTML = MayusFirst(info.time);

        //city.innerHTML = info.city;

        info.cities.forEach((e, index) => {
            let item = document.createElement('div');
            item.classList.add('reqDetails__infoSection--cities');
            //item.style = "margin-left:15px;"
            item.innerHTML = "" + e + " (" + info.amountPerCity[index] + ")";
            city.appendChild(item);

        });

        positionLevel.innerHTML = MayusFirst(info.positionLevel);

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
       
        title.innerHTML = MayusFirst(info.name) + ' (' + info.amount+')';
        name.innerHTML = MayusFirst(info.name);

        // This function formats text so the first letter of a string is in upper case and the 
        // rest of it is lower case
        function MayusFirst(string){
            return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
        }
    }
});