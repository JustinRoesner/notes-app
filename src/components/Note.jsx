import React from "react";

function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <button className="deleteButton" onClick={handleClick}>
        x
      </button>
      <h1>{props.title}</h1>
      <p>{props.text}</p>
    </div>
  );
}

export default Note;
