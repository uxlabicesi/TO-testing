/**
     * 
     * @param { } information 
     * 
     *To update and display the profile information use the profileInformation function on ./scripts/profileInformation.js
        The function receives an Object with the following structure:
        {
        companyName: **string** with the name of the company,
        sector: **string** with the sector the company belongs to,
        nit: **string** with the company's Nit,
        address: **string** with the company's address,
        companyImg: **string** with the route to the company's profile image,
        profileImg: **string** with the route to the user's profile image,
        username: **string** with the route to the user's name,
        job: **string** with the route to the user's job,
        phoneCountry: **Number or string** with the phone's number identifier for the user's country, ej, 57 for Colombia o 1 for USA,
        phoneNumber: **string** with the user's phone number without format, ej, 3102742947,
        email: **string** with the user's email
     */

// empty function will be updated after window load.
let profileInformation = (info) => {}

window.addEventListener('load', () => {
    

    profileInformation = (info) => {
        const companyName = document.getElementById('companyName');
        const sector = document.getElementById('sector');
        const nit = document.getElementById('nit');
        const address = document.getElementById('address');
        const companyImg = document.getElementById('companyImg');
        const profileImg = document.getElementById('profileImg');
        const username = document.getElementById('username');
        const job = document.getElementById('job');
        const phoneNumber = document.getElementById('phoneNumber');
        const email = document.getElementById('email');
        
        companyName.innerHTML = info.companyName;
        sector.innerHTML = info.sector;
        
        let nitValue = 'NIT ';
        for(let i = 0; i < 10; i++) {
            nitValue += info.nit.charAt(i);
            if(i === 2 || i === 5) {
                nitValue += '.';
            } /*else if (i === 8) {
                nitValue += '-';
            }*/
        }

        nit.innerHTML = nitValue;
        address.innerHTML = info.address;

        if(info.address===null||info.address === undefined || info.address === ""){
            address.style = "display:none"
        }



        companyImg.setAttribute('src', info.companyImg);
        
        profileImg.setAttribute('src', info.profileImg);
        username.innerHTML = info.username;


        job.innerHTML = info.job;

        if(info.job===null||info.job === undefined || info.job === ""){
            job.style = "display:none"
        }
        
        let phoneValue = '+' + info.phoneCountry + ' ';
        for(let i = 0; i < info.phoneNumber.length; i++) {
            if(info.phoneNumber.length === 10) {
                if(i === 0) {
                    phoneValue += '(';
                } else if(i === 6) {
                    phoneValue += ' ';
                }
            }
            
            phoneValue += info.phoneNumber.charAt(i);
            
            if(info.phoneNumber.length === 10 && i === 2) {
                phoneValue += ')';
            }

            if(i === 2) {
                phoneValue += ' ';
            } 
        }

        phoneNumber.innerHTML = phoneValue;
        email.innerHTML = info.email;
    }
});