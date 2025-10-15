import React from 'react'
import { useState } from 'react';
import "./Word.css"
export const Word = () => {
    const[count,setCount]=useState(0);
  return (
    <div>
      <div className='container'>
        <h1>Word Counter</h1>
        <textarea name="text" id="text" cols="30" rows="10" placeholder='Enter your text here'></textarea>
        <div className='btn'>
        <button onClick={()=>{setCount(count)}}>Count Words</button>
        <button>Count Characters</button>
        <button>Count Sentences</button>
        <button>Count Paragraphs</button>
        <button>Clear Text</button>
        </div>
      </div>
    </div>
  )
}

