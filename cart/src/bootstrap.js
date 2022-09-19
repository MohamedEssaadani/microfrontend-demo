import faker from "faker";

const mount = (el) => {
  let cartText = `<div>You have ${faker.random.number()} items in your cart..</div>`;

  el.innerHTML = cartText;
};

if (process.env.NODE_ENV === "development") {
  let el = document.querySelector("#dev-cart");
  if (el) {
    mount(el);
  }
}

export { mount };
