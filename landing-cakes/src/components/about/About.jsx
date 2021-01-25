import React from "react";
import styles from "./About.module.scss";
import hanna from "./images/e1c78c_d5f27255657d452cb413ba28ef3bb976_mv2.webp";
import { Title } from "../title/Title";

export const About = (props) => {
  return (
    <div className="sectionContent">
      <Title title="About Me" />
      <div className={styles.content}>
        <div className={styles.dash}>&nbsp;</div>
        <span className={styles.subTitle}>
          HANNA MASON - PASTRY CHEF, HOME BAKER, BLOGGER
        </span>
        <div className={styles.imageContainer}>
          <img src={hanna} alt="HANNA MASON" />
        </div>
        <div className={styles.texts}>
          <p className={styles.text}>
            I'm a paragraph. Click here to add your own text and edit me. It’s
            easy. Just click “Edit Text” or double click me to add your own
            content and make changes to the font. Feel free to drag and drop me
            anywhere you like on your page. I’m a great place for you to tell a
            story and let your users know a little more about you.
          </p>
          <p className={styles.text}>
            This is a great space to write long text about your company and your
            services. You can use this space to go into a little more detail
            about your company. Talk about your team and what services you
            provide. Tell your visitors the story of how you came up with the
            idea for your business and what makes you different from your
            competitors. Make your company stand out and show your visitors who
            you are.
          </p>
        </div>
      </div>
    </div>
  );
};
