import React from "react";
import { Title } from "../title/Title";
import { Menu } from "./menu/Menu";
import { NotificationBar } from "./NotificationBar";
import styles from "./Order.module.scss";
import { ProductList } from "./productList/ProductList";

export const Order = (props) => {
  // console.log(props);

  return (
    <div>
      <Title title={props.order.title} />
      <NotificationBar notification={props.order.notification} />
      <div className={styles.container}>
        <Menu menu={props.order.menu} functions={props.functions} />
        <ProductList menu={props.order.menu} functions={props.functions} />
        <div className={styles.myOrder}>Cart </div>
      </div>
    </div>
  );
};
