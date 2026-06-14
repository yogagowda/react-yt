import React from 'react'

export default function Card(props) {
    console.log(props.user)
  return (
    <div>

        <div className='card'>
        <img src={props.img} />
       <h1>{props.user}-{props.age}</h1>
       <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam, cum!</p>
       <button className='btn'>View</button>
      </div>
      
    </div>
  )
}
