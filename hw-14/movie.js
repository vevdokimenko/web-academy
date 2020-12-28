class Movie {
  constructor(root, data) {
    this.root = root;
    this.data = data;
  }

  render() {
    const { title, description, rating, preview } = this.data;

    this.domElement = document.createElement("div");
    this.domElement.classList.add("movie-card");
    this.figureEl = document.createElement("figure");
    this.figureEl.classList.add("movie-card__pic");
    this.posterImg = document.createElement("img");
    this.posterImg.classList.add("movie-card__img");
    this.posterImg.src = preview;
    this.posterImg.alt = title;

    // If no image
    this.posterImg.addEventListener("error", () => {
      this.posterImg.src = "./assets/images/default-poster.jpg";
    });

    const template = `
      <div class="movie-card__shadow"></div>
      <div class="movie-card__sale"></div>
      <div class="movie-card__rating">${rating}</div>
      <div class="movie-card__content">
        <h2 class="movie-card__title">${title}</h2>
        <p class="movie-card__description">${description.slice(0, 200)}</p>
        <button class="movie-card__buy">Buy!</button>
      </div>`;

    this.figureEl.appendChild(this.posterImg);
    this.figureEl.insertAdjacentHTML("beforeend", template);
    this.domElement.appendChild(this.figureEl);
    this.root.append(this.domElement);
  }
}

export { Movie };
