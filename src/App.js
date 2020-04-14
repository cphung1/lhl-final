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
    user: null
  });

  const setUser = user => {
    console.log("BEFORE setuser", state.user);
    setState({...state, user: user});
    console.log("after setuser", state.user);
    fetchMyEvents()
  }
  const setEvent = event => setState({...state, event });

  const clickGoing = (event) => {
    let data = { 
      event_id: event.event_id, user_id: state.user
    };

    return axios.post(`/api/user_event`, {data})
    .then((res) => {
      // reload()
      fetchMyEvents()
      setState(prev => ({...prev, event:null}))
    }).catch(error => console.log(error))
  }
  
  const fetchMyEvents = function() {
    const getMyEvents = axios.get(`/api/user_event/:${state.user}`)
    console.log("within fetchmyevents", state.user)
    Promise.all([
      Promise.resolve(getMyEvents)
    ]).then(all => {
      console.log("the return in promise", all)
      setState(prev => ({
        ...prev,
        myEvents: all[0].data
      }))
    }).catch(() => {
      console.log("cannot fetch myEvents")
    })
  }



  const reload = function() {
    console.log("within app.js",state.user)
    const getEvent = axios.get("/api/events")
    // const getMyEvents = axios.get(`/api/user_event/:${state.user}`)

    Promise.all([
      Promise.resolve(getEvent),
      // Promise.resolve(getMyEvents)
    ]).then(all => {
      setState(prev => ({
        ...prev,
        events: all[0].data,
        // myEvents: all[1].data
      }))
    }).catch(() => {
      console.log("error")
    })
  }

  useEffect(() => {
    reload()
  }, [])

  const validates = (user) => {
    console.log("VALIDATE TEST",state.user)
    return user === null ? (
        <Login 
          user={state.user}
          setUser={setUser}
        />
    ) : (
      <Link to="/"/>
    )
  }

  return (
    <Router> 

        
      <div className="App">
        <Link to="/upcoming_events">Upcoming Events</Link>
        <Link to="/my_events">My Events</Link>
        <Link to="/login" />
        {validates(state.user)}
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
