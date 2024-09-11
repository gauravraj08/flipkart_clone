const navbar = document.querySelector(".navbar");
const dropDown = document.querySelector(".drop");
export const hover = () => {
  navbar.addEventListener("click", function (e) {
    if (e.target.className === "navbar") return;
    console.log(e.target.className);
    console.log(e);
    console.log("nav");
  });
};
