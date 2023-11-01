import React, { useRef } from 'react'
import './Header.css'

const Header = () => {
    const menus = [
        'About',
        'Education',
        'Experience',
        'Skills',
        'Projects',
        'Testimonials',
        'Contact'
    ]
    const header = useRef();
    document.addEventListener('scroll',()=>{
        if(window.scrollY>20){
            header.current.classList.add('sticky')
        }
        if(window.scrollY<20){
            header.current.classList.remove('sticky')
        }
    })
  return (
    <header ref={header}>
        <a href='#About' className="logo">Aj.</a>
        <nav>
            {
                menus.map((menu,index)=>(
                    <a key={index} href={`#${menu}`} className='menu'><span>{index+1}.</span>{menu}</a>
                ))
            }
            <button>Resume</button>
        </nav>
        <div onClick={()=>header.current.classList.toggle('active')} className="hamburger">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
        </div>
    </header>
  )
}

export default Header