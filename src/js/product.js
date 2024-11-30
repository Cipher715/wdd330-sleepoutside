import { getParams, loadHeaderFooter } from "./utils.mjs";
import ExternalServices from "./ExternalServices.mjs";
import ProductDetails from "./productDetails.mjs";

loadHeaderFooter();

const dataSource = new ExternalServices(getParams("category"));
const productId = getParams("product");

const product = new ProductDetails(productId, dataSource);
product.init();
