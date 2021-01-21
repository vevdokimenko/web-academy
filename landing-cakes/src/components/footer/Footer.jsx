import React from "react";
import styles from "./Footer.module.scss";

export const Footer = () => {
  return (
    <footer>
      <div className={styles.footerContent}>
        <form action="">
          <div className={styles.container}>
            <div className={styles.formItem}>
              <h6 className={styles.title}>Subscribe to My Newsletter</h6>
            </div>

            <input
              type="email"
              name="email"
              placeholder="Enter your email here*"
              className={styles.email}
            />

            <div className={styles.formItem}>
              <button type="submit" className={styles.submitBtn}>
                Subscribe Now
              </button>
            </div>
            <p>Thanks for submitting!</p>
          </div>
        </form>
      </div>
    </footer>
  );
};
