import React from "react";
import { Title } from "../title/Title";
import { Menu } from "./menu/Menu";
import { NotificationBar } from "./NotificationBar";
import styles from "./Order.module.scss";

export const Order = (props) => {
  //   console.log(props);
  return (
    <div>
      <Title title={props.title} />
      <NotificationBar notification={props.notification} />
      <div className={styles.container}>
        <Menu menu={props.order.menu} updateMenu={props.updateMenu} />
        <div className={styles.productList}>productList</div>
        <div className={styles.myOrder}>myOrder</div>
      </div>
    </div>
  );
};
