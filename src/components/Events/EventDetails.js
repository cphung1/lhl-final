import React from 'react'
import "./eventDetails.scss"
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import ListGroupItem from 'react-bootstrap/ListGroupItem'
import ListGroup from 'react-bootstrap/ListGroup'



export default function EventDetails(props) {
  return (
    <div>
    {/* <h2 className="detail-title">Details</h2> */}
    <div className="details">
      <div className="card-wrapper"> 
      <Card id="card">
      <Card.Img className="detail-avatar" variant="top" src={`./images/events/${props.id}.jpg`} />
        <Card.Body className="body-font">
          <Card.Title>
            <h1>{props.name}</h1>
          </Card.Title>
          <Card.Text>{props.details}</Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>
            <h3>{props.location}</h3>
          </ListGroupItem>
          <ListGroupItem>
            <h3>
            {new Date(props.start_date).toDateString().slice(4)} - {new Date(props.end_date).toDateString().slice(4)}
            </h3>
          </ListGroupItem>
        </ListGroup>
        <Card.Body className="btn-wrapper">
          <button className="btn-pink-details" onClick={() => props.setEvent(null)}>Back</button>
          <Link to="my_events">
            <button className="btn-pink-details" onClick={() => props.clickGoing({event_id: props.id})}>Going</button>
          </Link>
        </Card.Body>
      </Card> 
      </div>
    </div>
    </div>
  )
}