import ProductData from "./ProductData.mjs";
import ProductListing from "./ProductList.mjs";

const productData = new ProductData("tents");
const listElement = document.querySelector(".product-list");
const productList = new ProductListing("tents", productData, listElement);

productList.init();
