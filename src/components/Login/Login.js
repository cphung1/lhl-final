import React, {useState} from 'react'
import { faEnvelope, faKey } from '@fortawesome/free-solid-svg-icons'
import "./Login.scss"
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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

    axios.post('/login', data)
    .then(data => {
      props.setUser(data.data.user.id)
      props.fetchMyEvents(data.data.user.id)
    })
  }


  return (
    <div className='login'> 
      <img src="./images/logo/LogoMakr_62F6RG.png" alt="logo"></img>
      <form onSubmit={handleSubmit}>
        <div>
          <label><FontAwesomeIcon icon={faEnvelope}/></label>
          <input type="text" name="email" placeholder="Email" value={emailState.email} onChange={handleEmail} />
        </div>
        <div>
          <label><FontAwesomeIcon icon={faKey}/></label>
          <input type="password" name="password" placeholder="Password" value={passwordState.password} onChange={handlePassword} />
        </div>
        <div className="loginButton">
          <button>Login</button>
        </div>
      </form>
    </div>
  )
}