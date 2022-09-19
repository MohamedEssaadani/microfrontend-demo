import { mount as mountProducts } from "products/ProductsIndex";
import { mount as mountCart } from "cart/CartIndex";

console.log("This is Container...");

// call mount from products to show products
let productElement = document.querySelector("#container-products");
mountProducts(productElement);

let cartElement = document.querySelector("#container-cart");
mountCart(cartElement);
