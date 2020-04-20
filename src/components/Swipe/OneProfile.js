import React, { useState } from 'react'
import Card from 'react-bootstrap/Card'
import "./OneProfile.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ModalMatch from '../Modal/Modal'

export default function Swipe(props) {
  const [state, setState] = useState({isVisible: true})

  const toggleBox = () => {
    setState(prev => ({isVisible: !prev.isVisible}))
  }
  
  const calculateAge = (birthdate) => {
    const currentYear = new Date().getFullYear()
    return currentYear - birthdate
  }
  const rand = Math.floor(Math.random() * 50)
  
  return (
    <div className="oneprofile" style={{zIndex: rand}}> 
      <Card className={`card ${state.isVisible}`}>
        <Card.Body className="swipe-wrapper">
          <div className="imgdiv">

        <Card.Img className="cardImg" variant="top" src={`./images/users/${props.id}.jpg`} alt={props.name} />
          <h2>          ___________________________________________________________</h2>
          </div>

        <div className="swipe-content-wrapper">
            <Card.Title className="pofileName">{props.name}, {calculateAge(props.birthdate.slice(0, 4))}</Card.Title>
            <Card.Title className="swipe-font">{props.location}</Card.Title>
            <Card.Text className="swipe-font">{props.description}</Card.Text>
        </div>
        </Card.Body>
      </Card>
      <div className={`button ${state.isVisible}`} >
        <button onClick={() => {props.dislikeUser(props.currentUser, props.id); toggleBox()}}>
          <FontAwesomeIcon icon={'times'} size='4x'className='times'/>
        </button>
        <button onClick={() => {props.likeUser(props.currentUser, props.id); toggleBox()}}>
          <FontAwesomeIcon icon={'heart'} size='4x' className='heart' />
        </button>
      </div> 
    </div>
  )
}

