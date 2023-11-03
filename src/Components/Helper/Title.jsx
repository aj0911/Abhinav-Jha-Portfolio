import React from 'react'
import './Helper.css'

const Title = ({index,title}) => {
  return (
    <div className="title">
        <h3>0{index}.</h3>
        <div className="name">
            <h3>{title}</h3>
            <div className="line-loader"></div>
        </div>
    </div>
  )
}

export default Title