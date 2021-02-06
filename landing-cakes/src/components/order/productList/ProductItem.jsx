import React from "react";
import styles from "./ProductItem.module.scss";

export const ProductItem = (props) => {
  // console.log(props);

  const productItem = props.items.map((item, key) => (
    <div className={styles.itemWrapper} key={key}>
      <button
        className={styles.itemLink}
        onClick={() => {
          props.functions.setPreOrder(item);
        }}
      >
        <div className={styles.itemInnerCard}>
          <div className={styles.itemImgWrapper}>
            <img
              className={styles.itemImg}
              src={process.env.PUBLIC_URL + item.image}
              alt={`Cake ${key}`}
            />
            <div className={styles.itemImgShadow}></div>
          </div>
          <div className={styles.itemInnerCardText}>
            <p>{item.title}</p>
            <p>${item.price}</p>
          </div>
        </div>
        <div className={styles.itemPlus}>+</div>
      </button>
    </div>
  ));

  return <div className={styles.container}>{productItem}</div>;
};
