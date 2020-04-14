import React from 'react'
import "./Home.scss"
import { Link } from "react-router-dom";

export default function Home(props) {
  return (
    <div> 
      <Link to="/upcoming_events">Upcoming Events</Link>
      <Link to="/my_events">My Events</Link>
    </div>
  )
}

