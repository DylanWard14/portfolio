import React from "react";
import classNames from "classnames/bind";

import * as styles from "./Contact.module.scss";

export const Contact = () => {
  return (
    <div className={styles.component}>
      <h2 className={styles.heading}>Contact</h2>
      <form>
        <label>
          Full Name
          <input className={styles.input} />
        </label>
        <label>
          Email
          <input className={styles.input} />
        </label>
        <label>
          Subject
          <input className={styles.input} />
        </label>
        <label>
          Message
          <textarea className={classNames(styles.input, styles.message)} />
        </label>
        <button
          className={styles.submit}
          onClick={(event) => event.preventDefault()}
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
