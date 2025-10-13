import { useState } from "react";
import "./Background.css";
export function BackgroundChange(){
    const [,setColor]=useState("");
    const changeBackground = (color) => {
    setColor(color);
    document.body.style.backgroundColor = color;
  };
    return(
        <div className="container">
        <div className="box" >
            <h1>Background color changer</h1>
        <button  className="bt1" onClick={()=>{changeBackground("red")}}></button>
        <button className="bt2" onClick={()=>{changeBackground("blue")}}></button>
        <button className="bt3"onClick={()=>{changeBackground("green")}}></button>
        <button className="bt4" onClick={()=>{changeBackground("yellow")}}></button>
        <button className="bt5" onClick={()=>{changeBackground("orangered")}}></button>
        <button className="bt6" onClick={()=>{changeBackground("rgb(20, 144, 221)")}}></button>
        </div>
        </div>
    );
}