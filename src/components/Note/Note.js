import React from "react";
import "./Note.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";

const Note = ({ text }) => {
  return (
    <div className="note-container">
      <div className="note-text">{text}</div>
      <FontAwesomeIcon icon={faCircleXmark} className="note-icon" />
    </div>
  );
};

export default Note;
