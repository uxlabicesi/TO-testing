
/**
 * This sample calls the function buildPayScreen using the following structure as parameter
 * 
 * info{
 * payStatus: **String** 3 possible values  ("onProcess": When is comming from creation process 
 *             "onError": When the transaction fails and "onSuccess": when the transaction results was successful)
 * message: **String** optional value for message, maybe required for user feedback
 * }
 * 
 * */

window.addEventListener('load', () => {
    
    buildPayScreen({
        payStatus: "onProcess",
        //message: "mensaje opcional, se puede dejar vacio, nulo o undefined... si no se desea mostrar nada adicional"
        requestJob: "Diseñador Web",
        requestLevel: "Operativo",
        requestAmount: 2,
        requestsubtotal: 1800000,
        hasDiscount: true,
        discountValue: 25000,
        requestTotal: 2500000,
        requestTaxes: 190000
    });

   /* buildPayScreen({
        payStatus: "onError",
        //message: "mensaje opcional, se puede dejar vacio, nulo o undefined... si no se desea mostrar nada adicional"
        requestJob: "Diseñador Web",
        requestLevel: "Operativo",
        requestAmount: 2,
        requestsubtotal: 1800000,
        hasDiscount: true,
        discountValue: 25000,
        requestTotal: 2500000,
        requestTaxes: 190000
    });*/

    /*buildPayScreen({
        payStatus: "onSuccess",
        //message: "mensaje opcional, se puede dejar vacio, nulo o undefined... si no se desea mostrar nada adicional"
        requestJob: "Diseñador Web",
        requestLevel: "Operativo",
        requestAmount: 2,
        requestsubtotal: 1800000,
        hasDiscount: true,
        discountValue: 25000,
        requestTotal: 2500000,
        requestTaxes: 190000
    });*/

    /*buildPayScreen({
        payStatus: "onWait",
        //message: "mensaje opcional, se puede dejar vacio, nulo o undefined... si no se desea mostrar nada adicional"
        requestJob: "Diseñador Web",
        requestLevel: "Operativo",
        requestAmount: 2,
        requestsubtotal: 1800000,
        hasDiscount: true,
        discountValue: 25000,
        requestTotal: 2500000,
        requestTaxes: 190000
    });*/
});