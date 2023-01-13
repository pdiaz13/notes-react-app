import React from "react";
import "./Form.css";

const Form = () => {
  return (
    <form className="note-form">
      <input
        className="note-input"
        type="text"
        placeholder="write a note"
        name="text"
      />
      <button className="note-button"> Add Note</button>
    </form>
  );
};

export default Form;
