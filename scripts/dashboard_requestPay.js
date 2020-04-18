window.addEventListener('load', () => {
    const btnDiscount = document.querySelector('.pay__buttonsFill');
    const btnTotal = document.querySelector('.pay__buttonsNoFill');
    const circlebtnTotal = document.querySelector('.pay__buttonsNoFillCircle');
    const circlebtnDiscount = document.querySelector('.pay__buttonsFillCircle');

    btnTotal.addEventListener('click', () =>{
        btnTotal.style.background = '#294F75';
        btnDiscount.style.background = 'white';
        btnTotal.classList.add('pay__buttonsNoFill--fill');
        circlebtnTotal.classList.add('pay__buttonsNoFillCircle--fill');
        btnDiscount.classList.add('pay__buttonsFill--nofill');
        circlebtnDiscount.style.border = '2px solid #294F75';
    });

    btnDiscount.addEventListener('click', () =>{
        btnTotal.style.background = 'white';
        btnDiscount.style.background = '#294F75';
        btnTotal.classList.remove('pay__buttonsNoFill--fill');
        circlebtnTotal.classList.remove('pay__buttonsNoFillCircle--fill');
        btnDiscount.classList.remove('pay__buttonsFill--nofill');
        circlebtnDiscount.style.border = '2px solid white';
    });


});