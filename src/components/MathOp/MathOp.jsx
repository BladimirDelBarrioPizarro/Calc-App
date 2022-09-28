import React from 'react'
import PropTypes, { func } from 'prop-types'
import Button from '../Button/Button'
import i18n from './i18n.json'
import './MathOp.css'

const MathOp = ({onClickOperation, onClickEqual}) => (
  <section className="math-operations">
    <Button text={i18n.sum} handleOnClick={onClickOperation}/>
    <Button text={i18n.substraction} handleOnClick={onClickOperation}/>
    <Button text={i18n.multiplication} handleOnClick={onClickOperation}/>
    <Button text={i18n.division} handleOnClick={onClickOperation}/>
    <Button text={i18n.equals} handleOnClick={onClickEqual}/>
</section>
)

MathOp.propTypes = {
    onClickOperation: PropTypes.func.isRequired,
    onClickEqual: PropTypes.func.isRequired
}

export default MathOp