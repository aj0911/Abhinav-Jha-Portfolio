import React from 'react'
import './Hero.css'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { TbArrowBigRightLines } from 'react-icons/tb'
import {BsChevronDoubleDown} from 'react-icons/bs'

const Hero = () => {
  return (
    <div id="Hero">
        <div className="left">
            <a href="https://github.com/aj0911" target='_blank' className='icon'><AiFillGithub/></a> 
            <a href="https://www.linkedin.com/in/abhinav-jha-709bbb256/" target='_blank' className='icon'><AiFillLinkedin/></a>
            <div className="line"></div>
        </div>
        <div className="content">
          <p>Hi my name is,</p>
          <h2>Abhinav Jha</h2>
          <h4>I develop scalable applications and softwares using latest technologies. </h4>
          <h6>I code within required coding standards and styles to serve the exact need</h6>
          <button onClick={()=>document.getElementById("Contact").scrollIntoView()}>
            <h3>Contact Me</h3>
            <TbArrowBigRightLines className='icon'/>
          </button>
          <div className="down">
            <a href='#About'>Scroll Down</a>
            <BsChevronDoubleDown className='icon'/>
          </div>
        </div>
        <div className="right">
            <a href='#Hero' className='name'>Abhinav Jha</a>
            <div className="line"></div>
        </div>
    </div>
  )
}

export default Hero