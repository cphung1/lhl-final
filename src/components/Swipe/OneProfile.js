import React from 'react'
import Card from 'react-bootstrap/Card'
import "./OneProfile.scss"

export default function Swipe(props) {

  return (
    <div className="swipe"> 
    <Card style={{ width: '30rem' }}>
      <Card.Body>
      <Card.Img variant="top" src={`./images/users/${props.id}.jpg`} alt={props.name} />
      <Card.Title>{props.name}, {props.birthdate}</Card.Title>
      <Card.Title>{props.location}</Card.Title>
      <Card.Text>{props.description}</Card.Text>
      <button onClick={() => props.dislikeUser(props.currentUser, props.id)}>No</button>
      <button onClick={() => props.likeUser(props.currentUser, props.id)}>Yes</button>
      </Card.Body>
    </Card>
    </div>
  )
}

