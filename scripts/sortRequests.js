let sortRequests = (requests) => {};


//This script receives the ordered list of requests (To see the structure of the request's information refer to the /scripts/createRequest.js script)
//and replaces the previous requests with the sorted ones, also makes sure that the new requests adapt to the view of the current requests (Card or List)
window.addEventListener('load', () => {


    sortRequests = (requests) => {
        //Empty the request's container
        const requestContainer = document.querySelector('.content__requests');
        requestContainer.innerHTML = '';

        requests.forEach(element => {
            createRequest(element);
        });

        if(requestContainer.classList.contains('content__requests--list')) {
            const requestsList = document.querySelectorAll('.request');

            requestsList.forEach(request => {
                request.classList.add('request--list');
                request.querySelector('.request__list').classList.remove('request--inactive');
                request.querySelector('.request__card').classList.add('request--inactive');
            });
        }
    }
});