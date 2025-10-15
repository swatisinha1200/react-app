import { useState } from "react";
import "./Background.css";
export function BackgroundChange(){
    const [color,setColor]=useState("");
    color && (document.body.style.backgroundColor=color);
//     // ...existing code...
// if (color) {
//   document.body.style.backgroundColor = color;
// }
//     const changeBackground = (color) => {
//     setColor(color);
//     document.body.style.backgroundColor = color;
//   };
    return(
        <div className="container">
        <div className="box" >
            <h1>Background color changer</h1>
        <button  className="bt1" onClick={()=>{setColor("red")}}></button>
        <button className="bt2" onClick={()=>{setColor("blue")}}></button>
        <button className="bt3"onClick={()=>{setColor("green")}}></button>
        <button className="bt4" onClick={()=>{setColor("yellow")}}></button>
        <button className="bt5" onClick={()=>{setColor("orangered")}}></button>
        <button className="bt6" onClick={()=>{setColor("rgb(20, 144, 221)")}}></button>
        </div>
        </div>
    );
}