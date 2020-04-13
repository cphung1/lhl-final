import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Events from "./components/Events/Events"
import axios from 'axios'
import MyEvents from "./components/MyEvents/MyEvents"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  
  const [state, setState] = useState({
    events: [],
    event: null,
    myEvents: [],
  });

  const setEvent = event => setState({ ...state, event });

  const goingEvent = (user_id, event_id) => {

  }

  useEffect(() => {
    
    const getEvent = axios.get("/api/events")
    const getMyEvents = axios.get("/api/user_event/1")

    Promise.all([
      Promise.resolve(getEvent),
      Promise.resolve(getMyEvents)
    ]).then(all => {
      setState(prev => ({
        ...prev,
        events: all[0].data,
        myEvents: all[1].data
      }))
    }).catch(() => {
      console.log("error")
    })
  }, [])

  return (
    <Router> 
      <div className="App">
        <Link to="/upcoming_events">Upcoming Events</Link>
        <Link to="/my_events">My Events</Link>
      </div>

      <Switch>
        <Route path="/upcoming_events">
          <Events 
            events={state.events}
            event={state.event}
            setEvent={setEvent}
          />
        </Route>
        <Route path="/my_events">
          <MyEvents 
            myEvents={state.myEvents}
          />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
