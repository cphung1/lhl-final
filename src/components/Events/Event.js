import React from 'react'
import "./event.scss"
import EventDeatails from './EventDetails'

export default function Event(props) {
  return (
    <div> 
      <h1>{props.name}</h1>
      <h3>{props.start_date} - {props.end_date}</h3>
      <h4>{props.location}</h4>
      <button onClick={() => props.setEvent(props.id)}>
        details
      </button>
    </div>
  )
}

