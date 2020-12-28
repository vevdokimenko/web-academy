import { Movie } from "./movie.js";

class MovieList {
  constructor(root) {
    this.root = root;
    this.url = "https://boring-fe.herokuapp.com/movies";
  }

  fetchData() {
    fetch(this.url)
      .then((resp) => resp.json())
      .then((data) => {
        this.movies = data;
        this.render();
      });
  }

  render() {
    this.domElement = document.createElement("div");
    this.domElement.classList.add("grid");
    this.movies.forEach((item) => {
      const gridChild = document.createElement("div");
      gridChild.classList.add("col-4", "col-sm-6", "col-xs-12");
      const movieItem = new Movie(gridChild, item);
      movieItem.render();
      this.domElement.append(gridChild);
    });
    this.root.append(this.domElement);
  }
}

export { MovieList };
