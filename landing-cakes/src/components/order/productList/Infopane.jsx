import React from "react";
import styles from "./Infopane.module.scss";

export const Infopane = (props) => {
  // console.log(props);

  const ShowInfopane = () => {
    if (props.item) {
      return (
        <div className={styles.container}>
          <div className={styles.shadow}></div>
          <div className={styles.content}>
            <button className={styles.closebtn}>
              <img
                src={process.env.PUBLIC_URL + props.infopane.closeBtn}
                alt="close"
                onClick={() => props.functions.setPreOrder()}
              />
            </button>
            <div className={styles.imgWrapper}>
              <img
                src={process.env.PUBLIC_URL + props.item.image}
                alt={props.item.title}
              />
            </div>
            <div className={styles.details}>
              <h2 className={styles.detailsTitle}>{props.item.title}</h2>
              <div className={styles.detailsPrice}>${props.item.price}</div>
              <div className={styles.detailsText}>Special requests?</div>
              <button className={styles.detailsAddComment}>
                Add them here. We’ll do our best to make it happen
              </button>
              <div className={styles.detailsQuantity}>
                <div>Quantity</div>
                <div className={styles.detailsQuantityInner}>
                  <button
                    className={styles.detailsQuantityControl}
                    onClick={() => props.functions.decreaseValue()}
                  >
                    <span>-</span>
                  </button>
                  <div>{props.order.cart.quantity}</div>
                  <button
                    className={styles.detailsQuantityControl}
                    onClick={() => props.functions.increaseValue()}
                  >
                    <span>+</span>
                  </button>
                </div>
              </div>
              <button className={styles.addBtn}>
                <span>+</span> ADD TO MY ORDER
              </button>
            </div>
          </div>
        </div>
      );
    } else {
      return <div></div>;
    }
  };

  return <ShowInfopane />;
};
