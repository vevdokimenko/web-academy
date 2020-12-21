/**
 * @param {HTMLElement} root
 * @param {string} color
 * @param {number} size
 * @param {number} time
 */

const getRandomNumber = (minValue = 0, maxValue = 256) => {
  return Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
};
const getRandomColor = () =>
  `rgb(${getRandomNumber()}, ${getRandomNumber()}, ${getRandomNumber()})`;

//задание 1 одна лампа
const createLamp = (root, color = "red", size = 50, time = 2000) => {
  const lampToggle = () => {
    lamp.style.backgroundColor = isActive ? "grey" : color;
    isActive = !isActive;
  };

  const lamp = document.createElement("div");
  lamp.setAttribute("style", `width: ${size}px; height: ${size}px;`);
  let isActive = false;
  lamp.classList.add("circle");
  lamp.addEventListener("click", () => {
    lampToggle();
  });
  setInterval(lampToggle, time);

  root.appendChild(lamp);
};

/**
 *
 * @param {HTMLElement} root
 * @param {number} count
 */
const christmasLights = (root, count = 20) => {
  for (let i = 0; i < count; i++) {
    createLamp(root, getRandomColor(), 100, getRandomNumber(500, 5000));
  }
};

export { createLamp, christmasLights };
