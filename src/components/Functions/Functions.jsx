import React from 'react'
import Button from '../Button/Button'
import PropTypes from 'prop-types'
import i18n from './i18n.json'

const Functions = ({onContentClear,onDelete}) => (
    <section className="functions">
       <Button text={i18n.clear} handleOnClick={() => onContentClear()}></Button>
       <Button text="&larr;" handleOnClick={() => onDelete()}></Button>
    </section>
  )  
 
Functions.propTypes = {
    onContentClear: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired
}

export default Functions