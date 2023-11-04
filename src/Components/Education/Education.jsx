import React from 'react'
import './Education.css'
import Title from '../Helper/Title'
import { education } from '../Helper/Constants'

const Education = () => {
  return (
    <div id="Education">
        <Title index={2} title={'Education'}/>
        {
            education.map((item,index)=>(
                <div key={index} className="box">
                    <div className="left"></div>
                    <div className="right">
                        <div className="ball-line">
                            <div className="ball"></div>
                            <div className="line"></div>
                        </div>
                        <div className="education">
                            <p>{item.time}</p>
                            <h3>{item.name}</h3>
                            <h5>{item.degree}</h5>
                            <p>{item.passingMarks}</p>
                        </div>
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default Education

