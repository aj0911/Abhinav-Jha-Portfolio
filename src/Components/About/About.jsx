import React from 'react'
import './About.css'
import Title from '../Helper/Title'
import { aboutMe  } from '../Helper/Constants'
import {BsCloudDownload} from 'react-icons/bs'

const About = () => {
  return (
    <div id="About">
        <Title index={1} title={'About Me'}/>
        <div className="box">
            <div className="left">
                <p dangerouslySetInnerHTML={{__html:aboutMe}}></p>
                <button onClick={()=>window.open(require('../../Assets/CV.pdf'),'_blank')}>
                    <h3>Download CV</h3>
                    <BsCloudDownload className='icon'/>
                </button>
            </div>
            <div className="right">
                <div className="img-div">
                    <img src={require('../../Assets/me.jpeg')} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default About