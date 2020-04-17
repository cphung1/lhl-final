import React, { useState, useEffect } from 'react'
import "./Swipe.scss"
import OneProfile from "./OneProfile"
import axios from 'axios'

export default function Swipe(props) {

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
    />
    )
  })
  
  return (
    <div className="swipe"> 
      <h1>{props.eventName}</h1>
      {listSwipes}
    </div>
  )
}

