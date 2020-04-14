import React from 'react'
import "./Login.scss"

export default function Login(props) {
  return (
    <div> 
      <form>
        <label>
          Email:
          <input type="text" name="email" />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <form>
        <label>
          Password:
          <input type="text" name="password" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}