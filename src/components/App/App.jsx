import React from 'react'
import './App.css'
import i18n from './i18n.json'
import Result from '../Result/Result'

const App = () => {
    console.log("Renderizado App")
    return(
        <main className='react-calculator'>
            <h1>{i18n.Title}</h1>
           <Result value={"0"} />
            <div className="numbers">
                    <button>{i18n.one}</button>
                    <button>{i18n.two}</button>
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