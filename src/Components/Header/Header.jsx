import React, { useRef } from 'react'
import './Header.css'
import { Menus } from '../Helper/Constants';

const Header = () => {
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
        <a href='#Hero' className="logo">Aj.</a>
        <nav>
            {
                Menus.map((menu,index)=>(
                    <a onClick={()=>header.current.classList.toggle('active')} key={index} href={`#${menu}`} className='menu'><span>{index+1}.</span>{menu}</a>
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