import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
// import notesArray from "../Notes";   //example importing an array
import CreateNoteForm from "./CreateNoteForm";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  }

  return (
    <div>
      <Header />
      <CreateNoteForm onAdd={addNote} />

      {notes.map((noteItem) => {
        return <Note title={noteItem.title} text={noteItem.text} />;
      })}

      {/* no longer maping an imported array  */}
      {/* {notesArray.map((x) => ( */}
      {/* <Note key={x.key} title={x.title} text={x.text} /> */}
      {/* ))} */}

      <Footer />
    </div>
  );
}

export default App;
