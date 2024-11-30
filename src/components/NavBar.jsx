import React from 'react'
import profilePhoto from "../assets/profilPhoto.jpg"
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';



const NavBar = () => {
  return (
    <nav className='mb-20 flex items-center justify-between py-6'>
      <div className='flex flex-shrink-0 items-center'>
              <span className='xn-2 text-4xl w-10'>EO</span>
            
            
             </div>
        <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
        <a href="https://www.linkedin.com/in/emre-öksüz-a545a7275/" 
           target="_blank" 
           rel="noopener noreferrer" 
           aria-label="LinkedIn">
          <FaLinkedin />
        </a>
        <a href="https://github.com/EmreOksuz78" 
           target="_blank" 
           rel="noopener noreferrer" 
           aria-label="GitHub">
          <FaGithub />
        </a>
        </div>
    </nav>
  )
}

export default NavBar
