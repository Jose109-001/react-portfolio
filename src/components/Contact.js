import React, { useState } from "react";

function emailIsValid(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

const Contact = () => {
  const [errors, setErrors] = useState({});

  const onClick = () => {
    alert("Sending message");
  };

  const onBlur = (event) => {
    const { value, name } = event.target;

    const hasError = value === "" || (name === "email" && !emailIsValid(value));

    setErrors({
      ...errors,
      [name]: hasError,
    });
  };

  return (
    <section className="container" id="contact-me">
      <h2 className="container-title">
        Contact <br />
        Me
      </h2>
      <div className="container-contact">
        <form>
          <label>
            Name
            <input name="name" onBlur={onBlur} placeholder="" />
            {errors.name && (
              <span className="alert-message">This field is required</span>
            )}
          </label>

          <label>
            Email
            <input name="email" onBlur={onBlur} placeholder="" />
            {errors.email && (
              <span className="alert-message">
                Please enter a valid email address
              </span>
            )}
          </label>

          <label>
            Message
            <input name="message" onBlur={onBlur} placeholder="" />
            {errors.message && (
              <span className="alert-message">This field is required</span>
            )}
          </label>

          <button onClick={onClick}>Send</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
