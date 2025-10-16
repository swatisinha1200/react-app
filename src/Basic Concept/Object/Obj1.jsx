import React from 'react'

export const Obj1 = () => {
    const User=[
        {id:1,name:"Raj",age:23},
        {id:2,name:"Simran",age:21},
        {id:3,name:"Rohit",age:25}
    ]
  return (
    <div>
      <div>List of user details</div>
      {User.map((items)=>(
        <li key= {items.id}>
            Name:{items.name} &nbsp; &nbsp; Age:{items.age}
        </li>
      ))}
    </div>
  )
}

