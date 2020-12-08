const lighters = document.querySelectorAll(".lighter__light");

const removeColour = (items) => {
  for (let i = 0; i < items.length; i++) {
    items[i].classList.remove("active");
  }
};

for (let i = 0; i < lighters.length; i++) {
  lighters[i].addEventListener("click", () => {
    removeColour(lighters);
    lighters[i].classList.add("active");
  });
}
