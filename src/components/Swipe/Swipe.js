import React, { useState, useEffect } from 'react'
import "./Swipe.scss"
import OneProfile from "./OneProfile"
import axios from 'axios'
import ModalMatch from '../Modal/Modal'

export default function Swipe(props) {
  const [state, setState] = useState({})

  const listSwipes = props.mySwipes.map(element => {
    return (<OneProfile 
      key = {element.id}
      id = {element.id}
      image = {element.image}
      name = {element.name}
      birthdate = {element.birthdate}
      location = {element.location}
      description = {element.description}
      likeUser={props.likeUser}
      dislikeUser={props.dislikeUser}
      currentUser={props.currentUser}
      // modalShow={props.modalShow}
      // setModalShow={props.setModalShow}
    />
    )
  })
  
  return (
    <div className="swipe"> 
    <div className="swipeHeader">
      <h1 className="swipeEvent">{props.eventName}</h1>
      <p className="swipeMsg">No more people.</p>
    </div>
      {listSwipes}
      <ModalMatch
        show={props.modalShow}
        onHide={() => props.setModalShow()}
      />
    </div>
  )
}

