import React from "react";
import styles from "./Menu.module.scss";

export const MenuItem = (props) => {
  // console.log(props);

  const menuItem = props.submenu.map((item, key) => (
    <button
      key={key}
      className={item.active ? `${styles.item} ${styles.active}` : styles.item}
      onClick={() => props.functions.updateMenu(key)}
    >
      {item.subTitle}
    </button>
  ));
  return <div>{menuItem}</div>;
};
