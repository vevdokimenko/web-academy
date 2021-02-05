import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.scss";
import { SocialLinks } from "./socialLinks/SocialLinks";

export const Navbar = (props) => {
  return (
    <div className={styles.header}>
      <div className={styles.content}>
        <nav>
          <ul className={styles.linkWrapper}>
            <li className={styles.link}>
              <NavLink to="/" className={styles.linkItem}>
                Home
              </NavLink>
            </li>
            <li className={styles.link}>
              <NavLink to="/about" className={styles.linkItem}>
                About
              </NavLink>
            </li>
            <li className={styles.link}>
              <NavLink to="/order" className={styles.linkItem}>
                Order
              </NavLink>
            </li>
            <li className={styles.link}>
              <NavLink to="/contact" className={styles.linkItem}>
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <SocialLinks data={props.data} />
    </div>
  );
};
