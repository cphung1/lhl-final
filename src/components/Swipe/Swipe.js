import React from 'react'
import "./Swipe.scss"
import OneProfile from "./OneProfile"

export default function Swipe(props) {

  console.log(props.mySwipes)
  const listSwipes = props.mySwipes.map(element => {
    return <OneProfile 
      key = {element.id}
      id = {element.id}
      image = {element.image}
      name = {element.name}
      birthdate = {element.birthdate}
      location = {element.location}
      description = {element.description}
    />
  })

  return (
    <div> 
      <h1>Swiping Function</h1>
      {listSwipes}
    </div>
  )
}

