import React from 'react'
import "./button.css"


function Button(props) {
  return (
       <button className={props.class} onClick={props.onclick}>{props.title}</button>
  )
}

export default Button
