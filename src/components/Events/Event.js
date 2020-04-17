import React from 'react'
import "./event.scss"
import { Link } from 'react-router-dom'


export default function Event(props) {
  return (
    <div className="ListEvents"> 
      <div className="event-container">
        <div className="visible-box">
        <h2>{props.name}</h2>
        <h3>{new Date(props.start_date).toDateString().slice(4)} - {new Date(props.end_date).toDateString().slice(4)}</h3>
        <h4>{props.location}</h4>
          <button onClick={() => props.setEvent(props.id)}>
            details
          </button>

          <Link to="swipe">
            {/* <button onClick={() => props.fetchMySwipes(props.currentUserEmail)}>Start Swiping</button> */}
            <button id="hidden" onClick={() => props.getFilterUsers(props.user, props.id)}>Start Swiping</button>
          </Link>
        </div>
      </div>
    </div>
  )
}
