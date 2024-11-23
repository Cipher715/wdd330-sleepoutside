import { getParams, loadHeaderFooter } from "./utils.mjs";
import ProductData from "./ProductData.mjs";
import ProductDetails from "./productDetails.mjs";

loadHeaderFooter();

const dataSource = new ProductData(getParams("category"));
const productId = getParams("product");

const product = new ProductDetails(productId, dataSource);
product.init();
