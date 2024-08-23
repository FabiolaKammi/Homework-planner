import React, {useState} from "react"

function EditWork({todoEdited, task}) {
    const [value, setValue] = useState(task.task);

  
    
    function handleSubmit (e){
        e.preventDefault();
        todoEdited(value, task.id);
        
    };
  return (
    
    <form className="TodoForm" onSubmit={handleSubmit} >
      <input name="todo-input"
      type="text"
      className="todo-input"
      placeholder="edit homework information here!"
      onChange={ (e) => setValue(e.target.value)}
      value={value} />

      <button 
      type="submit"
      className="todo-btn"
      >Update homework</button>
      
    </form>
  )
}

export default EditWork;