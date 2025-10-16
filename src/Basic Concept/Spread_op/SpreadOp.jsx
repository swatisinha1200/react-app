import React from 'react'
import { useState } from 'react';
export const SpreadOp = () => {
    const [todo,setTodo]=useState(["do the moring excercise","practise react","go to market"]);
    function addTask(){
        setTodo([...todo,"Do the coding"])
    }
    

  return (
    <div>
      <div>List of addTask</div>
            <ul>
        {todo.map((t, i) => (
          <li key={i}>{t}</li>
        ))}
      </ul>
      <button onClick={addTask}>Add Todo</button>

    </div>
  )
}

