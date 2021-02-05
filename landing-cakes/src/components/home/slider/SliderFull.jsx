import React from "react";
import styles from "./SliderFull.module.scss";

export const SliderFull = (props) => {
  // console.log(props);
  return (
    <div className={`${styles.container} ${props.isActive ? "" : "hide"}`}>
      <button
        className={`${styles.prevBtn} ${styles.btn} ${
          props.index === 0 ? "hide" : ""
        }`}
        onClick={() => props.sliderFullState(props.index - 1, true)}
      ></button>
      <button
        className={`${styles.nextBtn} ${styles.btn} ${
          props.index + 1 === props.images.length ? "hide" : ""
        }`}
        onClick={() => props.sliderFullState(props.index + 1, true)}
      ></button>
      <button
        className={styles.closeBtn}
        onClick={() => props.sliderFullState(props.index, false)}
      >
        <div className={styles.cross}></div>
        <div className={styles.cross}></div>
      </button>
      <div className={styles.content}>
        <figure className={styles.imgWrapper}>
          <img
            src={process.env.PUBLIC_URL + props.images[props.index]}
            alt=""
          />
        </figure>
        <div className={styles.details}>
          <div className={styles.userDetails}>
            <p className={styles.userName}>
              celebrationscakes8347
              <img
                src={process.env.PUBLIC_URL + props.socialIcons.inst}
                alt={props.socialIcons.inst}
                className={styles.userInst}
              />
            </p>
          </div>
          <div className={styles.userDescription}>
            <p>
              celebrationscakes8347 @wix: #wix, #website, #freewebsite,
              #websitetemplate, #wix.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
