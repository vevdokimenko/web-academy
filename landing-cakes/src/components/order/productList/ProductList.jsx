import React from "react";
import { ProductItem } from "./ProductItem";
import styles from "./ProductList.module.scss";

export const ProductList = (props) => {
  // console.log(props);

  const currentMenuTree = chooseCurrentMenuTree(props.menu.submenu);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>{props.menu.title}</h2>
        <p className={styles.desc}>{props.menu.description}</p>
      </div>
      <div className={styles.subHeader}>
        <h3 className={styles.subTitle}>{currentMenuTree.subTitle}</h3>
        <p className={styles.subDesc}>{currentMenuTree.subDescription}</p>
      </div>
      <ProductItem items={currentMenuTree.items} functions={props.functions} />
    </div>
  );
};

// returns active submenu tree
const chooseCurrentMenuTree = (arr) => {
  let tree;
  arr.forEach((element) => {
    if (element.active) {
      tree = element;
    }
  });
  return tree;
};
