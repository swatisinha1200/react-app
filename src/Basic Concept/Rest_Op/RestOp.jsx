import React from 'react'
export const RestOp = () => {
      const user = { name: "Bob", age: 30, city: "London" };
      const { city, ...rest } = user;

  return (
    <div>
        <div>Rest Operator</div>    
        <div>City: {city}</div>
        <div>Name: {rest.name}</div>
        <div>Age: {rest.age}</div>
    </div>
  )
}

