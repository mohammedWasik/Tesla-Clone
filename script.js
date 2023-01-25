const menu = document.getElementById("menu");
const close = document.getElementById("close");
const aside = document.querySelector("aside");
const backdrop = document.querySelector(".backdrop");

menu.addEventListener("click", (event) => {
  aside.classList.add("active");
  backdrop.classList.add("active");
});
close.addEventListener("click", (event) => {
  aside.classList.remove("active");
  backdrop.classList.remove("active");
});
backdrop.addEventListener("click", () => {
  aside.classList.remove("active");
  backdrop.classList.remove("active");
});
