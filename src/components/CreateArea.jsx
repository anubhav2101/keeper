import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';


function CreateArea(props) {
  const [isExpanded , setExpanded] = useState(false)
 const [note , setNote] = useState({
  title: "",
  content: ""
 })

 function handleChange (event){
  const {name , value} =event.target

  setNote(prevNotes=> {
    return {
      ...prevNotes,
      [name] : value
    }
  })
 }

 function expand (){
  setExpanded(true)
 }

 function handleAdd(event){
  props.onAdd(note)
  setNote({
    title: "",
    content: ""
  });
  event.preventDefault()
 }

  return (
    <div>
      <form  className="create-note">
        { isExpanded && <input 
        name="title" 
        onChange = {handleChange}
        value={note.title} 
        placeholder="Title" 
        />}

        <textarea 
        name="content"
        onChange={handleChange}
        onClick={expand}
        value={note.content}
        placeholder="Take a note..." 
        rows= {isExpanded ? 3 : 1}  
        />

        <Zoom in = {isExpanded}>
        <Fab onClick={handleAdd}>
          <AddIcon/>
        </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
