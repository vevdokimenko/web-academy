import React from "react";
import styles from "./NotificationBar.module.scss";

export const NotificationBar = (props) => {
  // console.log(props);
  return <div className={styles.wrapper}>{props.notification}</div>;
};
