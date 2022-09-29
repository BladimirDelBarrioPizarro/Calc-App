/* eslint no-eval:0 */
import React,{useState} from 'react'
import words from 'lodash.words'
import Functions from '../Functions/Functions'
import MathOp from '../MathOp/MathOp'
import Numbers from '../Numbers/Numbers'
import Result from '../Result/Result'
import './App.css'
import i18n from './i18n.json'

const App = () => {
    const [stack,setStack] = useState('')
    const items = words(stack,/[^-^+^*^/]/g)
    console.log('items: ',items)
    return(
        <main className='react-calculator'>
            <h1>{i18n.Title}</h1>
            <Result value={items[items.length -1]} />
            <Numbers onClickNumber={number => setStack(`${stack}${number}`)}/>
            <Functions onContentClear={() => setStack('')} 
                       onDelete={() => {
                        if(stack.length > 0){
                            const newStack = stack.substring(0,stack.length -1)
                            setStack(newStack) 
                        }
                       }} />
            <MathOp onClickOperation={operation => setStack(`${stack}${operation}`)}
                        onClickEqual={equal => setStack(eval(stack).toString())}/>
        </main>
    )
}

export default App