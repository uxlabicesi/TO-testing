window.addEventListener('load', () => {

    //Both inputs type file for their respective profile images
    const companyImg = document.getElementById('upload-company');
    const updateCompanyImg = document.getElementById('update-company');
    const userImg = document.getElementById('upload-user');
    const updateUserImg = document.getElementById('update-user');

    //Changes the image to crop to the one the user uploads
     companyImg.addEventListener('change', (event) => {
         changeImage(URL.createObjectURL(event.target.files[0]), 'croppieCompany');
     });

     updateCompanyImg.addEventListener('change', (event) => {
        changeImage(URL.createObjectURL(event.target.files[0]), 'croppieCompany');
    });

    userImg.addEventListener('change', (event) => {
        changeImage(URL.createObjectURL(event.target.files[0]), 'croppieUser');
    });  
    
    updateUserImg.addEventListener('change', (event) => {
        changeImage(URL.createObjectURL(event.target.files[0]), 'croppieUser');
    });  
});