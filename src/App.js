import React from 'react';
import logo from './logo.svg';
import './App.css';
import Events from "./components/Events/Events"
import { useEffect } from 'react'
import axios from 'axios'

function App() {

  useEffect(() => {
    axios.get("/api/events")
    .then((res) => {
      console.log(res.data)
    })
    .catch((err) => {
      console.log(err)
    })
  
  },[])



  return (
    <div className="App">
      < Events />
    </div>
  );
}

export default App;
