import ExternalServices from "./ExternalServices.mjs";
import ProductList from "./ProductList.mjs";
import { loadHeaderFooter, getParams } from "./utils.mjs";

loadHeaderFooter();


const category = getParams('category');
const dataSource = new ExternalServices();
const listElement = document.querySelector('.product-list');
const itemList = new ProductList(category, dataSource, listElement);

itemList.init();