import React from 'react'
import "./MatchProfile.scss"
import axios from 'axios'
import { Link } from 'react-router-dom'
import Messages from '../Chat/Messages'

export default function MatchProfile(props) {

  return (
    <div className="matchprofile"> 
      <div className="matchdetails">
      <img className="matchimg" src={`./images/users/${props.id}.jpg`} alt={props.name} />
      <h3 className="matchuser">{props.name}</h3>
      </div>
      <div className="matchmsg">

      <Link to='messages'>
        <button onClick={() => {
          props.getMyConversations(props.currentUser, props.id); 
          console.log("ID OF MATCH", props.id)
          props.setMyMatchMsgUser(props.name); 
          console.log("NAME OF MATCH", props.name)
          // props.getMyMessages(props.currentConvo) 
          // console.log("ID OF CONVO", props.currentConvo)
          }}>
          Message
        </button>
      </Link>
      </div>
    </div>
  )
}