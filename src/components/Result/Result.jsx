import React from 'react'
import './Result.css'



const Result = (props) => {
    const {value} = props
    return (
        <div className="result">
            <span>{value}</span>
        </div>
    )
}

export default Result