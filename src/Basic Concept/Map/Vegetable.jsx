import React from 'react'

export const Vegetable = () => {
    const veg = ['carrot', 'broccoli', 'spinach', 'potato', 'cabbage'];
  return (
    <div>
      <div>List of Vegatable</div>
      <ul>{veg.map((x,i)=>(
        <li key={i}>{x}</li>
      ))}</ul>
    </div>
  )
}

