//For documentation on the profileInformation function refer to ./scripts/profileInformation.js

window.addEventListener('load', () => {

    const info = {
        companyName: 'Colgate',
        sector: 'Servicios de tecnología',
        nit: '8001379607',
        address: 'Av. 5N # 23AN – 35',
        companyImg: './resources/companyLogo.svg',
        profileImg: './resources/perfil_img.png',
        username: 'Andrés Trujillo',
        job: 'Analista de selección',
        phoneCountry: 57,
        phoneNumber: '3008200838',
        email: 'andres.trujillo@mimarca.com.co'
    }

    profileInformation(info);
});