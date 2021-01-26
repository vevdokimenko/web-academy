import React from "react";
import styles from "./ContactForm.module.scss";
import { fetchData } from "../../fetcherData/Fetcher";

export class ContactForm extends React.Component {
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
      <div className={styles.formWrapper}>
        <form
          id={styles.formId}
          className={styles.form}
          onSubmit={(e) =>
            fetchData(e, this.props.url, this.state.formId, this.state.thnxId)
          }
        >
          <input
            type="text"
            name="name"
            placeholder="Name"
            required
            className={styles.form_input + " " + styles.form_inputName}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className={styles.form_input + " " + styles.form_inputEmail}
          />
          <textarea
            name="message"
            placeholder="Type your message here..."
            required
            className={styles.form_textArea}
          />
          <button type="submit" className={styles.form_button}>
            Submit
          </button>
          <div id={styles.thanks} className={"hide " + styles.info}>
            Thanks for submitting!
          </div>
        </form>
      </div>
    );
  }
}
