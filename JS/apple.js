//Price
const totalPrice = document.getElementById('total-price');
const bestPrice = document.getElementById('best-price');

//Memory


const memory8gb = document.getElementById('8gb-button').addEventListener('click', function () {
    memoryCost.innerText = "0";
    updateTotal();
});

const memory16gb = document.getElementById('16gb-button').addEventListener('click', function () {
    memoryCost.innerText = "180";
    updateTotal();
});

const memoryCost = document.getElementById('extra-memory-price');

//SSD
const ssd256 = document.getElementById('ssd-256-button').addEventListener('click', function () {
    ssdCost.innerText = "0";
    updateTotal();
})

const ssd512 = document.getElementById('ssd-512-button').addEventListener('click', function () {
    ssdCost.innerText = "100";
    updateTotal();
})

const ssd1Tb = document.getElementById('ssd-1tb-button').addEventListener('click', function () {
    ssdCost.innerText = "180";
    updateTotal();
})

const ssdCost = document.getElementById('extra-ssd-price');


//Delivery charge


const freeDelivery = document.getElementById('free-shipping-button').addEventListener('click', function () {
    deliveryCost.innerText = "0";
    updateTotal();
})

const premiumDelivery = document.getElementById('premium-shipping-button').addEventListener('click', function () {
    deliveryCost.innerText = "20";
    updateTotal();
})

const deliveryCost = document.getElementById('delivery-price');




// update Total

function updateTotal() {
    const memoryPrice = parseFloat(memoryCost.innerText);
    const ssdPrice = parseFloat(ssdCost.innerText);
    const deliveryPrice = parseFloat(deliveryCost.innerText);
    const totalCharge = parseFloat(bestPrice.innerText);
    const totalBill = memoryPrice + ssdPrice + deliveryPrice + totalCharge;

    document.getElementById('total-price').innerText = totalBill;
}


// Coupon
document.getElementById('apply-button').addEventListener('click', function () {
    const promoField = document.getElementById('input-promo');
    const coupon = promoField.value;
    if (coupon == 'stevekaku') {

    }

})



