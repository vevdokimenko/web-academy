import React from "react";
import styles from "./Contact.module.scss";
import { Title } from "../title/Title";
import { ContactForm } from "./contactForm/ContactForm";

export const Contact = (props) => {
  return (
    <div className="sectionContent">
      <Title title="Contact Me" subtitle="123-456-7890 | INFO@MYSITE.COM" />
      <div className={styles.content}>
        <div className={styles.dash}>&nbsp;</div>
        <span className={styles.subTitle}>123-456-7890 | INFO@MYSITE.COM</span>
        <div className={styles.texts}>
          <p className={styles.text}>
            I'm a paragraph. Click here to add your own text and edit me. It’s
            easy. Just click “Edit Text” or double click me to add your own
            content and make changes to the font.
          </p>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};
