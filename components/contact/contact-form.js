import { useEffect } from "react";
import { useState } from "react";
import Notification from "../ui/notification";

import classes from "./contact-form.module.css";

async function sendContactData(contactDetails) {
  const response = await fetch("/api/contact", {
    method: "POST",
    body: JSON.stringify(contactDetails),
    headers: {
      "Content-type": "application/json",
    },
  });

  const data = await response.json();

  if (!response.ok) throw new Error(data.message || "Something went wrong");
}

export default function ContactForm() {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredName, setEnteredName] = useState("");
  const [enteredMessage, setEnteredMessage] = useState("");
  const [requestStatus, setRequestStatus] = useState(""); //pending , success , error
  const [requestError, setRequestError] = useState("");

  useEffect(() => {
    if (requestStatus === "success" || requestStatus === "error") {
      const timer = setTimeout(() => {
        setRequestStatus(null);
        setRequestError(null);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [requestStatus]);

  async function sendMessageHandler(event) {
    event.preventDefault();

    setRequestStatus("pending");
    //optional : add client side validation
    try {
      await sendContactData({
        email: enteredEmail,
        name: enteredName,
        message: enteredMessage,
      });
      setRequestStatus("success");
    } catch (err) {
      setRequestError(err.message);
      setRequestStatus("error");
    }
  }

  let notificationData;

  if (requestStatus === "pending") {
    notificationData = {
      status: "pending",
      title: "Sending message...",
      message: enteredMessage,
    };
  }

  if (requestStatus === "success") {
    notificationData = {
      status: "success",
      title: "Success!",
      message: "Message sent successfully!",
    };
  }

  if (requestStatus === "error") {
    notificationData = {
      status: "error",
      title: "Error!",
      message: requestError,
    };
  }

  return (
    <section className={classes.contact}>
      <h1>How can I help you?</h1>
      <form onSubmit={sendMessageHandler} className={classes.form}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              onChange={(event) => setEnteredEmail(event.target.value)}
              required
            />
          </div>

          <div className={classes.control}>
            <label htmlFor="name">Your Name</label>
            <input
              type="name"
              id="name"
              onChange={(event) => setEnteredName(event.target.value)}
              required
            />
          </div>
        </div>

        <div className={classes.control}>
          <label htmlFor="message">Your Message</label>
          <textarea
            rows="5"
            id="message"
            onChange={(event) => setEnteredMessage(event.target.value)}
            required
          ></textarea>
        </div>

        <div className={classes.actions}>
          <button>Send Message</button>
        </div>
      </form>
      {notificationData && (
        <Notification
          status={notificationData.status}
          title={notificationData.title}
          message={notificationData.message}
        />
      )}
    </section>
  );
}
