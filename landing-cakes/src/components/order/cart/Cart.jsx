import React from "react";
import styles from "./Cart.module.scss";

export const Cart = (props) => {
  console.log(props);

  const ItemsList = props.cart.goods.map((el, key) => (
    <div className={styles.item} key={key}>
      <span>{el.quantity} x </span>
      {el.item.title}
    </div>
  ));

  return (
    <div>
      <div className={styles.header}>
        <h2 className={styles.title}>My Order</h2>
        <div className={styles.itemsQuantity}>
          ({props.cart.goods.length} items)
        </div>
      </div>
      <div className={styles.itemsList}>{ItemsList}</div>
    </div>
  );
};
