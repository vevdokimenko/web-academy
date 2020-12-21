import { createLamp, christmasLights } from "./components/lamp/lamp.js";
import { createPost } from "./components/postMessage/post.js";

const lampRoot = document.querySelector(".container");
createLamp(lampRoot);
christmasLights(lampRoot, 18);

const postRoot = document.querySelector(".post__container");
const header = "Hello";
const text = `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
voluptate earum rem, explicabo vel nisi reiciendis ut cupiditate
nesciunt deleniti dolore at, officia dolorem aspernatur nobis nostrum
possimus ratione tenetur?`;

for (let i = 0; i < 3; i++) {
  createPost(postRoot, header, text);
}
