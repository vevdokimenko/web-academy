import React from "react";
import styles from "./SocialLinks.module.scss";
import fb from "./images/fb_icon.webp";
import inst from "./images/instagram_icon.webp";
import pin from "./images/pinterest_icon.webp";
import tw from "./images/twitter_icon.webp";

export const SocialLinks = () => {
  return (
    <div className={styles.container}>
      <a href="http://www.facebook.com/wix" className={styles.item}>
        <img src={fb} alt="fb" />
      </a>
      <a href="http://www.twitter.com/wix" className={styles.item}>
        <img src={inst} alt="instagram" />
      </a>
      <a href="https://www.pinterest.com/wixcom/" className={styles.item}>
        <img src={pin} alt="pinterest" />
      </a>
      <a href="https://instagram.com/wix/" className={styles.item}>
        <img src={tw} alt="twitter" />
      </a>
    </div>
  );
};
