import React from "react";
import { useState } from "react";

const Todos = ({ todos, setTodos }) => {
  return (
    <>
      {todos.map((todo) => (
        <div>
          <h1>{todo.title}</h1>
          <h2>{todo.description}</h2>
          <button
            onClick={(e) => {
              fetch("http://localhost:3000/completed",{
                method:"PUT",
                body:JSON.stringify({
                  id:todo._id
                }), 
                headers:{
                  "Content-type":"application/json"
                }
              }).then( async (res)=>{
                console.log(res)
                const json = await res.json();
                console.log(json);
              })  
            }}
          >
            {todo.completed ? "Complete" : "Mark As Complete"}
          </button>
        </div>
      ))}
    </>
  );
};

export default Todos;
