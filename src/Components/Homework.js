import React from 'react';

import { FaEdit} from 'react-icons/fa';
import { MdDelete } from "react-icons/md";


function Homework ({task,todoDeleted, toggleCompleted,todoEdited}) {

    const edit = () => todoEdited(task.id);
    function deletion(){
        return ((todoDeleted(task.id))
    );
    }

  return (
    <div
    className='Todo' >
      <h3 onClick={() => toggleCompleted(task.id) }
      className={`${task.completed ? "completed" : "incompleted"}`}
      >{task.task}</h3>
      <div>
      <FaEdit
        className='edit-btn'
        onClick={edit} />
        <MdDelete
        className='delete-btn'
        onClick={deletion} />
        
        
      </div>
    
    </div>
  )
}

export default Homework; 
