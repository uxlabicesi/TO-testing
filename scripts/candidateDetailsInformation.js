/**
 * @description the function add infomation to candidate details
 * @param {} info requires the following JSON structure:
 * {
 *  title: 'Diseñador UX', // Main title for candidate
 *  status: [2, 1], // // status global, action
 *  remainingTime: 1, //
 *  name: 'Fabio Arias', //
 *  profilePic: './resources/imgPerfil.jpg', //
 *  job: 'Diseñador de Medios Interactivos', // main career
 *  origin: 'Ezenza', // where was colected as candidate
 *  id: '1130613425', // CC
 *  tel: ['(300) 8200838', '032 5552334'], 
 *  age: 32,
 *  city: 'Cali, Valle del Cauca',
 *  exp: [
        {position:'Experiencia Laboral 1',timeInMonths:24,enterprise:'empresa 1',duties:"Lorem ipsum loen dae, Lorem ipsum loen dae, Lorem ipsum loen dae." }, 
        {position:'Experiencia Laboral 2',timeInMonths:12,enterprise:'empresa 2',duties:"Lorem ipsum loen dae, Lorem ipsum loen dae, Lorem ipsum loen dae." },
        {position:'Experiencia Laboral 3',timeInMonths:6,enterprise:'empresa 3',duties:"Lorem ipsum loen dae, Lorem ipsum loen dae, Lorem ipsum loen dae." },
        ],
 *  knowledge: ['Conocimiento 1', 'Conocimiento 2', 'Conocimiento 3'],
 *  licenses: ['Licencias 1', 'Licencias 2', 'Licencias 3'],
 *  formation: ['Formación académica 1', 'Formación académica 2', 'Formación académica 3'],
 *  references: [
 *    {
 *     title: 'Referencia personal 1',
 *     name: 'Nombre',
 *     position: 'Cargo',
 *     tel: 'Teléfono'
 *    },
 *    {
 *     title: 'Referencia personal 2',
 *     name: 'Nombre',
 *     position: 'Cargo',
 *     tel: 'Teléfono'
 *    }
 *   ],
 *   evaluation: [1,1,1], // added for second time interaction, represent initial or prev evaluation
 *   selected: true,// boolean for selection state, modify class for button and show the subtitle selected
 *   evaluated: true, // boolean for evaluation
 *   }

 */


let addInformation = (info) => {};

window.addEventListener('load', () => {

    addInformation = (info) => {
        const title = document.querySelector('.reqDetails__title');
        const status = document.querySelector('.status');
        const statusCurrent = document.querySelector('.status__current');
        const statusList = document.querySelectorAll('.status__listItem');
        const remainingTime = document.querySelector('.reqDetails__remainingTime');
        let name = document.querySelector('.canDetails__contentHeaderTitlesTitle');
        const summary = document.querySelector('.canDetails__position');
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
        const formation = document.querySelector('.canDetails__infoSection--academic');
        const references = document.querySelector('.canDetails__infoSection--references');
        const selectionState = document.querySelector('.reqDetails__selected'); 
        const selectionStateButton = document.querySelector('.btn__selection'); 
        const candidateEvaluationBtn = document.querySelector('.btn__evaluation');

        if(summary) summary.innerHTML = info.job + ' [Candidato / ' + info.origin+']';

        if (info.evaluated!=null&&info.evaluated) {
            candidateEvaluationBtn.innerHTML="Reevaluar candidato";
            //selectionStateButton.classList.remove('btn--inactive');
        }else if(candidateEvaluationBtn){
            candidateEvaluationBtn.innerHTML="Evaluar candidato";
            candidateEvaluationBtn.classList.remove('btn__evaluation--select');
            //selectionStateButton.classList.add('btn--inactive');
        }

        // control selection state
        if(selectionState) {
            if(info.selected){
                // for badge top of page / 
                selectionState.classList.add('reqDetails__selected--show');
                selectionState.classList.remove('reqDetails__selected--hide');
                selectionState.innerHTML="Seleccionado";
                // for change the button state
                selectionStateButton.innerHTML="Eliminar selección";
                if(info.status[0]!== 0 && info.status[0]!== 5){
                    selectionStateButton.classList.add('btn--medium--cancel');
                    selectionStateButton.disabled = false;
                }else{
                    selectionStateButton.classList.add('btn--inactive');
                    selectionStateButton.disabled = true;
                }
            } else {
                 // for badge top of page / 
                selectionState.classList.remove('reqDetails__selected--show');
                selectionState.classList.add('reqDetails__selected--hide');
                selectionState.innerHTML="";
                // for change the button state
                selectionStateButton.innerHTML="Seleccionar candidato";
                if(info.status[0]!== 0 && info.status[0]!== 5){
                    selectionStateButton.classList.remove('btn--medium--cancel')
                    selectionStateButton.disabled = false;
                }else{
                    selectionStateButton.classList.add('btn--inactive');
                    selectionStateButton.disabled = true;
                }
            }
        }
        

        // add references
        info.references.forEach((e) => {
            var li = document.createElement('li');
            var refTitle = document.createElement('h4');
            var refName = document.createElement('p');
            var refPosition = document.createElement('p');
            var refTel = document.createElement('p');
            //modify for alineation, if title dont exist 'Referencia' is the new title
            let titleAux = 'Referencia'
            if( e.title!=='' && e.title!==null){
                titleAux = e.title;
            }
            refTitle.innerHTML = '<strong>' + titleAux + '</strong>';
            refName.innerHTML = e.name;
            refPosition.innerHTML = e.position;
            refTel.innerHTML = e.tel;

            li.appendChild(refTitle);
            li.appendChild(refName);
            li.appendChild(refPosition);
            li.appendChild(refTel);
            references.appendChild(li);
        });

        info.formation.forEach((e) => {
            var li = document.createElement('li');
            li.innerHTML = e;
            formation.appendChild(li);
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
            //    {position:'Experiencia Laboral 1',timeInMonths:1,enterprise:'empresa 1'}, 
            var li = document.createElement('li');
            li.innerHTML = "<b>"+e.position+"</b>"+ " ("+e.timeInMonths+" meses"+")"+"<br>"+e.enterprise+"<br>"+"<b>Funciones:</b><br>"+e.duties;
            exp.appendChild(li);
        });

        city.innerHTML = info.city;

        age.innerHTML = info.age + ' años';

        info.tel.forEach((e, index) => {
            tel.innerHTML = tel.innerHTML + e;
            if(!(index === info.tel.length - 1)) tel.innerHTML = tel.innerHTML + ' / ';
        });

        id.innerHTML = info.id;

        if(origin) origin.innerHTML = info.origin;

        if(job) job.innerHTML = info.job;

        if(profilePic) profilePic.setAttribute('src', info.profilePic);

        if(!name) name = document.querySelector('.canDetails__name');
        if(name) name.innerHTML = info.name;

        // if(info.remainingTime === 1) {
        //     remainingTime.innerHTML = 'Falta 1 día';
        // } else {
        //     remainingTime.innerHTML = 'Faltan ' + info.remainingTime + ' días';
        // }

        // if(status[1] === 0) {
        //     status.classList.add('status--yellow');
        // } else {
        //     status.classList.add('status--green');
        // }

        if(status) {
            if(info.status[0] === -1) {
                remainingTime.innerHTML = 'Borrador';
                status.classList.add('status--gray');
                //candidatesTabButton.classList.add('reqDetails__candidates__tabButton--hide');
            }else{
                //candidatesTabButton.classList.remove('reqDetails__candidates__tabButton--hide');
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

        if(info.evaluation != null){
            buildRange(info.evaluation);
        }
    }
});  