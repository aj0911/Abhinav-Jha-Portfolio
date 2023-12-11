import React from 'react'
import './Skills.css'
import Title from '../Helper/Title'
import { skills } from '../Helper/Constants'

const Skills = () => {
  return (
    <div className="container" id="Skills">
        <Title title={'Skills'} index={4}/>
        <div className="box">
            {
                skills.map((skill,index)=>{
                    const xpYear =(new Date(Date.now())).getFullYear() - (new Date(skill.xp)).getFullYear();
                    const xpMonth = (new Date(Date.now())).getMonth() - (new Date(skill.xp)).getMonth();
                    const xp = (xpYear>0)?xpYear + ' years':xpMonth +' months ';
                    return (
                        <div key={index} className="skillSet">
                            <h3>{skill.title}</h3>
                            <p>{xp} Experience</p>
                            <div className="skillBox">
                                {
                                    skill.skill.map((e,j)=>(
                                        <div key={j} className="skill">
                                            <div className="iconDiv">
                                                {e.icon}
                                            </div>
                                            <h5>{e.name}</h5>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Skills