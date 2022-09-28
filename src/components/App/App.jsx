import React from 'react'
import Button from '../Button/Button'
import Functions from '../Functions/Functions'
import MathOp from '../MathOp/MathOp'
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
                    <Button text={i18n.three} handleOnClick={clickHandlerFunction}/>
                    <Button text={i18n.four} handleOnClick={clickHandlerFunction}/>
                    <Button text={i18n.five} handleOnClick={clickHandlerFunction}/>
                    <Button text={i18n.six} handleOnClick={clickHandlerFunction}/>
                    <Button text={i18n.seven} handleOnClick={clickHandlerFunction}/>
                    <Button text={i18n.eight} handleOnClick={clickHandlerFunction}/>
                    <Button text={i18n.nine} handleOnClick={clickHandlerFunction}/>
                    <Button text={i18n.cero} handleOnClick={clickHandlerFunction}/>
            </div>
          
            <Functions onContentClear={() => console.log("clear")} 
                       onDelete={() => console.log("delete")} />
            
            <div className="math-operations">
                <MathOp onClickOperation={operation => console.log(operation)} 
                        onClickEqual={equal => console.log(equal)}/>
            </div>
        </main>
    )
}

export default App