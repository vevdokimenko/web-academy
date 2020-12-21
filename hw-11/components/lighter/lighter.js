const lighter = document.querySelector(".traffic");
const lights = document.querySelectorAll(".circle");
let activeLight = 0;
let intervalId;

const lightsOff = () => {
  lights.forEach((element) => {
    element.classList.remove("active");
  });
};

const lightOn = () => {
  lights[activeLight].classList.toggle("active");
};

const increaseIndex = () => {
  activeLight = activeLight + 1 < lights.length ? (activeLight += 1) : 0;
};

const showNext = () => {
  lightsOff();
  lightOn();
  increaseIndex();
};

const toggleColor = () => {
  for (let i = 0; i < lights.length; i++) {
    lights[i].addEventListener("click", () => {
      lightsOff();
      activeLight = i;
      lightOn();
    });
  }
};

const startToggleColor = () => {
  intervalId = setInterval(showNext, 1000);
};

const stopToggleColor = () => {
  clearInterval(intervalId);
};

lighter.addEventListener("mouseenter", () => {
  stopToggleColor();
});

lighter.addEventListener("mouseleave", () => {
  startToggleColor();
});

startToggleColor();

export { toggleColor };
