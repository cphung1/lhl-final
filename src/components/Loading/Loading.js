import React from 'react'
import "./Loading.scss"
import { Redirect } from 'react-router-dom'

export default function Loading(props) {

  if(props.doneLoading) {
    return <Redirect to='swipe'/>
  } else {
    return (
      <div className="loading"> 
        <p>PAGE IS LOADING</p>
      </div>
    )

  }
}
