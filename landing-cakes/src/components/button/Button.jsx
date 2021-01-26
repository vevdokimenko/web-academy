import React from "react";
import styles from "./Button.module.scss";
import { NavLink } from "react-router-dom";

export class Button extends React.Component {
  render() {
    return (
      <NavLink to={this.props.link} className={styles.button}>
        <span className={styles.buttonLabel}>{this.props.label}</span>
      </NavLink>
    );
  }
}
