window.addEventListener('load', () => {

    //Both inputs type file for their respective profile images
    const companyImg = document.getElementById('upload-company');
    const userImg = document.getElementById('upload-user');

    //Changes the image to crop to the one the user uploads
     companyImg.addEventListener('change', (event) => {
         changeImage(URL.createObjectURL(event.target.files[0]), 'croppieCompany');
     });

    userImg.addEventListener('change', (event) => {
        changeImage(URL.createObjectURL(event.target.files[0]), 'croppieUser');
    });    
});