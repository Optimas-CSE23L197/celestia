const btn = document.getElementById("hambarger");
const menuItem = document.querySelector(".menu-part ul");

btn.addEventListener("click", () => {
    menuItem.classList.toggle("show-menu");
    console.log("hello")
});
