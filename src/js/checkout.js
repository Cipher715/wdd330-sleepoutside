import { loadHeaderFooter } from "./utils.mjs";
import CheckoutProcess from "./checkoutProcess.mjs";

loadHeaderFooter();

const myCheckout = new CheckoutProcess("so-cart", "#order-summary");
myCheckout.init();
myCheckout.calculateOrdertotal();
document.forms['checkout'].addEventListener('submit', (e) => {
    e.preventDefault();
    const myForm = document.forms['checkout'];
    const chek_status = myForm.checkValidity();
    if(chek_status){
        myCheckout.checkout();
    }
});
