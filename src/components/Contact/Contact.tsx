import React from "react";

import * as styles from "./Contact.module.scss";

export const Contact = () => {
  return (
    <div className={styles.component}>
      <h2 className={styles.heading}>Contact</h2>
      <p>
        <strong>Email:</strong>
        <a href="mailto:dylan.ward@iinet.net.au">dylan.ward@iinet.net.au</a>
      </p>
      <p>
        <strong>Github:</strong>
        <a href="https://github.com/DylanWard14">
          https://github.com/DylanWard14
        </a>
      </p>
      <p>
        <strong>LinkedIn:</strong>
        <a href="https://www.linkedin.com/in/dylan-w/">
          https://www.linkedin.com/in/dylan-w/
        </a>
      </p>
      <input />
    </div>
  );
};

export default Contact;
