import React, {useEffect} from 'react'
import "./Message.scss"
import classnames from "classnames";

export default function Message(props) {

  const msgClass = classnames("message msg--right", {
    'msg--left' : props.user_id === props.myMatchMsgUser
  });

  return (
    <div className={msgClass}> 
      {/* <h5>{props.user_id}</h5> */}
      <p>{props.body}</p>
    </div>
  )
}