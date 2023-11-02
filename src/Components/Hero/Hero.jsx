import React from 'react'
import './Hero.css'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'

const Hero = () => {
  return (
    <div id="Hero">
        <div className="left">
            <a href="https://github.com/aj0911" target='_blank' className='icon'><AiFillGithub/></a> 
            <a href="https://www.linkedin.com/in/abhinav-jha-709bbb256/" target='_blank' className='icon'><AiFillLinkedin/></a>
            <div className="line"></div>
        </div>
        <div className="right">
            <a href='#Hero' className='name'>Abhinav Jha</a>
            <div className="line"></div>
        </div>
    </div>
  )
}

export default Hero