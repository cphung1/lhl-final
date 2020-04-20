import React, { useState } from 'react';
import Calendar from 'react-calendar';
import "./Date.scss"

export default function Date() {
  return (
    <div className="calendar-wrapper">
    <Calendar
    />
  </div>
  )
}