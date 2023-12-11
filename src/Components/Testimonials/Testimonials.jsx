import React, { useRef, useState } from 'react'
import './Testimonials.css'
import Title from '../Helper/Title'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import { TestimonialsData } from '../Helper/Constants'
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";


const Testimonials = () => {
    const slider = useRef();
    const [index,setIndex] = useState(0);
    const next = ()=>{
        const items = slider.current.children;
        slider.current.appendChild(items[0]);
        if(index===TestimonialsData.length-1)setIndex(0);
        else setIndex(index+1);
    }
    const prev = ()=>{
        const items = slider.current.children;
        slider.current.prepend(items[items.length-1]);
        setIndex(index+1);
        if(index===0)setIndex(TestimonialsData.length-1);
        else setIndex(index-1);
    }
  return (
    <div id="Testimonials" className='container'>
        <Title title={'Testimonials'} index={6}/>
        <div className="box" ref={slider}>
            {
                TestimonialsData.map((testimonial,index)=>{
                    return(
                        <div key={index} className="testimonial">
                            <div className="top">
                                <ImQuotesLeft className='icon'/>
                                <p>{testimonial.desc}</p>
                                <ImQuotesRight className='icon'/>
                            </div>
                            <div className="bottom">
                                <img src={testimonial.img} alt="" />
                                <div className="content">
                                    <h3>{testimonial.name}</h3>
                                    <h5>{testimonial.designation}</h5>
                                    <h5>{testimonial.companyName}</h5>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
        <div className="pagination">
            <FaArrowLeft className='icon' onClick={prev}/>
            <div className="dots">
                {
                   TestimonialsData.map((_,i)=>(
                    <div className="dot" style={{backgroundColor:(index===i)?'var(--textSecondaryColor)':'var(--textSecondaryColorDark)'}} key={i}></div>
                   )) 
                }
            </div>
            <FaArrowRight className='icon' onClick={next}/>
        </div>
    </div>
  )
}

export default Testimonials