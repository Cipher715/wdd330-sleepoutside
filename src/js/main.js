import ProductData from "./ProductData.mjs";
import ProductListing from "./ProductList.mjs";
import { loadHeaderFooter } from "./utils.mjs";

loadHeaderFooter();

const productData = new ProductData("tents");
const listElement = document.querySelector(".product-list");
const productList = new ProductListing("tents", productData, listElement);


productList.init();
