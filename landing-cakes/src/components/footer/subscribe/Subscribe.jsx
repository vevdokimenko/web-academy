import React from "react";
import { fetchData } from "../../fetcherData/Fetcher";
import styles from "./Subscribe.module.scss";

export const Subscribe = (props) => {
  const el = document.getElementsByClassName(styles.thanks);
  console.log(el, props.url);
  return (
    <div className={styles.container}>
      <form onSubmit={(e) => fetchData(e, props.url, el)}>
        <div className={styles.content}>
          <div className={styles.formItem}>
            <h6 className={styles.title}>Subscribe to My Newsletter</h6>
          </div>
          <div className={styles.formItem}>
            <input
              type="email"
              name="email"
              required
              placeholder="Enter your email here*"
              className={styles.email}
            />
          </div>
          <div className={styles.formItem}>
            <button type="submit" className={styles.submitBtn}>
              Subscribe Now
            </button>
          </div>
          <div className={styles.formItem}>
            <p className={styles.thanks + " hide"}>Thanks for submitting!</p>
          </div>
        </div>
      </form>
    </div>
  );
};
