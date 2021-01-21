import React from "react";
import styles from "./SocialLinks.module.scss";

export const SocialLinks = () => {
  return (
    <div className={styles.container}>
      <a href="http://www.facebook.com/wix" className={styles.item}>
        <img src="/assets/images/fb_icon.webp" />
      </a>
      <a href="http://www.twitter.com/wix" className={styles.item}>
        <img src="/assets/images/instagram_icon.webp" />
      </a>
      <a href="https://www.pinterest.com/wixcom/" className={styles.item}>
        <img src="/assets/images/pinterest_icon.webp" />
      </a>
      <a href="https://instagram.com/wix/" className={styles.item}>
        <img src="/assets/images/twitter_icon.webp" />
      </a>
    </div>
  );
};
