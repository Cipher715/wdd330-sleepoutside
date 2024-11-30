import { loadHeaderFooter } from "./utils.mjs";
import CheckoutProcess from "./checkoutProcess.mjs";

loadHeaderFooter();

const myCheckout = new CheckoutProcess("so-cart", "#order-summary");
myCheckout.init();
myCheckout.calculateOrdertotal();
document.forms['checkout'].addEventListener('submit', (e) => {
    e.preventDefault();
    myCheckout.checkout();
});
