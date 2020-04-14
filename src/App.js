import React, { useEffect, useState } from 'react';
import './App.css';
import Events from "./components/Events/Events"
import axios from 'axios'
import MyEvents from "./components/MyEvents/MyEvents"
import Login from "./components/Login/Login"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory
} from "react-router-dom";


function App() {
  // let history = useHistory();
  const [state, setState] = useState({
    events: [],
    event: null,
    myEvents: [],
  });

  const setEvent = event => setState({ ...state, event });

  const clickGoing = (event) => {
    let data = { 
      event_id: event.event_id, user_id: event.user_id
    };

    return axios.post(`/api/user_event`, {data})
    .then((res) => {
      reload()
      setState(prev => ({...prev, event:null}))
    }).catch(error => console.log(error))
  }
  
  const reload = function() {
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
  }

  useEffect(() => {
    reload()
  }, [])

  return (
    <Router> 
      <div className="App">
        <Link to="/upcoming_events">Upcoming Events</Link>
        <Link to="/my_events">My Events</Link>
        <Link to="/login" />
      </div>

      <Switch>
        <Route path="/upcoming_events">
          <Events 
            events={state.events}
            event={state.event}
            setEvent={setEvent}
            clickGoing={clickGoing}
          />
        </Route>
        <Route path="/my_events">
          <MyEvents 
            myEvents={state.myEvents}
          />
        </Route>
        <Route path='/login'>
          <Login />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
