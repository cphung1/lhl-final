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
      <Card style={{ width: '35rem' }}>
        <Card.Body>
          <div className="imgdiv">
        <Card.Img className="cardImg" variant="top" src={`./images/users/${props.myProfile.id}.jpg`} alt={props.myProfile.name} />
        <h2>          ___________________________________________________________</h2>
          </div>

        <div className="profile-content-wrapper">
          <Card.Title className="profile-font-name">{props.myProfile.name}, {calculateAge(props.myProfile.birthdate.slice(0, 4))}</Card.Title>
          <Card.Title className="profile-font">{props.myProfile.location}</Card.Title>
          <Card.Text className="profile-font">{props.myProfile.description}</Card.Text>  
        </div>
        </Card.Body>
      </Card>
      </div>
      <button onClick={() => props.logout()}>Logout</button>
    </div>
  )
}
// calculateAge(props.myProfile.birthdate.slice(0, 4))
// new Date(props.myProfile.birthdate).toDateString().slice(4)