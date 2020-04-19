import React from 'react'
import "./Home.scss"
import { Link } from "react-router-dom";
import Date from "./Date"

export default function Home(props) {
  return (
    <div> 
      <img src="/images/logo/LogoMakr_62F6RG.png"></img>
      <div className="home-body">
        <Date />
        <div id="event-wrapper">
          <div className="event-wrapper">
            <Link to="/upcoming_events">Upcoming Events</Link>
          </div>
          <div className="event-wrapper">
            <Link to="/my_events">My Events</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

