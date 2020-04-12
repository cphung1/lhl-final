import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Events from "./components/Events/Events"
import axios from 'axios'
import EventDetails from './components/Events/EventDetails';

function App() {
  
  const [state, setState] = useState({
    events: [],
    event: null,
  });

  const setEvent = event => setState({ ...state, event });

  useEffect(() => {
    axios.get("/api/events")
    .then((res) => {
      setState(prev => ({...prev, events: res.data}))
    })
    .catch((err) => {
      console.log(err)
    })
  },[])

  return (
    <div className="App">
      {console.log(state.events)}
      < Events 
        events={state.events}
        event={state.event}
        setEvent={setEvent}
      />
    </div>
  );
}

export default App;
