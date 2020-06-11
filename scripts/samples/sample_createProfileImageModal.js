window.addEventListener('load', () => {

    //Both inputs type file for their respective profile images
    const companyImg = document.getElementById('upload-company');
    const userImg = document.getElementById('upload-user');

    /**Sets Croppie library with the images that the user had, 
    *  being the first parameter the route to the company image
    *  And the second parameter the users image
    */    
    setDefaultImages('../resources/alala.jpg', '../resources/alala.jpg');

    //Changes the image to crop to the one the user uploads
    companyImg.addEventListener('change', (event) => {
        changeImage(URL.createObjectURL(event.target.files[0]), 'croppieCompany');
    });

    userImg.addEventListener('change', (event) => {
        changeImage(URL.createObjectURL(event.target.files[0]), 'croppieUser');
    });    
});