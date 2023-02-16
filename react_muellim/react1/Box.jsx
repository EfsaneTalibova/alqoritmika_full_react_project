import React from 'react'
import './Box.css'
const Box = (props) => {
  return (
    <div>
      <img src={props.image} alt="pro" />
      <h1>{props.itemName}</h1>
      <h2>{props.price}</h2>
    </div>
  )
}

export default Box
