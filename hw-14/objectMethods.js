import { MovieList } from "./movieList.js";

const body = document.querySelector("body");
const movieList = new MovieList(body);
movieList.fetchData();
