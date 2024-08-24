import products from "./products.json";
export const renderNav = () => {
  document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector(".navbar");
    const template = document.getElementById("nav-item-template").content;

    // Fetch the JSON data

    products.forEach((item) => {
      const clone = template.cloneNode(true);
      const img = clone.querySelector("img");
      const span = clone.querySelector("span");

      img.src = item.image;
      img.alt = item.name;
      span.textContent = item.name;

      // If the item has a dropdown, add the arrow
      if (item.dropdown) {
        const arrow = document.createElement("span");
        arrow.textContent = "▼";
        arrow.classList.add("dropdown-arrow");
        span.appendChild(arrow);
      }

      navbar.appendChild(clone);
    });
  });
};
