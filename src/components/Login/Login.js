import React, {useState} from 'react'
import { Paper, withStyles, Grid, TextField, Button, FormControlLabel, Checkbox } from '@material-ui/core';
import "./Login.scss"
import axios from 'axios'

export default function Login(props) {
  const [emailState, setEmail] = useState({
    email: '',
  });

  const [passwordState, setPassword] = useState({
    password: '',
  });

  const handleEmail = event => (setEmail({[event.target.name]: event.target.value}))
  const handlePassword = event => (setPassword({[event.target.name]: event.target.value}))

  const handleSubmit = event => {
    event.preventDefault()

    let data = { 
      email: emailState.email, password: passwordState.password
    };

    console.log("Test", data)
    axios.post('/login', data)
    .then(data => {
      console.log(data)
    })
  }


  return (
    <div> 
      <form onSubmit={handleSubmit}>
        <label>Email: </label>
        <input type="text" name="email" placeholder="email" value={emailState.email} onChange={handleEmail} />
        <label>Password: </label>
        <input type="current-password" name="password" placeholder="password" value={passwordState.password} onChange={handlePassword} />
        <button>Login</button>
      </form>
    </div>
  )
}