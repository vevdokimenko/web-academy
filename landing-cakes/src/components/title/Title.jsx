import React from "react";
import styles from "./Title.module.scss";

export const Title = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>{props.title}</h1>
      </div>
    </div>
  );
};
