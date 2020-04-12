import React from 'react'
import "./eventDetails.scss"


export default function EventDetails(props) {
  return (
    <div> 
      <h1>{props.name}</h1>
      <h3>{props.location}</h3>
      <h3>{props.start_date} - {props.end_date}</h3>
      <div>
        <p>{props.details}</p>
      </div>
      <button>going</button>
    </div>
  )
}