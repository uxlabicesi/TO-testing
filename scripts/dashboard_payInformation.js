// empty function will be updated after window load.
let payInformation = (info) => {};

window.addEventListener('load', () => {

    /**
     * 
     * @param { } information 
     * 
     * To display the information for the payment for a request, use the payInformation function at ./scripts/applyPromoCode.js
        The function receives an Object with the following structure:
        {
        amount: **Number** A number representing the amount of candidates needed for the request.
        subtotal: **Number** A number representing the subtotal cost of the request
        taxes: **Number** default value set on 0.19
        }
     */

    payInformation = (info) => {

        const amount = document.querySelector('.pay__detailsAmountNumber');
        const subtotal = document.querySelector('.pay__detailsSubtotalDataNumber');
        const total = document.querySelector('.pay__detailsTotalNumber');
        const totalBtn = document.querySelector('.pay__fullPriceBtn');
        const halfBtn = document.querySelector('.pay__halfPriceBtn');
        let taxes = info.taxes;
        if(taxes === '' || taxes === null || taxes === undefined){
            taxes = Number(0.19);
        }
        const subtotalValue = info.subtotal;
        console.log(taxes);
        const iva = subtotalValue*taxes;
        console.log(iva);
        const totalValue = subtotalValue + iva;
        const halfValue = totalValue/2;

        amount.innerHTML = info.amount;
        subtotal.innerHTML = subtotalValue.toLocaleString();
        total.innerHTML = totalValue.toLocaleString();
        totalBtn.innerHTML = totalValue.toLocaleString();
        halfBtn.innerHTML = halfValue.toLocaleString();
    }
});