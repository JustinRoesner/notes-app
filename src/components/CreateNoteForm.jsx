import React, { useState, useRef } from "react";

function CreateNoteForm(props) {
  const inputTitle = useRef(null);

  const [note, setNote] = useState({
    title: "",
    text: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function submitNote(e) {
    e.preventDefault();

    props.onAdd(note);
    setNote(() => {
      return { title: "", text: "" };
    });
  }

  function handleKeypress(e) {
    //submitNote if enter is pressed
    if (e.key === "Enter") {
      inputTitle.current.focus();
      submitNote();
    }
  }

  return (
    <div>
      <form className="Create-Note">
        <input
          className="inputTitle"
          name="title"
          autoFocus
          autoComplete="off"
          onKeyPress={handleKeypress}
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
          ref={inputTitle}
        />
        <textarea //input
          name="text"
          autoComplete="off"
          onChange={handleChange}
          onKeyDown={handleKeypress}
          value={note.text}
          placeholder="..."
          rows="3"
        />
        <br />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateNoteForm;
