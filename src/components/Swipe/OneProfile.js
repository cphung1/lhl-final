import React from 'react'
import "./OneProfile.scss"

export default function Swipe(props) {

  return (
    <div> 
      <h1>{props.name}, {props.birthdate}</h1>
      <h2>{props.location}</h2>
      <h3>{props.description}</h3>
      <img src={props.image} alt={props.name}/>
    </div>
  )
}

