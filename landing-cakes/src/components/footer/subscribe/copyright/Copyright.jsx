import React from "react";
import styles from "./Copyright.module.scss";

export const Copyright = (props) => {
  return (
    <div className={styles.wrapper}>
      <p className={styles.text}>
        © 2023 by Hanna Bakes. Proudly created with{" "}
        <a href={props.createdBy.link}>{props.createdBy.name}</a>
      </p>
    </div>
  );
};
