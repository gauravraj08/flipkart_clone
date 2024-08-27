import electronics from "./public/api/electronics.json";

export const renderElectronics = () => {
  const eProduct = document.getElementById("product__temp");
  const template = document.getElementById("product-item-template");

  electronics.forEach((el) => {
    const clone = template.content.cloneNode(true);
    const img = clone.querySelector("img");
    const productName = clone.querySelector(".product_name");
    const price = clone.querySelector("span");

    img.src = el.image;
    img.alt = el.product_name;
    productName.textContent = el.product_name;
    price.textContent = el.product_price;

    eProduct.appendChild(clone);
  });
};
