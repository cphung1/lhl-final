import React, { useState } from 'react'
import Card from 'react-bootstrap/Card'
import "./OneProfile.scss"

export default function Swipe(props) {
  const [state, setState] = useState({isVisible: true})

  const toggleBox = () => {
    setState(prev => ({isVisible: !prev.isVisible}))
  }


  const rand = Math.floor(Math.random() * 10000)

  return (
    <div className="swipe" style={{zIndex: rand}}> 
    <Card style={{ width: '30rem'}} className={`card ${state.isVisible}`}>
      <Card.Body>
      <Card.Img variant="top" src={`./images/users/${props.id}.jpg`} alt={props.name} />
      <Card.Title>{props.name}, {props.birthdate}</Card.Title>
      <Card.Title>{props.location}</Card.Title>
      <Card.Text>{props.description}</Card.Text>
      <button onClick={() => {props.dislikeUser(props.currentUser, props.id); toggleBox()}}>No</button>
      <button onClick={() => {props.likeUser(props.currentUser, props.id); toggleBox()}}>Yes</button>
      </Card.Body>
    </Card>
    </div>
  )
}

