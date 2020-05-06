/**
 * This script handles the interaction for the buttons on the request payment, changing the color of the 50% and 100% 
 * buttons depending on which the user clicked
 */

window.addEventListener('load', () => {
    const btnDiscount = document.querySelector('.pay__buttonsBtn--half');
    const btnTotal = document.querySelector('.pay__buttonsBtn--full');

    btnTotal.addEventListener('click', () => {
        btnTotal.classList.remove('pay__buttonsBtn--nofill');
        btnTotal.classList.add('pay__buttonsBtn--fill');
        btnDiscount.classList.add('pay__buttonsBtn--nofill');
        btnDiscount.classList.remove('pay__buttonsBtn--fill');
    });

    btnDiscount.addEventListener('click', () => {
        btnTotal.classList.add('pay__buttonsBtn--nofill');
        btnTotal.classList.remove('pay__buttonsBtn--fill');
        btnDiscount.classList.remove('pay__buttonsBtn--nofill');
        btnDiscount.classList.add('pay__buttonsBtn--fill');
    });
});