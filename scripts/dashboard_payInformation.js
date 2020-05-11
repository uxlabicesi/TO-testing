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

        // old version
        subtotal: **Number** A number representing the subtotal cost of the request
        taxes: **Number** default value set on 0.19

        // new version
        subtotalNoTaxes: **Number**,
        hasDiscount: **boolean** 
        taxesValue: **Number**, // 
        discountValue: **Number** 
        finalValue: ** number **

        }
     */

    payInformation = (info) => {

        // selectors
        const amount = document.querySelector('.pay__detailsAmountNumber');
        const subtotalNoTaxes = document.querySelector('.pay__detailsSubtotalDataNumber');
        const finalValue = document.querySelector('.pay__detailsTotalNumber');
        const totalBtn = document.querySelector('.pay__fullPriceBtn');
        const halfBtn = document.querySelector('.pay__halfPriceBtn');
        const discountValue = document.querySelector('.pay__detailsPromoDataNumber');
        const taxesValue = document.querySelector('.pay__detailsTaxesDataNumber');
        // for discount
        if(info.hasDiscount){
            discountValue.innerHTML = info.discountValue.toLocaleString();
        }
        // for text and numbers
        amount.innerHTML = info.amount.toLocaleString();
        subtotalNoTaxes.innerHTML = info.subtotalNoTaxes.toLocaleString();
        taxesValue.innerHTML = info.taxesValue.toLocaleString();
        finalValue.innerHTML = info.finalValue.toLocaleString();
        // for buttons
        totalBtn.innerHTML = info.finalValue.toLocaleString();
        halfBtn.innerHTML = (info.finalValue/2).toLocaleString();
    }
});