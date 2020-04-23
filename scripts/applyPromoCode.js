// empty function will be updated after window load.
let applyPromo = (info) => {};

window.addEventListener('load', () => {
    
    /**
     * 
     * @param { } information 
     * 
     * To visualy apply a discount on the request payment the applyPromo function must be used from ./scripts/applyPromoCode.js
        The function receives an Object with the following structure:
        {
        discount: **Number** A number representing the value of the discount, it must be between 0 and 100 in the case of a percentage based
                             discount, or any number higher than 0 for a fixed value discount.
        type: **Number** This number indicates wether or not the discount is a percentage or a fixed amount. 0 indicates percentage, 1 indicates fixed number
        }
     */

    applyPromo = (info) => {
        const btn = document.querySelector('.pay__btn');
        

        btn.addEventListener('click', () => {
            let subtotalValue = parseInt(document.querySelector('.pay__detailsSubtotalDataNumber').innerHTML.replace(/\./gi,''));
            const total = document.querySelector('.pay__detailsTotalNumber');
            const discount = document.querySelector('.pay__detailsPromoDataNumber');
            const discountContainer = document.querySelector('.pay__detailsPromo');
            let totalValue;

            let discountValue;
            if(info.type == 0) {
                discountValue = subtotalValue * (info.discount)/100;
                discount.innerHTML = discountValue.toLocaleString(); 
            } else {
                discountValue = info.discount;
                discount.innerHTML = info.discount.toLocaleString();
            }

            discountContainer.classList.add('pay__detailsPromo--active');

            const iva = (subtotalValue - discountValue) * 0.19;

            totalValue = subtotalValue - discountValue + iva;

            total.innerHTML = totalValue.toLocaleString();

            const halfBtn = document.querySelector('.pay__halfPriceBtn');
            const fullBtn = document.querySelector('.pay__fullPriceBtn');

            halfBtn.innerHTML = (totalValue/2).toLocaleString();
            fullBtn.innerHTML = totalValue.toLocaleString();

            console.log(subtotalValue);
        });
    };
});