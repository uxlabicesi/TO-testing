/**
 * The following code fragment, modify the data for applying a discount with the promo code button,
 * refer to applyPromoCode.js file for documentation and more info.
 * 
 * Warning, removing this script makes mandatory to re-write trigger event for pop up creation
 * 
 * applyPromo function, can be used for update the info based on server response when the user uses 
 * the promo code input.
 * 
 */

window.addEventListener('load', () => {
    applyPromo({
        discount: 100000,
        type: 1
    });
});