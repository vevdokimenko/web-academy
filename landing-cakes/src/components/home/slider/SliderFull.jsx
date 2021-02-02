import React from "react";
import styles from "./SliderFull.module.scss";
import insta from "./../../navbar/socialLinks/images/instagram_icon.webp";

export const SliderFull = (props) => {
  const index = 0;
  const close = () => {
    document.getElementById("SliderFull").classList.add("hide");
  };
  return (
    <div className={styles.container + " hide"} id="SliderFull">
      <button className={`${styles.prevBtn} ${styles.btn}`}></button>
      <button className={`${styles.nextBtn} ${styles.btn}`}></button>
      <button className={styles.closeBtn} onClick={close}>
        <div className={styles.cross}></div>
        <div className={styles.cross}></div>
      </button>
      <div className={styles.content}>
        <figure className={styles.imgWrapper}>
          <img src={process.env.PUBLIC_URL + props.images[index]} alt="" />
        </figure>
        <div className={styles.details}>
          <div className={styles.userDetails}>
            <p className={styles.userName}>
              celebrationscakes8347
              <img src={insta} alt={insta} className={styles.userInst} />
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
