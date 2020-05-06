
   /**
     * 
     * @param { } information 
     * 
     *To visualize a request's details, the requestDetailedInformation function must be utilized from /scripts/requestDetailsInformation.js.
        The function receives an Object with the following structure:
        {
        name: **String** with the job's name,
        amount: **String** with te required amount of candidates,
        status **Array** with two numbers, the first one indicates in which step of the process is the 
        request, it's a number between 0 and 4; and the second one is either 0 or 1, 0 if the user still
        needs to make an action and 1 if he doesn't need to make any action,
        remainingTime: **Número** with the remaining days,
        positionLevel: **String** with the job's level,
        cities: **String array** with the cities names,
        amountPerCity: **array** number of people per city (In the same order as cities),
        time: **String** with the working days,
        hiring: **String** with the type of contract,
        wage: **String** with the wage,
        functions: **Array** with the tasks for the job,
        academicLevel: **String** with the academic level,
        profession: **String Array** with the professions,
        knowledge: **String** with the required knowledge,
        observations: **String** with the observations,
        skills: **Array** with the required skills.
        requirements: **Array** with the job's requirements,

        // The following values where based on mail received on 05/05/2020    
        //subtotalSinIva, tieneDescuento, valorDescuento, valorIva, valorPagar

        subtotalNoTaxes: **Number**,
        hasDiscount: **boolean** 
        // taxesValue: **Number**, // 
        discountValue: **Number** 
        finalValue: ** number **
        
        // we dont know if this flag is required now... 
        selectedPay: **Number** 0 or 1, 0 for 50%, and 1 for 100%.

         // the following were added for suppor new level selection system
        levelResponsability: **Number** // 0: Low, 1: mid: high
        levelDecision: **Number** // 0: Low, 1: mid: high
        peopleInCharge: true // 
        
     */


    

// empty function will be updated after window load.
let requestCreationSummary = (info) => {};


window.addEventListener('load', () => {

    
    requestCreationSummary = (info) => {

        const title = document.querySelector('.reqDetails__title');
        const name = document.querySelector('.name');
        const positionLevel = document.querySelector('.positionLevel');
        const city = document.querySelector('.city');
        const time = document.querySelector('.time');
        const hiring = document.querySelector('.hiring');
        const wage = document.querySelector('.wage');
        const functions = document.querySelector('.reqDetails__infoSection--functions');
        const academicLevel = document.querySelector('.academicLevel');
        const profession = document.querySelector('.profession');
        const knowledge = document.querySelector('.knowledge');
        const observations = document.querySelector('.observations');
        const skills = document.querySelector('.reqDetails__infoSection--skills');
        const amount = document.querySelector('.pay__detailsAmountNumber');
        const subtotal = document.querySelector('.pay__detailsSubtotalDataNumber');
        const promo = document.querySelector('.pay__detailsPromoDataNumber');
        const promoContainer = document.querySelector('.pay__detailsPromo');
        const total = document.querySelector('.pay__detailsTotalNumber');

        
        // added for level

        const responsability = document.querySelector(".responsability");
        const decision = document.querySelector(".decision");
        const incharge = document.querySelector(".incharge");

        switch(info.levelResponsability){
            case 0:
                responsability.innerHTML = "Bajo";
            break;
            case 1:
                responsability.innerHTML = "Medio";
            break;
            case 2:
                responsability.innerHTML = "Alto";
            break;
        }

        switch(info.levelDecision){
            case 0:
                decision.innerHTML = "Bajo";
            break;
            case 1:
                decision.innerHTML = "Medio";
            break;
            case 2:
                decision.innerHTML = "Alto";
            break;
        }

        incharge.innerHTML = info.peopleInCharge==true?"Sí":"No";

        // const taxes = document.querySelector('.pay__detailsTaxesDataNumber');

        // flag for 50% or 100% --- Possible values 0: for "50%" / 1:"100%" 
        let percentToPay = info.selectedPay === 0 ? 0.5 : 1.0;

        // --------------- pay information ---------------- //
        amount.innerHTML = info.amount;
        subtotal.innerHTML = info.subtotalNoTaxes.toLocaleString();
        if(info.hasDiscount){
            promoContainer.classList.add('pay__detailsPromo--active');
            promo.innerHTML = info.discountValue.toLocaleString();
        }
        //taxes.innerHTML = info.taxesValue.toLocaleString();
        total.innerHTML = info.finalValue.toLocaleString();
        // ------------------------------------------------ //

        info.skills.forEach((e) => {
            let item = document.createElement('li');
            item.innerHTML = MayusFirst(e);
            skills.appendChild(item);
        });

        observations.innerHTML = MayusFirst(info.observations);

        knowledge.innerHTML = info.knowledge;

        //profession.innerHTML = MayusFirst(info.profession);
        // mod for multiples professions
        let itemForProfessions = document.createElement('div');
        itemForProfessions.classList.add('reqDetails__infoSection--cities');
        let professionsAsString = "";
        info.profession.forEach((e, index) => {
            if(index < info.profession.length-1){
                professionsAsString += MayusFirst(e) + ", ";
            }else{
                professionsAsString += MayusFirst(e) + ".";
            }
        });
        itemForProfessions.innerHTML = professionsAsString;
        profession.appendChild(itemForProfessions);


        academicLevel.innerHTML = MayusFirst(info.academicLevel);

        info.functions.forEach((e) => {
            let item = document.createElement('li');
            item.innerHTML = MayusFirst(e);
            functions.appendChild(item);
        });

        wage.innerHTML = info.wage;

        hiring.innerHTML = MayusFirst(info.hiring);

        time.innerHTML = MayusFirst(info.time);

        //city.innerHTML = info.city;

        info.cities.forEach((e, index) => {
            let item = document.createElement('div');
            item.classList.add('reqDetails__infoSection--cities');
            //item.style = "margin-left:15px;"
            item.innerHTML = "" + e + " (" + info.amountPerCity[index] + ")";
            city.appendChild(item);

        });

        positionLevel.innerHTML = MayusFirst(info.positionLevel);
       
        title.innerHTML = MayusFirst(info.name);
        name.innerHTML = MayusFirst(info.name);

        // This function formats text so the first letter of a string is in upper case and the 
        // rest of it is lower case
        function MayusFirst(string){
            return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
        }
    }
});

        /*
        let totalValue;
        if(info.discount) {
            promoContainer.classList.add('pay__detailsPromo--active');

            if(info.discountType == 0) {
                const discountValue = (info.subtotal*percentToPay) * (info.discount/100);
                promo.innerHTML = discountValue.toLocaleString();
                const iva = (info.subtotal - discountValue) * 0.19;
                totalValue = info.subtotal - discountValue + iva;
            } else {
                const iva = (info.subtotal - info.discount) * 0.19;
                totalValue = info.subtotal - info.discount + iva;
            }
        } else {
            const iva = (info.subtotal*percentToPay) * 0.19;
            totalValue = (info.subtotal + iva).toLocaleString();
        }*/