import React, {useState} from 'react'
import "./events.scss"
import Event from '../Events/Event';


export default function Events(props) {

  // const showDetails = (element) => {
  //   setState(prev => ({...prev, current_event: element.id}))
  //   return state.current_event
  // }

  const listEvent = props.events.map(element => {
    return <Event 
      key = {element.id}
      name = {element.name}
      start_date = {element.start_date}
      end_date = {element.end_date}
      location = {element.location}
      details = {element.details}
      selected={element.name === props.event}
      setEvent={props.setEvent}
    />
  })

  return (
    <div> 
      <h1>HELLLOOO HOME</h1> 
      <ul>
        {listEvent}
      </ul>
    </div>
  )
}