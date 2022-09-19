import faker from "faker";

// to mount cart
const mount = (el) => {
  let cartText = `<div>You have ${faker.random.number()} items in your cart..</div>`;

  el.innerHTML = cartText;
};

// mount isolation mode
if (process.env.NODE_ENV === "development") {
  let el = document.querySelector("#dev-cart");
  if (el) {
    mount(el);
  }
}

// mount in host
export { mount };
