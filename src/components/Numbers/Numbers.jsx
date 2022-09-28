import React from 'react'
import PropTypes from 'prop-types'
import Button from '../Button/Button'
import './Numbers.css'

// DRY: Don´t repeat yourself
const numbers = [1,2,3,4,5,6,7,8,9,0]
const renderButtons = onClickNumber => {
    const renderButton = number => (
        <Button text={number.toString()} handleOnClick={onClickNumber}/>
    )
    return numbers.map(renderButton)
}

const Numbers = ({onClickNumber}) => (
   <section className="numbers">
        {renderButtons(onClickNumber)}
   </section>
)

Numbers.propTypes = {
    onClickNumber: PropTypes.func.isRequired 
}

export default Numbers