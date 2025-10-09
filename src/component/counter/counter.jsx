import { useState } from "react";
import "./counter.css";
export function Counter() {
  const[count,setCount]=useState(0)

    return(
        <div className="counter">
         <h1 className="title">Counter App</h1>
         <h1 className="count">{count}</h1>
        <button className="btn1" onClick={()=>setCount(count+1)}>
        Increment 
        </button >
        <button className="btn2" onClick={()=>setCount(count-1)} disabled={count===0 ? true : false}>
        Decrement
        </button >
       
        </div>
    );
    }