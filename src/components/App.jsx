import React, { useState } from "react";
import Header from "./Header";
import Note from "./Note";
import notesArray from "../notesArray"; //example importing an array
import CreateNoteForm from "./CreateNoteForm";

function App() {
  const [showExample, setShowExample] = useState(false);
  const [notes, setNotes] = useState([]);
  const [arrayNotes, setArrayNotes] = useState([...notesArray]);

  const addNote = (newNote) => {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  };

  const deleteNote = (id) => {
    setNotes((prevnotes) => {
      return prevnotes.filter((total, index) => {
        return index !== id;
      });
    });
  };

  const deleteArrayNote = (id) => {
    setArrayNotes((prevnotes) => {
      return prevnotes.filter((total, index) => {
        return index !== id;
      });
    });
    if (arrayNotes.length == 1) {
      setShowExample(false);
      setArrayNotes([...notesArray]);
    }
  };

  const handleExample = () => {
    setShowExample(!showExample);
    if (showExample) {
      setArrayNotes([...notesArray]);
    }
  };

  return (
    <div>
      <Header />

      <div style={{ display: "flex" }}>
        <button
          style={{ textAlign: "left", marginLeft: "15px" }}
          onClick={handleExample}
        >
          {showExample ? "Hide Example Notes" : "Show Example Notes"}
        </button>
      </div>

      <CreateNoteForm onAdd={addNote} />

      {showExample
        ? arrayNotes.map((x, index) => (
            <Note
              key={x.key}
              id={index}
              title={x.title}
              text={x.text}
              onDelete={deleteArrayNote}
            />
          ))
        : null}

      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            text={noteItem.text}
            onDelete={deleteNote}
          />
        );
      })}
    </div>
  );
}

export default App;
