import React, { useState } from "react";
import WorkForm from "./WorkForm";
import Homework from "./Homework";
import EditWork from "./EditWork";


function HwWrapper() {
    const [todos, setTodos] = useState([]);

    function addTodo (todo) {
        setTodos([...todos, 
            {
                id: Math.floor(Math.random()*10000),
                task: todo,
                completed:false,
                isEditing: false
            }
            ]);
            //console.log(todos)
    }

    const toggleCompleted = (id) => {
        return(
        setTodos(todos.map(todo => todo.id === id ? {
            ...todo, 
            completed: !todo.completed} : todo))  
        ); 
    }

    function todoDeleted(id){
        return (
        setTodos((todos.filter((todo) => todo.id !== id )))
        );
    }

    function todoEdited(id) {
        setTodos((todos.map((todo) => todo.id === id?
             {...todo, isEditing: !todo.isEditing} :
             todo
            )))
    }

    const editTask = (task, id) => {
        setTodos(todos.map((todo) =>todo.id === id ?
        {...todo, task, isEditing: !todo.isEditing} : todo));
    }


  return (
    <div className="todo-container">
        <div className="todoWrapper">
        <h2>Which homework do you plan to do today?</h2>
      <WorkForm addTodo={addTodo} />
      {todos.map((todo) => 
        todo.isEditing ? (
            <EditWork todoEdited={editTask} task={todo} />
        ) : (
        <Homework task = {todo} key={todo.id}
        toggleCompleted ={toggleCompleted} 
        todoDeleted = {todoDeleted}
        todoEdited = {todoEdited}
        />

       ))}
    </div>
    </div>
  );
}

export default HwWrapper;
