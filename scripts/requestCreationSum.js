
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
        profession: **String** with the profession,
        knowledge: **String** with the required knowledge,
        observations: **String** with the observations,
        skills: **Array** with the required skills.
        requirements: **Array** with the job's requirements,
        subtotal: **Number**,
        discount: **Number** ONLY include this property if there's a discount applied, represents the value of the discount
            If it's a percentage based discount it must be a number between 0 and 100, else it could be any number.
        discountType: **Number** This number represents the type of discount, 0 is a percentage based discount and
            1 is a fixed discount
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

        amount.innerHTML = info.amount;
        subtotal.innerHTML = info.subtotal.toLocaleString();

        let totalValue;
        if(info.discount) {
            promoContainer.classList.add('pay__detailsPromo--active');

            if(info.discountType == 0) {
                const discountValue = info.subtotal * (info.discount/100);
                promo.innerHTML = discountValue.toLocaleString();
                const iva = (info.subtotal - discountValue) * 0.19;
                totalValue = info.subtotal - discountValue + iva;
            } else {
                const iva = (info.subtotal - info.discount) * 0.19;
                totalValue = info.subtotal - info.discount + iva;
            }
        } else {
            const iva = info.subtotal * 0.19;
            totalValue = (info.subtotal + iva).toLocaleString();
        }

        total.innerHTML = totalValue.toLocaleString();

        info.skills.forEach((e) => {
            let item = document.createElement('li');
            item.innerHTML = MayusFirst(e);
            skills.appendChild(item);
        });

        observations.innerHTML = MayusFirst(info.observations);

        knowledge.innerHTML = info.knowledge;

        profession.innerHTML = MayusFirst(info.profession);

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