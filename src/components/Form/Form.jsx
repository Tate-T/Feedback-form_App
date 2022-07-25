import React from "react";

const Form = () => {
  return (
    <form>
      <input type="text" name="name" placeholder="Your name*" />
      <input type="text" name="email" placeholder="Your e-mail*" />
      <input type="text" name="message" placeholder="Your message*" />
    </form>
  );
};

export default Form;
