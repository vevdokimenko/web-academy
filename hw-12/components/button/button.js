const modalAdd = (root) => {
  const modalArrow = document.createElement("div");
  const modalContent = document.createElement("div");
  const modalContentHeader = document.createElement("div");
  const stats = document.createElement("div");
  const level = document.createElement("p");
  const lesson = document.createElement("p");
  const buttonKey = document.createElement("button");
  const buttonTheory = document.createElement("button");
  const buttonStart = document.createElement("button");

  modalArrow.classList.add("modal__arrow");
  modalContent.classList.add("modal__content");
  modalContentHeader.classList.add("modal__content_header");
  stats.classList.add("stats");
  buttonKey.classList.add("button", "key");
  buttonTheory.classList.add("button", "theory");
  buttonStart.classList.add("button", "start");

  level.innerHTML = "Уровень 0/5";
  lesson.innerHTML = "Урок 0 из 3";
  buttonTheory.innerHTML = "Теория";
  buttonStart.innerHTML = "Старт";

  modalContent.appendChild(modalContentHeader);
  modalContent.appendChild(buttonTheory);
  modalContent.appendChild(buttonStart);
  modalContentHeader.appendChild(stats);
  modalContentHeader.appendChild(buttonKey);
  stats.appendChild(level);
  stats.appendChild(lesson);
  root.appendChild(modalArrow);
  root.appendChild(modalContent);
  root.classList.add("show");
};

const modalHide = (root) => {
  root.classList.remove("show");
  root.innerHTML = "";
};

export { modalAdd, modalHide };
