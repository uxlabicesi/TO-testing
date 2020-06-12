let changeImage = (imgUrl, id) => {};
let setDefaultImages = (imgCompany, imgUser) => {};

window.addEventListener('load', () => {

    //To let the user crop the image if needed, Croppie library is used here
    let company;
    let user;

    //This function changes the image of it's respective component to the one specified in its parameters
    changeImage = (imgUrl, id) => {
        if(id == 'croppieCompany') {
            if(company) company.destroy();
            company = new Croppie(document.getElementById(id), { viewport: { width: 150, height: 150, type: 'circle' }});
            company.bind({
                url: imgUrl,
            });
        } else {
            if(user) user.destroy();
            user = new Croppie(document.getElementById(id), { viewport: { width: 150, height: 150, type: 'circle' }});
            user.bind({
                url: imgUrl,
            });
        }
    };

    setDefaultImages = (imgCompany, imgUser) => {

        //--------------------------------- Modal for company profile image
        const companyImgChange = document.getElementById('companyImgChange');
        const companyImgModal = document.getElementById('companyImgModal');
        const companyModalClose = companyImgModal.querySelector('.popUp__contentClose');
    
        companyImgChange.addEventListener('click', () => {
            companyImgModal.classList.remove('popUp--inactive');
            if(!company) changeImage(imgCompany, 'croppieCompany');
        });
    
        companyModalClose.addEventListener('click', () => {
            companyImgModal.classList.add('popUp--inactive');
        });

        //---------------------------------- Modal for user profile image
        const userImgChange = document.getElementById('userImgChange');
        const userImgModal = document.getElementById('userImgModal');
        const userModalClose = userImgModal.querySelector('.popUp__contentClose');
    
        if( userImgChange!== null )
        userImgChange.addEventListener('click', () => {
            userImgModal.classList.remove('popUp--inactive');
            if(!user) changeImage(imgUser, 'croppieUser');
        });
    
        userModalClose.addEventListener('click', () => {
            userImgModal.classList.add('popUp--inactive');
        });
    };
    
});