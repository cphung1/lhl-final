import React from 'react';
import './NavBar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { faCommentAlt } from '@fortawesome/free-solid-svg-icons'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

export default function NavBar(props) {
  return(
    <div className="NavBar">
        <div className="icons">
          <Link to="chat" onClick={() => props.setCurrentConvo()}>
            <FontAwesomeIcon icon={faCommentAlt} />
          </Link>
          
          <Link to="/home">
            <FontAwesomeIcon icon={faHome} />
          </Link>

          <Link to="/myprofile">
            <FontAwesomeIcon icon={faUserCircle} />   
          </Link>
        </div>
    </div>
  )
}