import React, { useEffect, useState } from 'react'
import Title from '../Helper/Title'
import { projects } from '../Helper/Constants'
import { SiGithub, SiGooglechrome } from 'react-icons/si';
import './Projects.css'

const Projects = () => {
  const [pIndex, setPIndex] = useState(0);
  const [animation,setAnimation] = useState(true);
  useEffect(()=>{
    setAnimation(!animation);
  },[pIndex])
  return (
    <div id="Projects" className="container">
        <Title title={'Projects'} index={5}/>
        <div className="upper">
            {
              projects.map((project,index)=>(
                <button className={(pIndex===index)?'active':''} onClick={()=>setPIndex(index)} key={index}>{project.header}</button>
              ))
            }
        </div>
        <div className="lower">
          {
            projects[pIndex].projects.map((project,index)=>{
              return (
                <div key={index} className={`project ${(animation)?'animetrue':'animefalse'}`}>
                  <div className="top">
                    <a href={project.link} target='_blank'><SiGooglechrome/></a>
                    <a href={project.github} target='_blank'><SiGithub/></a>
                  </div>
                  <img src={project.img} alt="" />
                  <div className="down">
                    <h3>{project.title}</h3>
                    <p>{project.desc}</p>
                    <h5>{project.techStack}</h5>
                    {(project.paper)? <a href={project.paper} target='_blank'>View Paper</a>:''}
                  </div>
                </div>
              )
            })
          }
        </div>
    </div>
  )
}

export default Projects