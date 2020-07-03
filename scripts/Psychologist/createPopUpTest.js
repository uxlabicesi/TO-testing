window.addEventListener('load', () => {

    let button = document.getElementById('btn--secondary');
    let body = document.querySelector('body');
    let candidateName = document.querySelector('.canDetails__name');
    let candidatePosition = document.querySelector('.canDetails__position');
    let candidateProfilePic = document.querySelector('.canDetails__contentHeaderImg');
    let candidateNumbers = document.querySelector('.tel');
    let candidateJob = document.querySelector('.reqDetails__title');
    let candidateCompany = document.querySelector('.reqDetails__company');
    let psychologistName = document.querySelector('.mainheader__userProfileName');

    createPopUpTest = () =>{
        let popUp = document.createElement('div');
        popUp.classList.add('popUpTest');

        let content = document.createElement('div');
        content.classList.add('popUpTest__content');

        let contentClose = document.createElement('div');
        contentClose.classList.add('popUpTest__contentClose');

        let contentCloseX = document.createElement('span');
        contentCloseX.classList.add('popUpTest__contentCloseX');
        contentCloseX.innerText = 'X';

        let contentHeader = document.createElement('div');
        contentHeader.classList.add('popUpTest__contentHeader');

        let contentHeaderImg = document.createElement('img');
        contentHeaderImg.classList.add('popUpTest__contentHeaderImg');
        contentHeaderImg.src = candidateProfilePic.src;

        let contentHeaderText = document.createElement('div');
        contentHeaderText.classList.add('popUpTest__contentHeaderText');

        let contentHeaderTextTitle = document.createElement('h2');
        contentHeaderTextTitle.classList.add('popUpTest__contentHeaderTextTitle');
        contentHeaderTextTitle.innerText = candidateName.innerText;

        let contentHeaderTextSubTitle = document.createElement('h3');
        contentHeaderTextSubTitle.classList.add('popUpTest__contentHeaderTextSubTitle');
        contentHeaderTextSubTitle.innerText = candidatePosition.innerText;

        let contentDivide = document.createElement('div');
        contentDivide.classList.add('popUpTest__contentDivide');

        let infoContact = document.createElement('div');
        infoContact.classList.add('popUpTest__contentInfoContact');

        let infoContactData = document.createElement('div');
        infoContactData.classList.add('popUpTest__contentInfoContactData');

        let infoContactDataTitle = document.createElement('h3');
        infoContactDataTitle.classList.add('popUpTest__contentInfoContactDataTitle');
        infoContactDataTitle.innerText = 'DATOS DE CONTACTO';

        let infoContactDataEmail = document.createElement('p');
        infoContactDataEmail.classList.add('popUpTest__contentInfoContactDataEmail');
        infoContactDataEmail.innerHTML = '<Strong>Email:</Strong>'+' '+'danimorales09@yahoo.com';

        let tel = candidateNumbers.innerText.split('/');

        let infoContactDataCel = document.createElement('p');
        infoContactDataCel.classList.add('popUpTest__contentInfoContactDataCel');
        infoContactDataCel.innerHTML = '<Strong>Cel:</Strong>'+' '+tel[0];

        let infoContactDataTel = document.createElement('p');
        infoContactDataTel.classList.add('popUpTest__contentInfoContactDataTel');
        infoContactDataTel.innerHTML = '<Strong>Tel:</Strong>'+' '+tel[1];

        let infoContactEdit = document.createElement('div');
        infoContactEdit.classList.add('popUpTest__contentInfoContactEdit');

        let infoContactEditP = document.createElement('P');
        infoContactEditP.classList.add('popUpTest__contentInfoContactEditP');
        infoContactEditP.innerText = 'Editar';

        let message = document.createElement('div');
        message.classList.add('popUpTest__contentMessage');

        let messageTitle = document.createElement('h3');
        messageTitle.classList.add('popUpTest__contentMessageTitle');
        messageTitle.innerText = 'MENSAJE';

        let messageTextArea = document.createElement('div');
        messageTextArea.classList.add('textInput__container','form-group', 'textInput__container--candidateDetailsProcess');

        let candidatePlace = candidateCompany.innerText.split('/');

        let input =  document.createElement('textarea');
        input.classList.add('textInput', 'textInput--area','textInput--areaCandidateProcess');
        input.value = '¡Hola' + ' ' + candidateName.innerText+'!'+
        '\n\nHas sido seleccionado para seguir el proceso de' + ' ' + candidateJob.innerText + ' ' + 'para' + ' ' + candidatePlace[0] +'en la ciudad de Cali.'
        
        +'\n\nEl primer paso que debes seguir es realizar la prueba que te envío a continuación. Espero puedas responderla lo más rápido posible.'+  
        
        '\n\n¡Éxitos!'+
        
        '\n\n'+psychologistName.innerText+
        '\nPsicóloga - Talentos Online'+
        '\n(321) 123 1234';

        // input.addEventListener('input',()=>{
        //     auto_grow(input);
        // })
        // input.addEventListener('keydown',()=>{
        //     auto_grow(input);
        // })
        // input.addEventListener('change',()=>{
        //     auto_grow(input);
        // })

        let sendInfo = document.createElement('div');
        sendInfo.classList.add('popUpTest__contentSendInfo');

        let sendInfoDiv = document.createElement('div');
        sendInfoDiv.classList.add('popUpTest__contentSendInfoDiv');

        let sendInfoTitle = document.createElement('h3');
        sendInfoTitle.classList.add('popUpTest__contentSendInfoDivTitle');
        sendInfoTitle.innerText = 'ENVIAR POR';

        let sendInfoWhat = document.createElement('p');
        sendInfoWhat.classList.add('popUpTest__contentSendInfoDivWhat');
        sendInfoWhat.innerText = 'Enviar por WhatsApp';

        let sendInfoSms = document.createElement('p');
        sendInfoSms.classList.add('popUpTest__contentSendInfoDivSms');
        sendInfoSms.innerText = 'Enviar por mensaje de texto (SMS)';

        let sendInfoEmail = document.createElement('p');
        sendInfoEmail.classList.add('popUpTest__contentSendInfoDivEmail');
        sendInfoEmail.innerText = 'Enviar por correo electrónico (E-mail)';

        let button = document.createElement('button');
        button.classList.add('btn','btn--medium','btn--candidateProcess');
        button.innerText = 'Enviar pruebas';

        contentClose.appendChild(contentCloseX);

        contentHeaderText.appendChild(contentHeaderTextTitle);
        contentHeaderText.appendChild(contentHeaderTextSubTitle);

        contentHeader.appendChild(contentHeaderImg);
        contentHeader.appendChild(contentHeaderText);

        infoContactData.appendChild(infoContactDataTitle);
        infoContactData.appendChild(infoContactDataEmail);
        infoContactData.appendChild(infoContactDataCel);
        infoContactData.appendChild(infoContactDataTel);
        infoContactEdit.appendChild(infoContactEditP);

        message.appendChild(messageTitle);
        messageTextArea.appendChild(input);
        message.appendChild(messageTextArea);

        sendInfoDiv.appendChild(sendInfoTitle);
        sendInfoDiv.appendChild(sendInfoWhat);
        sendInfoDiv.appendChild(sendInfoSms);
        sendInfoDiv.appendChild(sendInfoEmail);
        sendInfoDiv.appendChild(button);    
        sendInfo.appendChild(message);
        sendInfo.appendChild(sendInfoDiv);

        infoContact.appendChild(infoContactData);
        infoContact.appendChild(infoContactEdit);

        content.appendChild(contentClose);
        content.appendChild(contentHeader);
        content.appendChild(contentDivide);
        content.appendChild(infoContact);
        content.appendChild(sendInfo);

        popUp.appendChild(content);
        body.appendChild(popUp);

        body.classList.add('popUpOffer__noScroll');

        contentCloseX.addEventListener('click', (ev) => {
            ev.preventDefault();
            closePopUp();
        });

        popUp.onclick = function (event) {
            if (event.target == popUp) {
                popUp.classList.add('popUpOffer--inactive');
                if(body.hasChildNodes()){
                    body.removeChild(popUp);
                    body.classList.remove('popUpOffer__noScroll');
                }
            }
        }

        function closePopUp() {
            popUp.classList.add('popUpOffer--inactive');
            if(body.hasChildNodes()){
                body.removeChild(popUp);
                body.classList.remove('popUpOffer__noScroll');
            }
        }

    }
    button.addEventListener('click',()=>{
        createPopUpTest();
    });

});

