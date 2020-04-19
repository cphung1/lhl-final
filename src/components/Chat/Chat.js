import React, {useEffect} from 'react'
import "./Chat.scss"
import MatchProfile from '../MatchProfile/MatchProfile'
import { ActionCableConsumer } from 'react-actioncable-provider';

export default function Chat(props) {

  const listMatches = props.myMatches.map(element => {
    return <MatchProfile 
      name={element.name}
      id={element.id}
      currentUser={props.user}
      getMyConversations={props.getMyConversations}
      setMyMatchMsgUser={props.setMyMatchMsgUser}
    />
  })



  useEffect(() => {
    props.getMyMatches(props.user)
  }, [])

  return (
    <div className="chat"> 
      <h1>My Messages</h1>
      {listMatches}

      {/* <ActionCableConsumer 
        channel={{channel: 'MessagesChannel'}}
        onRecevied={handleReceivedConversation}
      /> */}
    </div>
  )
}