/**
 * This helps to load information on pay screen, exposes a function to be used for that view creation.
 * the info parameter requieres a json structure with:
 * 
 * info{
 * payStatus: **String** 3 possible values  ("onProcess": When is comming from creation process 
 *             "onError": When the transaction fails and "onSuccess": when the transaction results was successful)
 * message: **String** optional value for message, maybe required for user feedback
 * 
 * requestJob: ** String ** name of the request
 * requestLevel: ** String ** operativo, tactico or estrategico 
 * requestAmount: ** Number **  amount of people
 * requestsubtotal: ** Number ** subtotal, without txes
 * requestTotal: ** Number ** final value.
 * }
 * 
 * */

let buildPayScreen = (info) => {};


window.addEventListener('load', () => {

    buildPayScreen = (info) => {

        const payDetailsContent = document.querySelector('.pay__details');
        const payResultContent = document.querySelector('.pay__result');
        const payResultContentTitle = document.querySelector('.pay__resultTitle');
        const payResultContentIcon = document.querySelector('.pay__resultIcon');
        const payResultContentMessage = document.querySelector('.pay__resultMessage');
        const actionButton = document.querySelector('.btn__goTo');
        const payResultGlobalTitle = document.querySelector('.pay__title');
        const payResultGlobalDescription = document.querySelector('.pay__description');

        //
        const payDetailsRequest = document.querySelector('.pay__detailsRequest').querySelectorAll('p')[1];
        const payDetailsAmount = document.querySelector('.pay__detailsAmount').querySelectorAll('p')[1];
        const payDetailsSubtotal = document.querySelector('.pay__detailsSubtotalDataNumber');
        const payDetailsTotalValue = document.querySelector('.pay__detailsTotalNumber');

        //
        const promo = document.querySelector('.pay__detailsPromoDataNumber');
        const promoContainer = document.querySelector('.pay__detailsPromo');

        let feedbackMessage = "";
        if (info.message !== null && info.message !== undefined && info.message !== "") {
            feedbackMessage = info.message;
        }

        if (info.payStatus === "onProcess") {
            // when its coming from request creation, edition o trying to completed the process
            payDetailsContent.classList.remove('pay__details--hide');
            payResultContent.classList.add('pay__details--hide');
            payResultGlobalTitle.innerHTML = "Pagar un servicio";
            payResultGlobalDescription.innerHTML = "Usted va a realizar la compra del siguiente servicio.";

            payDetailsRequest.innerHTML = info.requestJob + " (" + info.requestLevel + ")";
            payDetailsAmount.innerHTML = info.requestAmount;
            payDetailsSubtotal.innerHTML = info.requestsubtotal;
            payDetailsTotalValue.innerHTML = info.requestTotal;

            if(info.hasDiscount){
                promoContainer.classList.add('pay__detailsPromo--active');
                promo.innerHTML = info.discountValue.toLocaleString();
            }


        } else {
            payDetailsContent.classList.add('pay__details--hide');
            payResultContent.classList.remove('pay__details--hide');
            payResultGlobalTitle.innerHTML = "Resultado de su transacción";
            payResultGlobalDescription.innerHTML = "A continuación algunos los detalles de la transacción realizada";
            // onError onSuccess or onWait
            if (info.payStatus === "onError") {
                payResultContentTitle.querySelector('h2').innerHTML = 'TRANSACCIÓN FALLIDA'
                payResultContentIcon.querySelector('img').setAttribute('src', "./resources/deteleIcon.svg");
                payResultContentMessage.querySelector('p').innerHTML = 'Tuvimos un problema en el proceso' + '<br>' + '¿Qué tal si lo volvemos a intentar?'
                if (feedbackMessage !== "") {
                    payResultContentMessage.querySelector('p').innerHTML = feedbackMessage;
                }
                actionButton.innerHTML = 'Reintentar pago';
            } else if (info.payStatus === "onSuccess") {
                payResultContentTitle.querySelector('h2').innerHTML = 'TRANSACCIÓN EXITOSA'
                payResultContentIcon.querySelector('img').setAttribute('src', "./resources/checkGreen.svg");
                payResultContentMessage.querySelector('p').innerHTML = '¡El proceso fue un éxito!' + '<br>' + 'Ahora estamos más cerca de encontrar el mejor talento para tu organización'
                if (feedbackMessage !== "") {
                    payResultContentMessage.querySelector('p').innerHTML = feedbackMessage;
                }
                actionButton.innerHTML = 'Volver al inicio';
            } else if(info.payStatus === "onWait") {
                payResultContentTitle.querySelector('h2').innerHTML = 'TRANSACCIÓN PENDIENTE'
                payResultContentIcon.querySelector('img').setAttribute('src', "./resources/waitIcon.svg");
                payResultContentMessage.querySelector('p').innerHTML = '¡El proceso se encuentra pendiente!' + '<br>' + 'Estaremos atentos a los mensajes de tu banco'
                if (feedbackMessage !== "") {
                    payResultContentMessage.querySelector('p').innerHTML = feedbackMessage;
                }
                actionButton.innerHTML = 'Volver al inicio';
            }
        }
    }

});