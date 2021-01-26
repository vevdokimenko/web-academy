import React from "react";
import { fetchData } from "../../fetcherData/Fetcher";
import styles from "./Subscribe.module.scss";

export class Subscribe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formId: "",
      thnxId: "",
    };
  }

  componentDidMount() {
    this.setState({ formId: styles.formId });
    this.setState({ thnxId: styles.thanks });
  }

  render() {
    return (
      <div className={styles.container}>
        <form
          id={styles.formId}
          onSubmit={(e) =>
            fetchData(e, this.props.url, this.state.formId, this.state.thnxId)
          }
        >
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
              <p id={styles.thanks} className="hide">
                Thanks for submitting!
              </p>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
