import React from "react";
import styles from "./Slider.module.scss";

export const SliderItem = (props) => {
  const item = props.images.map((image, index) => (
    <div className={styles.item} key={image}>
      <button
        className={styles.itemLink}
        onClick={() => props.sliderFullState(index, true)}
      >
        <img
          src={process.env.PUBLIC_URL + image}
          alt={image}
          className={styles.itemImage}
        />
        <div className={styles.itemTitle}>
          @wix: #wix, #website, #freewebsite, #websitetemplate, #wix.com
        </div>
      </button>
    </div>
  ));

  return (
    <div id={styles.sliderId} className={styles.sliderWrapper}>
      {item}
    </div>
  );
};
