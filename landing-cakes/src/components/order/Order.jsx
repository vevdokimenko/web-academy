import React from "react";
import { Title } from "../title/Title";
import { Menu } from "./menu/Menu";
import { NotificationBar } from "./NotificationBar";
import styles from "./Order.module.scss";
import { ProductList } from "./productList/ProductList";

export const Order = (props) => {
  // console.log(props);
  const currentMenuTree = () => {
    let index = 0;
    props.order.menu.submenu.forEach((element, key) => {
      index = element.active ? key : 0;
    });
    return index;
  };
  return (
    <div>
      <Title title={props.order.title} />
      <NotificationBar notification={props.order.notification} />
      <div className={styles.container}>
        <Menu menu={props.order.menu} updateMenu={props.updateMenu} />
        <ProductList submenu={props.order.menu.submenu[currentMenuTree()]} />
        <div className={styles.myOrder}>myOrder</div>
      </div>
    </div>
  );
};
