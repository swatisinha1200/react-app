import { useState } from "react";
import "./counter.css";
export function Counter() {
  const[count,setCount]=useState(0)

    return(
        <div className="counter">
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