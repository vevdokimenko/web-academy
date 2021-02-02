import React from "react";
import styles from "./Slider.module.scss";
import { sliderScroll } from "./SliderEngine";
import { SliderFull } from "./SliderFull";
import { SliderItem } from "./SliderItem";

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
          onClick={() => sliderScroll(styles.sliderId, "left", props.images)}
        ></button>
        <SliderItem images={props.images} />
        <button
          id={styles.rightArrow}
          className={styles.sliderControls}
          onClick={() => sliderScroll(styles.sliderId, "right", props.images)}
        ></button>
      </div>
      <SliderFull images={props.images} />
    </div>
  );
};
