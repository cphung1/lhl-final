import React, {useEffect} from 'react'
import "./Chat.scss"
import MatchProfile from '../MatchProfile/MatchProfile'
import { ActionCableConsumer } from 'react-actioncable-provider';

export default function Chat(props) {

  const listMatches = props.myMatches.map((element, index) => {
    return <MatchProfile 
      key={index}
      name={element.name}
      id={element.id}
      currentUser={props.user}
      getMyConversations={props.getMyConversations}
      setMyMatchMsgUser={props.setMyMatchMsgUser}
      messagedUserID={props.messagedUserID}
      setMessagedUserID={props.setMessagedUserID}
      setSelectedMatchMsgUserID={props.setSelectedMatchMsgUserID}
    />
  })

  const handleReceivedConvo = (message) => {
    console.log("CHANNEL MSG", message)
    props.getMyMatches(props.user)
  }

  useEffect(() => {
    props.getMyMatches(props.user)
  }, [])

  return (
    <div className="chat"> 
      <h1>Messages</h1>
      {listMatches}

      <ActionCableConsumer
        channel="ConversationsChannel"
        onReceived={handleReceivedConvo}
      />
    </div>
  )
}