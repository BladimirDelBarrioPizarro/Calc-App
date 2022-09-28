import React from 'react'
import PropTypes from 'prop-types'
import './Button.css'

 
const Button = ({type, text, handleOnClick}) => (
    <button className={type}  onClick={() => handleOnClick(text)}>
        <span>{text}</span>
    </button>
   )


Button.propTypes = {
    type: PropTypes.string,
    text: PropTypes.string.isRequired,
    handleOnClick: PropTypes.func.isRequired
}

export default Button