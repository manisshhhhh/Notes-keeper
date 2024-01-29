import React from 'react'
import { useState ,useEffect } from 'react'
import Header from './components/Header'
import InputForm from './components/InputForm'
import Note from './components/Note'

const App = () => {
 
  const [notes, setNotes] = useState([]);
  
  function addNote(note) {
    setNotes((prev) => {
      return [...prev, note];
    })
  }

  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((note, index) => {
          return index != id;
        })
     })
  }

  return (
    <>
      <Header />
      <InputForm onAdd={addNote} />
      <div className="container">
        {notes.map((note,index)=> 
          <Note 
             key={index}
             id ={index}
             title={note.title}
             content={note.content}
             onDelete={deleteNote}
           />
        )}
      </div>
    </>
  )
}

export default App

