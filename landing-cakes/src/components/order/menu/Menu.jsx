import React from "react";
import styles from "./Menu.module.scss";
import { MenuItem } from "./MenuItem";

export const Menu = (props) => {
  // console.log(this.props);
  return (
    <div className={styles.container}>
      <button className={styles.userInfoWrapper}>
        <div className={styles.userInfoContent}>
          <object
            className={styles.avatar}
            type="image/svg+xml"
            data={props.menu.avatar}
          >
            Your browser does not support SVG
          </object>
          Hi, {props.menu.userName}
        </div>
      </button>
      <button className={styles.title}>{props.menu.title}</button>
      <div>
        <MenuItem submenu={props.menu.submenu} functions={props.functions} />
      </div>
    </div>
  );
};
