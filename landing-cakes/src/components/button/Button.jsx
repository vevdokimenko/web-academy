import React from "react";
import styles from "./Button.module.scss";

export class Button extends React.Component {
  render() {
    return (
      <a href={this.props.link} className={styles.button}>
        <span className={styles.button_label}>{this.props.label}</span>
      </a>
    );
  }
}
