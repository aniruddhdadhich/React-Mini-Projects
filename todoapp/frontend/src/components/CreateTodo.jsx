import React, { useState, useRef } from "react";

const CreateTodo = ({ todos, setTodos }) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  return (
    <div>
      <input
        type="text"
        placeholder="Title"
        style={{ padding: "10px", margin: "5px" }}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Description"
        style={{ padding: "10px", margin: "5px" }}
        onChange={(e) => {
          setDesc(e.target.value);
        }}
      />

      <button
        style={{ padding: "10px" }}
        onClick={() => {
         
         
          fetch("http://localhost:3000/todo", {
            method: "POST",
            body: JSON.stringify({
              title: title,
              description: desc,
            }),
            headers: {
              "Content-type": "application/json",
            },
          }).then(async (res) => {
            const json = await res.json();
            console.log(json);
            
            fetch("http://localhost:3000/todos").then(async (res) => {
              const json = await res.json();
              setTodos(json.todos);
            });
            alert("to do added");
          });
        }}
      >
        Add Todo
      </button>
    </div>
  );
};

export default CreateTodo;
