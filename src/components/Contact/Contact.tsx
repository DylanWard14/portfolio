import React from "react";
import classNames from "classnames/bind";
import emailjs from "emailjs-com";

import * as styles from "./Contact.module.scss";

export const Contact = () => {
  const formRef = React.useRef<HTMLFormElement | null>(null);

  const sendEmail = React.useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      const serviceId = process.env.GATSBY_CONTACT_SERVICE_ID;
      const templateId = process.env.GATSBY_CONTACT_TEMPLATE_ID;
      const userId = process.env.GATSBY_CONTACT_USER_ID;

      if (formRef.current && serviceId && templateId && userId) {
        emailjs.sendForm(serviceId, templateId, formRef.current, userId).then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
      }
    },
    [formRef]
  );

  return (
    <div className={styles.component}>
      <h2 className={styles.heading}>Contact</h2>
      <form ref={formRef} onSubmit={sendEmail}>
        <label>
          Full Name
          <input
            className={styles.input}
            type="text"
            name="from_name"
            required
          />
        </label>
        <label>
          Email
          <input
            className={styles.input}
            type="text"
            name="user_email"
            required
          />
        </label>
        <label>
          Subject
          <input
            className={styles.input}
            type="text"
            name="message_subject"
            required
          />
        </label>
        <label>
          Message
          <textarea
            className={classNames(styles.input, styles.message)}
            name="message"
            required
          />
        </label>
        <button className={styles.submit} type="submit" value="Send">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
