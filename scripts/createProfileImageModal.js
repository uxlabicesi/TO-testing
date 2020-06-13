let changeImage = (imgUrl, id) => {};
let setDefaultImages = (imgCompany, imgUser) => {};
let getCompanyCroppie = () => {};
let getUserCroppie = () => {};

window.addEventListener('load', () => {

    //To let the user crop the image if needed, Croppie library is used here
    let company;
    let user;

    //This function changes the image of it's respective component to the one specified in its parameters
    changeImage = (imgUrl, id) => {
        if(id == 'croppieCompany') {
            if(company) {
                company.destroy();
            } else {
                const container = document.querySelector('.register__editPhoto--firstPart');
                const updateBtn = document.createElement('label');
                updateBtn.classList.add('btn', 'btn--small', 'btn--update');
                updateBtn.setAttribute('for', 'update-company');
                updateBtn.innerHTML = 'Cambiar imagen';
                container.appendChild(updateBtn);
            }
            company = new Croppie(document.getElementById(id), { viewport: { width: 150, height: 150, type: 'circle' }});
            company.bind({
                url: imgUrl,
            });
        } else {
            if(user) {
                user.destroy();
            } else {
                const container = document.querySelector('.register__editPhoto--secondPart');
                const updateBtn = document.createElement('label');
                updateBtn.classList.add('btn', 'btn--small', 'btn--update');
                updateBtn.setAttribute('for', 'update-user');
                updateBtn.innerHTML = 'Cambiar imagen';
                container.appendChild(updateBtn);
                container.style.marginBottom = '90px';
            }
            user = new Croppie(document.getElementById(id), { viewport: { width: 150, height: 150, type: 'circle' }});
            user.bind({
                url: imgUrl,
            });
        }
    };    

    getCompanyCroppie = () => {
        if(company) return company;
        return null
    }

    getUserCroppie = () => {
        if(user) return user;
        return null
    }
});