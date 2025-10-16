import React from 'react'

export const Array = () => {
      const fruits = ["Apple", "Banana", "Cherry", "Mango"];

  return (
    <div>
      <div>List of fruits</div>
      <ul>{fruits.map((x,i)=>(
        <li key={i}>{x}</li>
      ))}</ul>
    </div>
  )
}

