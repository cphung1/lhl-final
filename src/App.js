import React, { useEffect, useState } from 'react';
import './App.css';
import Events from "./components/Events/Events"
import axios from 'axios'
import MyEvents from "./components/MyEvents/MyEvents"
import Login from "./components/Login/Login"
import Home from "./components/Home/Home"
import Swipe from "./components/Swipe/Swipe"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";


function App() {
  const [state, setState] = useState({
    events: [],
    event: null,
    myEvents: [],
    user: null,
    mySwipes: [],
    currentUserEmail: 'abaynes@gmail.com'
  });

  const setUser = user => {setState(prev => ({...prev, user: user}))}
  
  const setEvent = event => setState(prev => ({...prev, event: event }));

  const getFilterUsers = (user_id, event_id) => {
    return Promise.all([
      Promise.resolve(axios.get(`/api/users/${event_id}`, {
        params: {
            user_id: user_id
        }
    }))
    ]).then(all => {
      console.log(all[0].data)
    }).catch((err) => {
      console.log("CANT SEND PARAMS BY GETFILTERUSERS")
    })
  }

  const clickGoing = (event) => {
    let data = { 
      event_id: event.event_id, 
      user_id: state.user
    };

    return axios.post(`/api/user_event`, {data})
    .then((res) => {
      fetchMyEvents(state.user)
      setState(prev => ({...prev, event: null}))
    }).catch(error => 
      console.log(error)
    )
  }

  const filterEmails = (arr, email) => {
    return arr.filter(element => element.email !== email)
  }

  const fetchMySwipes = (user_email) => {
    const getMySwipes = axios.get('/api/users')
    return Promise.all([
      Promise.resolve(getMySwipes)
    ]).then(all => {
      const filtered = filterEmails(all[0].data, user_email)
      setState(prev => ({
        ...prev,
        mySwipes: filtered,
      }))
    }).catch(() => {
      console.log("cannot fetch my swipes")
    })
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
            event={state.event}
            // fetchMySwipes={fetchMySwipes}
            getFilterUsers={getFilterUsers}
            currentUserEmail={state.currentUserEmail}
          />
        </Route>

        <Route path='/login'>
            <Login />
        </Route>

        <Route path='/home'>
            <Home />
        </Route>

        <Route path='/swipe'>
          <Swipe 
            mySwipes={state.mySwipes}
          />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
