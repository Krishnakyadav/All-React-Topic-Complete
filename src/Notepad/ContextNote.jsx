import { createContext, useState } from "react";

export const NoteData = createContext();
const ContextNote = (props) => {
  const [note, setNote] = useState("");
  const [allNote,setAllNote]= useState(()=>{
    const saved = localStorage.getItem("note");
    return saved ? JSON.parse(saved) : []
  })
  console.log(allNote)
  const handleChange = (e) => {
    setNote(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if(!note.trim()){
        alert("field is required")
        return;
    }
    const newNote = {
      id: Date.now(),
      text: note,
    };
    console.log(newNote);
  
    const updatedNote = [...allNote,newNote]
    setAllNote(updatedNote);
    localStorage.setItem("note",JSON.stringify(updatedNote))
    setNote("")
  };

  const handleDelete = (id)=>{
   const filter = allNote.filter((ele)=>ele.id!==id);
   setAllNote(filter);
   localStorage.setItem("note",JSON.stringify(filter))
  }
  return (
    <div>
      <NoteData.Provider value={{ note, handleChange, handleSubmit, allNote ,handleDelete}}>
        {props.children}
      </NoteData.Provider>
    </div>
  );
};

export default ContextNote;
