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
      <a href="#" class="btn btn-primary">No</a>
      <a href="#" class="btn btn-primary">Yes</a>
      </Card.Body>
    </Card>
    </div>
  )
}

