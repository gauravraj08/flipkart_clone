import products from "./public/api/products.json";

export const renderList = () => {
  const navbar = document.querySelector(".navbar");
  const template = document.getElementById("nav-list").content;
  console.log(template);

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

    const dropdown = clone.querySelector(".dropdown");
    dropdown.innerHTML = "";

    item.items.forEach((el) => {
      if (item.dropdown) {
        const listItem = document.createElement("li");
        listItem.classList.add("list-item");

        const anchor = document.createElement("a");
        anchor.href = `#${el.toLowerCase().replace(/\s+/g, "-")}`; // Create a unique ID for each item
        anchor.textContent = el;

        listItem.appendChild(anchor);
        dropdown.appendChild(listItem);
      }
    });

    navbar.appendChild(clone);
  });
};
