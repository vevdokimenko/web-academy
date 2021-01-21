import React from "react";
import styles from "./Subscribe.module.scss";

export class Subscribe extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <form onSubmit={(e) => this.fetchData(e)}>
          <div className={styles.content}>
            <div className={styles.formItem}>
              <h6 className={styles.title}>Subscribe to My Newsletter</h6>
            </div>
            <div className={styles.formItem}>
              <input
                type="email"
                name="email"
                required
                placeholder="Enter your email here*"
                className={styles.email}
              />
            </div>
            <div className={styles.formItem}>
              <button type="submit" className={styles.submitBtn}>
                Subscribe Now
              </button>
            </div>
            <div className={styles.formItem}>
              <p>Thanks for submitting!</p>
            </div>
          </div>
        </form>
      </div>
    );
  }

  fetchData(evt) {
    evt.preventDefault();
    const data = new FormData(evt.target);
    fetch(this.props.url, {
      method: "POST",
      body: data,
    })
      .then((resp) => resp.json())
      .then((data) => {
        this.onSuccessCallback(data);
      })
      .catch((e) => {
        console.error(e);
      });
  }
}
