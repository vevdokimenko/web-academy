import React from "react";
import styles from "./SocialLinks.module.scss";

export const SocialLinks = (props) => {
  return (
    <div className={styles.container}>
      <a href="http://www.facebook.com/wix" className={styles.item}>
        <img src={process.env.PUBLIC_URL + props.data.fb} alt="fb" />
      </a>
      <a href="http://www.twitter.com/wix" className={styles.item}>
        <img src={process.env.PUBLIC_URL + props.data.inst} alt="instagram" />
      </a>
      <a href="https://www.pinterest.com/wixcom/" className={styles.item}>
        <img src={process.env.PUBLIC_URL + props.data.pin} alt="pinterest" />
      </a>
      <a href="https://instagram.com/wix/" className={styles.item}>
        <img src={process.env.PUBLIC_URL + props.data.tw} alt="twitter" />
      </a>
    </div>
  );
};
