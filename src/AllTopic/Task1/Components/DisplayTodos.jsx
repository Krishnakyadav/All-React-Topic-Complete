import { useContext } from "react";
import { TodoContext } from "../Context/TodoContextProvider";

const DisplayTodos = () => {
  const { allTodos ,handleDeleteTodos} = useContext(TodoContext);

  console.log(allTodos);
 
  return (
    <div>
      <p>Display all Todos here.....</p>
      {allTodos.length === 0 ? (
        <p>Todos Not Available</p>
      ) : (
        <section>
            {allTodos.map((ele)=>{
                return(
                    <div key={ele.id}>
                        <h4>{ele.text}</h4>
                        <button>Edit</button>
                        <button onClick={()=>handleDeleteTodos(ele.id)}>Delete</button>
                    </div>
                )
            })}
        </section>
      )}
    </div>
  );
};

export default DisplayTodos;
