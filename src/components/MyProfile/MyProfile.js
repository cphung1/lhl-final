import React, {useEffect} from 'react'
import Card from 'react-bootstrap/Card'
import "./MyProfile.scss"


export default function MyProfile(props) {
  const calculateAge = (birthdate) => {
    const currentYear = new Date().getFullYear()
    return currentYear - birthdate
  }

  // useEffect(() => {
  //   props.getMyProfileDetails(props.user)
  // }, [])

  if(!props.user){
    return null;
  }
  
  return (
    <div className='myprofile'> 
      <h1>My Profile</h1>
      <div className="myProfileContent">
      <Card>
        <Card.Body>
          <div className="imgdiv">

        <Card.Img className="cardImg" variant="top" src={`./images/users/${props.myProfile.id}.jpg`} alt={props.myProfile.name} />
          </div>

        <Card.Title className="pofileName">{props.myProfile.name}, {props.myProfile.birthdate}</Card.Title>
        <Card.Title>{props.myProfile.location}</Card.Title>
        <Card.Text>{props.myProfile.description}</Card.Text>
        </Card.Body>
      </Card>
      </div>
      <button onClick={() => props.logout()}>logout</button>
    </div>
  )
}