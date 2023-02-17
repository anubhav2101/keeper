import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";
import CreateArea from "./components/CreateArea";

function App() {

  const [notes , setNotes] = useState([]);

  function addNote(newNote) {
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id){
    setNotes(prevNotes =>{
      return prevNotes.filter((nodeItem ,index)=>{
        return index !== id ;
      })
    })
  }
  
  return (
    <div className="App">
      <Header/>
      <CreateArea
      onAdd = {addNote}
      />
      {notes.map((nodeItem , index )=> {
        return (
          <Note
          key = {index}
          id = {index}
          title = {nodeItem.title}
          content = {nodeItem.content}
          onDelete = {deleteNote}
          />
        )
      })}
      <Footer/>
    </div>
  );
}

export default App;
