import React from 'react'
import "./MatchProfile.scss"
import { Link } from 'react-router-dom'
import classnames from "classnames";

export default function MatchProfile(props) {
  const badgeClass = classnames(`badge`, {
    'badge--on' : props.id === props.messagedUserID
  })

  return (
    <div className="matchprofile"> 
      <div className="matchdetails">
      <img className="matchimg" src={`./images/users/${props.id}.jpg`} alt={props.name} />
      <span className={badgeClass}>.</span>
      <h3 className="matchuser">{props.name}</h3>
      </div>
      <div className="matchmsg">

      <Link to='messages'>
        <button onClick={() => {
          props.getMyConversations(props.currentUser, props.id); 
          props.setMyMatchMsgUser(props.name); 
          props.setSelectedMatchMsgUserID(props.id)
          props.setMessagedUserID(null);
          }}>
          Message
        </button>
      </Link>
      </div>
    </div>
  )
}