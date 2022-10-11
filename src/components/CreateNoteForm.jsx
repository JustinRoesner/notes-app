import React, { useState, useRef } from "react";

const CreateNoteForm = (props) => {
  const inputTitle = useRef(null);

  const [note, setNote] = useState({
    title: "",
    text: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  };

  const submitNote = (e) => {
    e.preventDefault();

    props.onAdd(note);
    setNote(() => {
      return { title: "", text: "" };
    });
  };

  const handleKeypress = (e) => {
    //submitNote if enter is pressed
    if (e.key === "Enter") {
      inputTitle.current.focus();
      submitNote();
    }
  };

  return (
    <div>
      <form className="Create-Note">
        <input
          className="inputTitle"
          name="title"
          autoFocus
          autoComplete="off"
          // onKeyPress={(e) => {
          //   handleKeypress(e);
          // }}
          onChange={(e) => {
            handleChange(e);
          }}
          value={note.title}
          placeholder="Title"
          ref={inputTitle}
        />
        <textarea //input
          name="text"
          autoComplete="off"
          onChange={(e) => {
            handleChange(e);
          }}
          onKeyDown={(e) => {
            handleKeypress(e);
          }}
          value={note.text}
          placeholder="..."
          rows="3"
        />
        <br />
        <button
          onClick={(e) => {
            submitNote(e);
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default CreateNoteForm;
