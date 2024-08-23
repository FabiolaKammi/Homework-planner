
import React, {useState} from "react"

function WorkForm({addTodo}) {
    const [value, setValue] = useState("");

  
    
    function handleSubmit (e){
        e.preventDefault();
        //console.log(e.target.value)
        if (value){
            addTodo(value);
        setValue("");
    }
}
  return (
    
    <form className="TodoForm" onSubmit={handleSubmit} >
      <input name="todo-input"
      type="text"
      className="todo-input"
      placeholder="Enter a homework!"
      onChange={(e) => setValue(e.target.value)}
      
      value={value} />

      <button 
    
      type="submit"
      className="todo-btn"
      >Submit</button>
    </form>
  )
}

export default WorkForm;
