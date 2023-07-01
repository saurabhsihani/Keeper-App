import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {
    const [note, setNote] = useState({
        title: "",
        content: ""
    });
    const [isExpanded, setExpanded] = useState(false);

    function handleChange(event) {
        const {name, value} = event.target;
        setNote(prevNote => {
            return {
                ...prevNote,
                [name]: value
            };
        });
    }

    function handleClick(event) {
        props.addNote(note);
        setNote({title: "", content: ""});
        event.preventDefault();
    }

    function expand() {
        setExpanded(true);
    }

    return (
        <div>
            <form className="create-note">
                {isExpanded && <input onChange={handleChange} name="title" placeholder="Title" value={note.title} />}
                <textarea onClick={expand} onChange={handleChange} name="content" placeholder="Take a note..." value={note.content} rows={isExpanded ? 3 : 1} />
                <Zoom in={isExpanded}>
                    <Fab onClick={handleClick}>
                        <AddIcon />
                    </Fab>
                </Zoom>
            </form>
        </div>
    );
}

export default CreateArea;