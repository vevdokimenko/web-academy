import React from "react";
import styles from "./ContactForm.module.scss";

export const ContactForm = (props) => {
  return (
    <div className={styles.formWrapper}>
      <form className={styles.form} onSubmit={(e) => this.fetchData(e)}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          required
          className={styles.form_input + " " + styles.form_inputName}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          className={styles.form_input + " " + styles.form_inputEmail}
        />
        <textarea
          name="message"
          placeholder="Type your message here..."
          required
          className={styles.form_textArea}
        />
        <button type="submit" className={styles.form_button}>
          Submit
        </button>
        <div className={styles.info}>Thanks for submitting!</div>
      </form>
    </div>
  );
};
