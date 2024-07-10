import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer>
        <p>Designed By Abhinav Jha | {(new Date(Date.now())).getFullYear()}</p>
    </footer>
  )
}

export default Footer