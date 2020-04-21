import React, { useState } from 'react'
import Card from 'react-bootstrap/Card'
import "./MyProfile.scss"
import classnames from "classnames";
import axios from 'axios';

export default function MyProfile(props) {
  const calculateAge = (birthdate) => {
    const currentYear = new Date().getFullYear();
    return currentYear - birthdate;
  }

  const editProfile = () => {
    
    const data = {
      description: descState.description
    }

    console.log(data)
    return axios.patch(`/api/users/${props.myProfile.id}`, data)
    .then((res) => {
      console.log(res)
    }).catch(error => 
      console.log("Cannot edit profile")
    )
  }

  const [edit, setEdit] = useState(true)
  
  const formClass = classnames('form', {'form-disabled' : edit})

  const editBtnClass = classnames('editBtn', {'editBtn-disabled' : !edit})

  const saveBtnClass = classnames('saveBtn-disabled', {'saveBtn' : !edit})

  const [descState, setDesc] = useState({ description: props.myProfile.description });

  const toggleEdit = (state) => setEdit(state)

  const handleDesc = event => (setDesc({[event.target.name]: event.target.value}));

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
          <Card.Title className="profile-font">{props.myProfile.location} </Card.Title>
          <Card.Text className="profile-font">
            <form>
              <textarea className={formClass} tyoe="text" name="description" value={descState.description} onChange={handleDesc} disabled={edit}/>
            </form>
          </Card.Text>  
        </div>
        </Card.Body>
      </Card>
      </div>
      <button className={editBtnClass} onClick={() => toggleEdit(false)}>Edit</button>
      <button className={saveBtnClass} onClick={() => {toggleEdit(true); editProfile()}}>Save</button>
      
      <button className="logoutBtn" onClick={() => props.logout()}>Logout</button>
    </div>
  )
}