import React, { useEffect, useState } from 'react';
import './App.css';
import Events from "./components/Events/Events"
import axios from 'axios'
import MyEvents from "./components/MyEvents/MyEvents"
import Login from "./components/Login/Login"
import Home from "./components/Home/Home"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory
} from "react-router-dom";


function App() {
  const [state, setState] = useState({
    events: [],
    event: null,
    myEvents: [],
    user: null
  });

  const setUser = user => {setState(prev => ({...prev, user: user}))}
  
  const setEvent = event => setState({...state, event });

  const clickGoing = (event) => {
    let data = { 
      event_id: event.event_id, 
      user_id: state.user
    };

    return axios.post(`/api/user_event`, {data})
    .then((res) => {
      fetchMyEvents(state.user)
      setState(prev => ({...prev, event:null}))
    }).catch(error => 
      console.log(error)
    )
  }
  
  const fetchMyEvents = function(user_id) {
    const getMyEvents = axios.get(`/api/user_event/${user_id}`)
    Promise.all([
      Promise.resolve(getMyEvents)
    ]).then(all => {
      setState(prev => ({
        ...prev,
        myEvents: all[0].data
      }))
    }).catch(() => {
      console.log("cannot fetch myEvents")
    })
  }

  const reload = function() {
    const getEvent = axios.get("/api/events")

    Promise.all([
      Promise.resolve(getEvent),
    ]).then(all => {
      setState(prev => ({
        ...prev,
        events: all[0].data,
      }))
    }).catch(() => {
      console.log("error")
    })
  }

  useEffect(() => {
    reload()
  }, [])

  const validates = (user) => {
    return user === null ? (
        <Login 
          user={state.user}
          setUser={setUser}
          fetchMyEvents={fetchMyEvents}
        />
    ) : (
      <Redirect to="/home"/>
    )
  }

  return (
    <Router> 
      <div className="App">
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
            user={state.user}
          />
        </Route>
        <Route path="/my_events">
          <MyEvents 
            myEvents={state.myEvents}
            user={state.user}
          />
        </Route>

        <Route path='/login'>
            <Login />
        </Route>

        <Route path='/home'>
            <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
