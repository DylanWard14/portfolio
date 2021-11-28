import React from "react";
import classNames from "classnames/bind";
import emailjs from "emailjs-com";
import { useForm, SubmitHandler } from "react-hook-form";

import * as styles from "./Contact.module.scss";

type FormValues = {
  from_name: string;
  user_email: string;
  message_subject: string;
  message: string;
};

export const Contact = () => {
  const formRef = React.useRef<HTMLFormElement | null>(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitted },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = React.useCallback(
    async (data) => {
      const serviceId = process.env.GATSBY_CONTACT_SERVICE_ID;
      const templateId = process.env.GATSBY_CONTACT_TEMPLATE_ID;
      const userId = process.env.GATSBY_CONTACT_USER_ID;

      if (serviceId && templateId && userId && !isSubmitting) {
        return emailjs.send(serviceId, templateId, data, userId).then(
          (result) => {
            console.log(result.text);
            reset();
          },
          (error) => {
            console.log(error.text);
          }
        );
      }
    },
    [isSubmitting, reset]
  );

  return (
    <div className={styles.component}>
      <h2 className={styles.heading}>Contact</h2>
      {isSubmitted && (
        <p className={styles.success_message}>
          Thank you for you enquiry, I will response ASAP.
        </p>
      )}
      <form ref={formRef} onSubmit={handleSubmit(onSubmit)}>
        <label>
          <div className={styles.label_container}>
            Full Name *
            {errors.from_name && (
              <p className={styles.error}>Please supply a Full Name</p>
            )}
          </div>
          <input
            className={styles.input}
            type="text"
            required
            {...register("from_name", { required: true })}
          />
        </label>

        <label>
          <div className={styles.label_container}>
            Email *
            {errors.user_email && (
              <p className={styles.error}>
                Please supply a valid Email Address
              </p>
            )}
          </div>
          <input
            className={styles.input}
            type="text"
            required
            {...register("user_email", {
              required: true,
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "invalid email address",
              },
            })}
          />
        </label>

        <label>
          <div className={styles.label_container}>
            Subject *
            {errors.message_subject && (
              <p className={styles.error}>Please supply a Subject</p>
            )}
          </div>
          <input
            className={styles.input}
            type="text"
            required
            {...register("message_subject", { required: true })}
          />
        </label>

        <label>
          <div className={styles.label_container}>
            Message *
            {errors.message && (
              <p className={styles.error}>Please supply a Message</p>
            )}
          </div>
          <textarea
            className={classNames(styles.input, styles.message)}
            required
            {...register("message", { required: true })}
          />
        </label>

        <div className={styles.label_container}>
          <button
            className={styles.submit}
            type="submit"
            value="Send"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending" : "Send Mail"}
          </button>
          {Object.entries(errors).length > 0 && (
            <p className={styles.error}>Please fill in the required fields</p>
          )}
        </div>
      </form>
    </div>
  );
};

export default Contact;
