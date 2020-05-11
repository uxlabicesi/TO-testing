window.addEventListener('load', () => {
    const changeBtn = document.querySelector('.content__viewImg');
    changeBtn.addEventListener('click', () => {
        requestCardView('./resources/orderCard.svg', './resources/orderList.svg');
    });
});