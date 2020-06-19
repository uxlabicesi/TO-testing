window.addEventListener('load', () => {

    /*old versión please dont use this one*/
    /*const info = {
        companyName: 'Colgate',
        nit: '800137960',
        username: 'Andrés Trujillo',
        number: '3008200838',
        email: 'andres.trujillo@mimarca.com.co',
        sector: 'O1',
        city: 'O3',
        address: 'Calle 13 # 53-45 Piso 4',
        job: '',
    }*/

    /*New version*/
    const info = {
        companyName: 'Colgate',
        sector: 'O1',
        city: 'O3',
        nit: '800137960',
        address: 'Av. 5N # 23AN – 35',
        companyImg: './resources/companyLogo.svg',
        profileImg: './resources/perfil_img.png',
        username: 'Andrés Trujillo',
        job: 'Analista de selección',
        phoneCountry: 57,
        phoneNumber: '3008200838',
        email: 'andres.trujillo@mimarca.com.co'
    }

    editProfileInformation(info);
});