import React from 'react';
import './NavBar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { faCommentAlt } from '@fortawesome/free-solid-svg-icons'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";
import classnames from "classnames";

export default function NavBar(props) {
  const badgeClass = classnames("badge", {
    'badge--on' : props.msgNotification
  })
  return(
    <div className="NavBar">
        <div className="icons">
          <Link to="chat" onClick={() => {props.setCurrentConvo(); props.setMyMessages(); props.setMsgNotification(false); props.setSelectedMatchMsgUserID(null)}}>
            <FontAwesomeIcon icon={faCommentAlt} />
            <span className={badgeClass}>.</span>
          </Link>
          
          <Link to="/home" onClick={() => {props.setSelectedMatchMsgUserID(null)}}>
            <FontAwesomeIcon icon={faHome} />
          </Link>

          <Link to="/myprofile" onClick={() => {props.setSelectedMatchMsgUserID(null)}}>
            <FontAwesomeIcon icon={faUserCircle} />   
          </Link>
        </div>
    </div>
  )
}