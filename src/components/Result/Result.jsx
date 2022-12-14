import React from 'react'
import PropTypes from 'prop-types'
import './Result.css'

const Result = ({value}) => (
    <div className="result">
      <span>{value}</span>
    </div>
 )


Result.propTypes = {
    value: PropTypes.string.isRequired
}

Result.defaultProps = {
    value: "0"
}

export default Result