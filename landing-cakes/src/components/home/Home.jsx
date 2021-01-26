import React from "react";
import styles from "./Home.module.scss";
import banner1 from "./images/banner1.webp";
import banner2 from "./images/banner2.webp";
import banner3 from "./images/banner3.webp";
import banner4 from "./images/banner4.webp";
import { Button } from "../button/Button";
import { Slider } from "./slider/Slider";

export const Home = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>HANNA BAKES.</h1>
      </div>
      <div className={styles.sectionBanners}>
        <div className={`${styles.bannerItem} ${styles.itemTop}`}>
          <img src={banner1} alt="Cake1" className={styles.bannerImage} />
        </div>
        <div className={`${styles.bannerItem} ${styles.itemTop}`}>
          <h2 className={styles.title2}>
            Designer Cakes Delivered to Your Doorstep
          </h2>
          <Button link="/order" label="Order Here" />
        </div>
        <div className={`${styles.bannerItem} ${styles.itemTop}`}>
          <img src={banner2} alt="Cake2" className={styles.bannerImage} />
        </div>
      </div>
      <div className={styles.centralBanner}>
        <div className={styles.bgGrid}>&nbsp;</div>
        <h5 className={styles.centralBannerTitle}>
          ALL CAKES ARE TAILORED TO YOUR TASTE AND STYLE
        </h5>
      </div>
      <div className={styles.sectionBanners}>
        <div className={`${styles.bannerItem} ${styles.itemBottom}`}>
          <img src={banner3} alt="Hanna" className={styles.bannerImage} />
          <div className={styles.buttonContainer}>
            <Button link="/about" label="Meet Hanna" />
          </div>
        </div>
        <div className={`${styles.bannerItem} ${styles.itemBottom}`}>
          <img src={banner4} alt="Cake3" className={styles.bannerImage} />
          <div className={styles.buttonContainer}>
            <Button link="/contact" label="Contact Me" />
          </div>
        </div>
      </div>
      <Slider />
    </div>
  );
};
