import { useState } from "react";
export function Counter() {
  const[count,setCount]=useState(0)

    return(
        <div>
        <button onClick={()=>setCount(count+1)}>
        Increment 
        </button >
        <button onClick={()=>setCount(count-1)} disabled={count===0 ? true : false}>
        Decrement
        </button >
        <h1>Counter:{count}</h1>
        </div>
    );
    }