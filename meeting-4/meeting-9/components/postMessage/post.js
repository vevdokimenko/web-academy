const collapseAll = () => {
  const textAreas = document.querySelectorAll(".text");
  textAreas.forEach((element) => {
    element.classList.add("hidden");
  });
};

const createPost = (root, header, text) => {
  //let isActive = false;
  const headerElement = document.createElement("h2");
  const textElement = document.createElement("p");
  headerElement.innerHTML = header;
  textElement.innerHTML = text;
  textElement.classList.add("hidden");
  textElement.classList.add("text");

  headerElement.addEventListener("click", () => {
    collapseAll();
    textElement.classList.remove("hidden");
    //isActive = !isActive;
  });

  root.appendChild(headerElement);
  root.appendChild(textElement);
};

export { createPost };
