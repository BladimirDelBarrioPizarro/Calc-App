import React from 'react'
import './Button.css'

 
const Button = ({type, text, handleOnClick}) => {
   return (
    <button className={type}  onClick={() => {
        console.log("click en button")
        handleOnClick(text)
    }}>
        <span>{text}</span>
    </button>
   )
}

export default Button