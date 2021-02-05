import React from "react";
import styles from "./Menu.module.scss";

export class MenuItem extends React.Component {
  rerenderMenu(key, title) {
    // console.log(this.props);
    this.props.updateMenu(key);
    this.setState({ subTitle: title });
  }

  menuItems = this.props.menu.submenu.map((item, key) => (
    <button
      key={key}
      className={item.active ? `${styles.item} ${styles.active}` : styles.item}
      onClick={() => this.rerenderMenu(key, item.subTitle)}
    >
      {item.subTitle}
    </button>
  ));
  render() {
    console.log(this.state);
    // console.log(this.props);
    return <div>{this.menuItems}</div>;
  }
}
