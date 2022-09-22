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
      <form>
        <input
          name="title"
          autoFocus
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
          ref={inputTitle}
        />
        <input
          type="text"
          name="text"
          onChange={handleChange}
          onKeyPress={handleKeypress}
          value={note.text}
          placeholder="..."
          row="3"
        />
        <button onClick={submitNote}>+</button>
      </form>
    </div>
  );
}

export default CreateNoteForm;
