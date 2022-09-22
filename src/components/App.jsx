import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notesArray from "../Notes";

function App() {
  return (
    <div>
      <Header />
      {notesArray.map((x) => (
        <Note key={x.key} title={x.title} text={x.text} />
      ))}
      <Footer />
    </div>
  );
}

export default App;
