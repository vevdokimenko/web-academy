import React from "react";
import styles from "./Menu.module.scss";
import { MenuItem } from "./MenuItem";

export class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeMenuItem: 0,
      title: this.props.menu.title,
    };
  }

  rerenderMenu(key) {
    this.setState({ activeMenuItem: key });
  }

  menuItems = this.props.menu.submenu.map((item, key) => (
    <button
      key={key}
      className={item.active ? `${styles.item} ${styles.active}` : styles.item}
      onClick={() => this.rerenderMenu(key)}
    >
      {item.subTitle}
    </button>
  ));

  render() {
    // console.log(this.props);
    return (
      <div className={styles.container}>
        <button className={styles.userInfoWrapper}>
          <div className={styles.userInfoContent}>
            <object
              className={styles.avatar}
              type="image/svg+xml"
              data={this.props.menu.avatar}
            >
              Your browser does not support SVG
            </object>
            Hi, {this.props.menu.userName}
          </div>
        </button>
        <button className={styles.title}>{this.state.title}</button>
        <div>
          <MenuItem menu={this.props.menu} updateMenu={this.props.updateMenu} />
        </div>
      </div>
    );
  }
}
