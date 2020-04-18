import React, {useState} from 'react'
import "./events.scss"
import Event from '../Events/Event';
import EventDetails from './EventDetails';


export default function Events(props) {

  // const showDetails = (element) => {
  //   setState(prev => ({...prev, current_event: element.id}))
  //   return state.current_event
  // }

  const listEvent = props.events.map(element => {
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
    />
  })

  const result = props.events.filter(element => element.id === props.event);

  const listEventDetails = result.map(element => {
    return <EventDetails 
      key = {element.id}
      id = {element.id}
      name = {element.name}
      start_date = {element.start_date}
      end_date = {element.end_date}
      location = {element.location}
      details = {element.details}
      setEvent={props.setEvent}
      clickGoing={props.clickGoing}
    />
  })

  // if user is not logged in render nothing
  if(!props.user){
    return null;
  }

  return (
    <div className="list-event-wrapper"> 
      <h1>List of Events</h1> 
      <div className="hidden">
        {props.event ?  listEventDetails : listEvent}
      </div>
    </div>
  )
}