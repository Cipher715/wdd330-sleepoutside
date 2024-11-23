import ProductData from "./ProductData.mjs";
import ProductList from "./ProductList.mjs";
import { loadHeaderFooter, getParams } from "./utils.mjs";

loadHeaderFooter();


const category = getParams('category');
const dataSource = new ProductData();
const listElement = document.querySelector('.product-list');
const itemList = new ProductList(category, dataSource, listElement);

itemList.init();