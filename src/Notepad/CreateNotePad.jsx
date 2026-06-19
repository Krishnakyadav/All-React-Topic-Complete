import {useContext} from "react";
import { NoteData } from "./ContextNote";
const CreateNotePad = () => {
    const {note,handleChange,handleSubmit} = useContext(NoteData);
   
     return (
    <div>
      <h1>CreateNotePad</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" id="note" placeholder="Enter NoteData" value={note} onChange={handleChange} />
        <button>Create</button>
      </form>
    </div>
  );
};

export default CreateNotePad;
