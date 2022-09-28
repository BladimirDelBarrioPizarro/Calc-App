import React from 'react'
import Functions from '../Functions/Functions'
import MathOp from '../MathOp/MathOp'
import Numbers from '../Numbers/Numbers'
import Result from '../Result/Result'
import './App.css'
import i18n from './i18n.json'



const App = () => {
    return(
        <main className='react-calculator'>
            <h1>{i18n.Title}</h1>
            <Result value={undefined} />
            <Numbers onClickNumber={(number) => console.log("onClickNumbers",number)}/>
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