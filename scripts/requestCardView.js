let requestCardView = (info, srcOrderCardIcon = './resources/orderCard.svg', srcOrderListIcon = './resources/orderList.svg') => {};

window.addEventListener('load', () => {

    requestCardView = (info, srcOrderCardIcon = './resources/orderCard.svg', srcOrderListIcon = './resources/orderList.svg') => {

        const changeBtn = document.querySelector('.content__viewImg');
        const orderSelect = document.querySelector('.content__select');
        const orderBar = document.querySelector('.content__orderbar');
        const requestContainer = document.querySelector('.content__requests');
        const containerFlex = document.querySelector('.content__containerFlex');
        const requestsList = document.querySelectorAll('.request');
        let changeBtnImage = 0;


        changeBtn.addEventListener('click', () => {
            if (changeBtnImage == 0) {
                requestContainer.classList.add('content__requests--list');
                containerFlex.classList.add('content__containerFlex--noPadding');
                changeBtn.setAttribute('src', srcOrderCardIcon);
                orderSelect.classList.add('content__select--inactive');
                orderBar.classList.remove('content__orderbar--inactive');

                requestsList.forEach((e) => {
                    e.classList.add('request--list');
                    const cardView = e.querySelector('.request__card');
                    const listView = e.querySelector('.request__list');
                    listView.classList.remove('request--inactive');
                    cardView.classList.add('request--inactive');
                });

                changeBtnImage = 1;
            } else {
                requestContainer.classList.remove('content__requests--list');
                containerFlex.classList.remove('content__containerFlex--noPadding');
                changeBtn.setAttribute('src', srcOrderListIcon);
                orderSelect.classList.remove('content__select--inactive');
                orderBar.classList.add('content__orderbar--inactive');

                requestsList.forEach((e) => {
                    e.classList.remove('request--list');
                    const cardView = e.querySelector('.request__card');
                    const listView = e.querySelector('.request__list');
                    listView.classList.add('request--inactive');
                    cardView.classList.remove('request--inactive');
                });

                changeBtnImage = 0;
            }
        });
    }
});