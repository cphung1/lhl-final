import React, { useEffect } from 'react'
import "./event.scss"
import { Link } from 'react-router-dom'
import Image from 'react-bootstrap/Image'

export default function Event(props) {

  return (
    <div className="ListEvents"> 
      <div className="event-container">
        <div className="content-wrapper">
        <Image className="avatar" src={`./images/events/${props.id}.jpg`} roundedCircle/>
          <div className="text-wrapper">
            <h2>{props.name}</h2>
            <h3>{new Date(props.start_date).toDateString().slice(4)} - {new Date(props.end_date).toDateString().slice(4)}</h3>
            <h4>{props.location}</h4>
                <button className="btn-pink" onClick={() => props.setEvent(props.id)}>
                  Details
                </button>
                <Link to="loading">
                  <button className="btn-pink-swipe" onClick={() => {props.getFilterUsers(props.user, props.id); props.fetchSingleEvent(props.id)}}>Start Swiping</button>
                </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
