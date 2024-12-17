import { getLocalStorage, setLocalStorage } from "./utils.mjs";

function cartItemTemplate(item){
    const newItem = `<li class="cart-card divider">
        <span class="cancel" data-id="${item.Id}">X</span>
        <a href="#" class="cart-card__image">
        <img src="${item.Images.PrimaryMedium}" alt="${item.Name}"/></a>
        <a href="#">
        <h2 class="card__name">${item.Name}</h2>
        </a>
        <p class="cart-card__color">${item.Colors[0].ColorName}</p>
        <p class="cart-card__quantity">qty: 1</p>
        <p class="cart-card__price">$${item.FinalPrice}</p>
    </li>`;
    
    return newItem;
}

export default class ShoppingCart{
    constructor(key, parentSelector) {
        this.key = key;
        this.parentSelector = parentSelector;
    }
    renderCartContents() {
        const cartItems = getLocalStorage(this.key);
        let total = 0;
        const totalHtml = document.querySelector(".cart-total");
        if(cartItems != null){
            const htmlItems = cartItems.map((item) => cartItemTemplate(item));
            document.querySelector(this.parentSelector).innerHTML = htmlItems.join("");

            cartItems.map((item) => total += parseFloat(item.FinalPrice));
            totalHtml.innerHTML  =`Total: $${total}`;
            totalHtml.hidden = false;
            const buttons = document.querySelectorAll('.cancel');

            buttons.forEach(button => {
                const id = button.getAttribute("data-id");
                button.addEventListener("click", (event) => {
                    event.stopPropagation();
                    this.cancelItem(id);
                });
            });
        }
        else {
            document.querySelector(this.parentSelector).innerHTML = "The cart is empty."
            totalHtml.hidden = true;
        }
    }

    cancelItem(id) {
        const cartItems = getLocalStorage(this.key);
        const index = cartItems.findIndex(item => item.Id === id);
        console.log(index)
        cartItems.splice(index, 1);
        setLocalStorage("so-cart", cartItems);
        this.renderCartContents()
    }

}