import React from 'react';
import './Card.css'

  export  const Card = (props) => {
  return (
   <div className="container">
      <div className="card">
      <img className="image" src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJhbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="Nature" />
        <h1 className="title">{props.user||'Natural'}</h1>
        <p className="desc">
        {props.desc||" Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."}
        </p>
        <button className="btn">{props.but||"Read More"}</button>
      </div>
    </div>
  )
}

