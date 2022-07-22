const hamNav = document.querySelector(".ham-nav");
const close = document.querySelector(".close-nav");
const nav = document.querySelector("nav");

hamNav.addEventListener("click", () => {
    nav.classList.add("open-nav"); //adds open-nav as class of html element
})

close.addEventListener("click", () => {
    nav.classList.remove("open-nav"); //removes open-nav as class of html element
})