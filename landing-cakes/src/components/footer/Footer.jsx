import React from "react";
import styles from "./Footer.module.scss";
import { Subscribe } from "./subscribe/Subscribe";
import { Copyright } from "./subscribe/copyright/Copyright";

export const Footer = (props) => {
  return (
    <footer className={styles.footer}>
      <Subscribe url="testUrl" />
      <Copyright createdBy={props.createdBy} />
    </footer>
  );
};
