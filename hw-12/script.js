import { modalAdd, modalHide } from "./components/button/button.js";

const circleButton = document.querySelector(".circle-btn");
const modalRoot = document.querySelector(".modal__container");
let isModalDisplayed = false;

circleButton.addEventListener("click", () => {
  isModalDisplayed ? modalHide(modalRoot) : modalAdd(modalRoot);
  isModalDisplayed = !isModalDisplayed;
});
