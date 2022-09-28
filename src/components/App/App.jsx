import React from 'react'
import Button from '../Button/Button'
import Result from '../Result/Result'
import './App.css'
import i18n from './i18n.json'



const App = () => {
    console.log("Renderizado App")
    const clickHandlerFunction = text => {
        console.log("Button.handleClick",text)
    }

    return(
        <main className='react-calculator'>
            <h1>{i18n.Title}</h1>
           <Result value={undefined} />
            <div className="numbers">
                    <Button text={i18n.one} handleOnClick={clickHandlerFunction}/>
                    <Button text={i18n.two} handleOnClick={clickHandlerFunction}/>
                
                    <button>{i18n.three}</button>
                    <button>{i18n.four}</button>
                    <button>{i18n.five}</button>
                    <button>{i18n.six}</button>
                    <button>{i18n.seven}</button>
                    <button>{i18n.eight}</button>
                    <button>{i18n.nine}</button>
                    <button>{i18n.cero}</button>
            </div>
            <div className="functions">
                    <button>{i18n.remove}</button>
                    <button>{i18n.clear}</button>
            </div>
            <div className="math-operations">
                    <button>{i18n.sum}</button>
                    <button>{i18n.substraction}</button>
                    <button>{i18n.division}</button>
                    <button>{i18n.multiplication}</button>
                    <button>{i18n.equals}</button>
                </div>
        </main>
    )
}

export default App