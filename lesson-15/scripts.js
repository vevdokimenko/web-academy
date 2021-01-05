import { CommentsPage } from "./comments-page.js";

window.serverUrl = "https://boring-fe.herokuapp.com/";

const page = new CommentsPage(document.querySelector("main"));
