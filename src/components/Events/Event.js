import React from 'react'
import "./event.scss"
import { Link } from 'react-router-dom'

export default function Event(props) {
  return (
    <div> 
      <h1>{props.name}</h1>
      <h3>{new Date(props.start_date).toDateString().slice(4)} - {new Date(props.end_date).toDateString().slice(4)}</h3>
      <h4>{props.location}</h4>
        <button onClick={() => props.setEvent(props.id)}>
          details
        </button>

        <Link to="swipe">
          {/* <button onClick={() => props.fetchMySwipes(props.currentUserEmail)}>Start Swiping</button> */}
          <button onClick={() => {props.getFilterUsers(props.user, props.id); props.fetchSingleEvent(props.id)}}>Start Swiping</button>
        </Link>

    </div>
  )
}
