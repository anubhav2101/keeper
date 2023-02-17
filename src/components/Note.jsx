import React from "react";
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';

function Note (props){
    function handleDelete (){
        props.onDelete(props.id)
    }
    return (
        <div className="note">
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <button onClick={handleDelete}>
                <RemoveCircleIcon/>
            </button>
        </div>
    )
};
export default Note;