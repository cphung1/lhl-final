import React from 'react'
import "./OneProfile.scss"

export default function Swipe(props) {

  return (
    <div className="swipe"> 
      <img src={`./images/users/${props.id}.jpg`} alt={props.name} />
      <h1>{props.name}, {props.birthdate}</h1>
      <h2>{props.location}</h2>
      <h3>{props.description}</h3>
    </div>
  )
}

