import React from "react";
import styles from "./Slider.module.scss";

export const SliderItems = (props) => {
  const item = props.images.map((image) => (
    <div className={styles.item}>
      <a className={styles.itemLink}>
        <img
          src={process.env.PUBLIC_URL + image}
          alt={image}
          className={styles.itemImage}
        />
        <div className={styles.itemTitle}>
          @wix: #wix, #website, #freewebsite, #websitetemplate, #wix.com
        </div>
      </a>
    </div>
  ));

  return (
    <div id={styles.sliderId} className={styles.sliderWrapper}>
      {item}
    </div>
  );
};
