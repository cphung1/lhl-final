import React, {useEffect, useState} from 'react'
import "./Messages.scss"
import MatchProfile from '../MatchProfile/MatchProfile'
import { ActionCableConsumer } from 'react-actioncable-provider';
import Message from './Message'
import axios from 'axios'

export default function Messages(props) {
  const listMessages = props.myMessages.map(element => {

    if(element.user_id !== props.user) {
      element.user_id = props.myMatchMsgUser
    }

    return (
      <Message 
        user_id={element.user_id}
        body={element.body}
        currentUser={props.user}
        myMatchMsgUser={props.myMatchMsgUser}
      />
    )
  })

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
      props.getMyMessages(props.currentConvo)
    })
  }

  useEffect(() => {
    props.getMyMessages(props.currentConvo)
  }, [])

  return (
    <div className="messages"> 
      <h1>Messages</h1>
      {listMessages}
      <form onSubmit={handleSubmit}>
        <input type="text" name="msg" placeholder="Submit message..." value={msgState.msg} onChange={handleMsg} />
        <button>Submit</button>
      </form>
    </div>
  )
}