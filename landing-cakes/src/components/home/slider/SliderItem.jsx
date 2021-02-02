import React from "react";
import styles from "./Slider.module.scss";

export const SliderItem = (props) => {
  const sliderFullShow = (index) => {
    document.getElementById("SliderFull").classList.remove("hide");
  };

  const item = props.images.map((image, index) => (
    <div className={styles.item} key={image}>
      <button className={styles.itemLink} onClick={() => sliderFullShow(index)}>
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
