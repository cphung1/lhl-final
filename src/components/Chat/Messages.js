import React, { useEffect, useState, useRef } from 'react'
import {Link} from "react-router-dom"
import "./Messages.scss"
import MatchProfile from '../MatchProfile/MatchProfile'
import { ActionCableConsumer } from 'react-actioncable-provider';
import Message from './Message'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'

export default function Messages(props) {
  const listMessages = props.myMessages.map((element, index) => {

    if(element.user_id !== props.user) {
      element.user_id = props.myMatchMsgUser
    }

    return (
      <Message 
        key={index}
        user_id={element.user_id}
        body={element.body}
        currentUser={props.user}
        myMatchMsgUser={props.myMatchMsgUser}
      />
    )
  })

  const handleReceived = (message) => {
    props.getMyMessages(message.conversation_id)
    props.setMsgNotification(true)
  }

  const [msgState, setMsg] = useState({
    msg: '',
  });

  const handleMsg = event => (setMsg({[event.target.name]: event.target.value}))


  const handleSubmit = event => {
    event.preventDefault()
  
    let data = { 
      content: msgState.msg,
      user_id: props.user,
      conversation_id: props.currentConvo
    };

    axios.post('/api/messages', data)
    .then(res => {
      console.log(res)
      setMsg({msg: ''})
    })
  }
  const divRef = useRef(null);

  useEffect(() => {
    divRef.current.scrollIntoView({ behavior: 'auto', block: 'end' });
  });

  return (
    <div className="messages"> 
      <div className='msgsHeader'>
        <Link to="chat" onClick={() => {props.setCurrentConvo(); props.setMyMessages()}}>
          <FontAwesomeIcon icon={faChevronLeft} size="3x"/>
        </Link>
        <h1>{props.myMatchMsgUser}</h1>
      </div>

      <div className="msgsContent" >
        {listMessages}
      <div ref={divRef} />
      </div>
      {/* <ActionCableConsumer
        channel="MessagesChannel"
        onReceived={handleReceived}
      /> */}

      <form onSubmit={handleSubmit}>
        <input type="text" name="msg" placeholder="Send message..." value={msgState.msg} onChange={handleMsg} />
        <button>Send</button>
      </form>
    </div>
  )
}