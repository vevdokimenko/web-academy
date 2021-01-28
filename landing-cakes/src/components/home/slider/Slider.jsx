import React from "react";
import styles from "./Slider.module.scss";
import { SliderItems } from "./SliderItems";

const images = [
  "/images/01.jpg",
  "/images/02.jpg",
  "/images/03.jpg",
  "/images/04.jpg",
  "/images/05.jpg",
  "/images/06.jpg",
  "/images/07.jpg",
  "/images/08.jpg",
  "/images/09.jpg",
  "/images/10.jpg",
  "/images/11.jpg",
  "/images/12.jpg",
  "/images/13.jpg",
  "/images/14.jpg",
  "/images/15.jpg",
  "/images/16.jpg",
  "/images/17.jpg",
  "/images/18.jpg",
];

export const Slider = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.titleWrapper}>
        <h2>Follow me on Instagram</h2>
      </div>
      <div className={styles.slider}>
        <button
          id={styles.leftArrow}
          className={styles.sliderControls}
          onClick={() => sliderScroll(styles.sliderId, "left")}
        ></button>
        <SliderItems images={images} />
        <button
          id={styles.rightArrow}
          className={styles.sliderControls}
          onClick={() => sliderScroll(styles.sliderId, "right")}
        ></button>
      </div>
    </div>
  );
};

const sliderScroll = (sliderId, direction) => {
  const sliderWrapper = document.getElementById(sliderId);
  const countItems = images.length;
  const elHeight = sliderWrapper.offsetHeight;
  const elWidth = sliderWrapper.offsetWidth;
  const offsetPx = Math.floor(elWidth / elHeight) * (elHeight + 10);
  const sliderLeft = isNaN(parseInt(sliderWrapper.style.left))
    ? 0
    : parseInt(sliderWrapper.style.left);

  if (direction === "right") {
    if (-(sliderLeft - offsetPx) > (elHeight + 10) * countItems) return;
    sliderWrapper.style.left = String(sliderLeft - offsetPx) + "px";
  }

  if (direction === "left") {
    if (sliderLeft === 0) return;
    sliderWrapper.style.left = String(sliderLeft + offsetPx) + "px";
  }
};
