function getId(id){
    return document.getElementById(id);
}
function cal (product, price){
    const bestPrice = getId('best-price');
    const memoryCost = getId('memory-cost');
    const storageCost = getId('storage-cost');
    const deliveryCost = getId('delivery-cost');
    
    // price Update
    getId(product + '-cost').innerText = price;
    //total 
    getId('total-price').innerText = parseInt(bestPrice.innerText) + parseInt(memoryCost.innerText)+ parseInt(storageCost.innerText) + parseInt(deliveryCost.innerText);
    //promo code
    getId('promo-input').disabled = false;
}
// Memory
// getId('sixteenGB').addEventListener('click',function(){
//     cal('memory', 300);
// });
// getId('eightGB').addEventListener('click',function(){
//     cal('memory', 0);
// });
// Storage 
// getId('ssd1').addEventListener('click',function(){
//     cal('storage', 0);
// });
// getId('ssd2').addEventListener('click',function(){
//     cal('storage', 100);
// });
// getId('ssd3').addEventListener('click',function(){
//     cal('storage', 200);
//});
//delivery 
// getId('free-delivery').addEventListener('click',function(){
//     cal('delivery', 0);
// });
// getId('paid-delivery').addEventListener('click',function(){
//     cal('delivery', 10);
// });

//promo code
getId('apply-btn').addEventListener('click', function(){
    const promoInput = getId('promo-input').value;
    if (promoInput == 'pHero'){
        const minus = parseFloat(getId('total-price').innerText)/10;
        getId('total-price').innerText = parseInt(getId('total-price').innerText)- minus;
        getId('promo-input').value = '';
        getId('promo-input').disabled = true;
    }
    else{
        getId('promo-input').value = '';
    }
});