import React from 'react'
import "./MyEvents.scss"
import Event from '../Events/Event';


export default function MyEvents(props) {


  const listEvent = props.myEvents.map(element => {
    return <Event 
      key = {element.id}
      id = {element.id}
      name = {element.name}
      start_date = {element.start_date}
      end_date = {element.end_date}
      location = {element.location}
      selected={element.name === props.event}
      event={props.event}
      setEvent={props.setEvent}
      // fetchMySwipes={props.fetchMySwipes}
      user={props.user}
      getFilterUsers={props.getFilterUsers}
      email = {props.currentUserEmail}
    />
  })

    // if user is not logged in render nothing
  if(!props.user){
    return null;
  }

  return (
    <div> 
      <h1>My Events</h1>
      {listEvent}
    </div>
  )
}

