import React, { useState } from "react";
import Header from "./Header.tsx";
import Note from "./Note.tsx";
import notesArray from "../data/notesArray"; //example importing an array
import CreateNoteForm from "./CreateNoteForm.tsx";
import DarkModeToggle from "./DarkModeToggle.tsx";
import "../css/styles.scss";

const App = () => {
  const [showExample, setShowExample] = useState<boolean>(false);
  const [notes, setNotes] = useState<any>([]);
  const [arrayNotes, setArrayNotes] = useState([...notesArray]);
  const [theme, setTheme] = useState<string>("dark");

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
    <div className={theme}>
      <div className="background">
        <Header />

        <div style={{ display: "flex" }}>
          <button
            style={{ textAlign: "left", marginLeft: "15px" }}
            onClick={handleExample}
          >
            {showExample ? "Hide Example Notes" : "Show Example Notes"}
          </button>
          <DarkModeToggle theme={theme} setTheme={setTheme} />
        </div>

        <CreateNoteForm onAdd={addNote} />

        <div className="note-container">
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
      </div>
    </div>
  );
};

export default App;
