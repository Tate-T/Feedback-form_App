import React from "react";
import s from "./Form.module.css";

const Form = () => {
  return (
    <form>
      <input
        type="text"
        name="name"
        placeholder="Your name*"
        className={s.input}
      />
      <input
        type="text"
        name="email"
        placeholder="Your e-mail*"
        className={s.input}
      />
      <input
        type="text"
        name="message"
        placeholder="Your message*"
        className={s.inputMessage}
      />
    </form>
  );
};

export default Form;
