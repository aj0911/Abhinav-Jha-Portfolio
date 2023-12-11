import React, { useEffect, useState } from 'react'
import './Experience.css'
import Title from '../Helper/Title'
import { experience } from '../Helper/Constants'

const Experience = () => {
    const [companyIndex,setCompanyIndex] = useState(0);
    const [animation,setAnimation] = useState(true);
    useEffect(()=>{
      setAnimation(!animation);
    },[companyIndex])
  return (
    <div id="Experience" className='container'>
        <Title title={'Experience'} index={3}/>
        <div className="box">
            <div className="companies">
                {
                    experience.map((item,index)=>(
                        <button onClick={()=>setCompanyIndex(index)} key={index} className={`${(index===companyIndex)?'active':''}`}>
                            {item.companyName}
                        </button>
                    ))
                }
            </div>
            <div className={`data ${(animation)?'animetrue':'animefalse'}`}>
                <div className="top">
                    <h3>{experience[companyIndex].role}</h3>
                    <h4>@ {experience[companyIndex].companyName}</h4>
                </div>
                <p>{experience[companyIndex].time}</p>
                <div className="bottom">
                    <div className="text">
                        <div className="point"></div>
                        <p>{experience[companyIndex].desc1}</p>
                    </div>
                    <div className="text">
                        <div className="point"></div>
                        <p>{experience[companyIndex].desc2}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Experience