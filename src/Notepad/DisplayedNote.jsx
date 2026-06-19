import { useContext } from "react";
import { NoteData } from "./ContextNote";
const DisplayedNote = () => {
  const { allNote,handleDelete } = useContext(NoteData);

  return (
    <div>
      <p>Display All Notes</p>
      {allNote.length === 0 ? (
        <p>No Note available</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Note</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {allNote.map((ele) => {
              return (
                <tr key={ele.id}>
                  <td>{ele.text}</td>
                 <td><button>Edit</button></td>
                 <td><button onClick={()=>handleDelete(ele.id)}>Delete</button></td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default DisplayedNote;
