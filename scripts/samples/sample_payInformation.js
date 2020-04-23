/**
 * The following code fragment, modify the data for displaying the payment information for a request,
 * refer to dashboard_payInformation.js file for documentation and more info.
 * 
 * Warning, removing this script makes mandatory to re-write trigger event for pop up creation
 * 
 *payInformation function, can be used for update the info based on server response
 * 
 */

window.addEventListener('load', () => {
    payInformation({
        amount: 2,
        subtotal: 1000000,
    });
});