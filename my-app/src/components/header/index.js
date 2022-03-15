import React,{useState} from 'react'
import "./header.css";
import { BiCategoryAlt } from "react-icons/bi";
import Web from '../header/web/index'
import Mobile from '../header/mobile/index'

function Header() {
  const [isOpen,setIsOpen] =useState(false)
  return (
    <div className='header'>
      <div className='logo'>
        PORTFOLIO
      </div>
      <div className='menu'>
        <div className='web-menu'>
          <Web/>
        </div>
        <div className='mobile-menu'>
          <div onClick={()=> setIsOpen(!isOpen)}>
            <div className='menu-icon'>
              <BiCategoryAlt/>
            </div>
            
          </div>
          {isOpen && <Mobile isOpen={isOpen} setIsOpen={setIsOpen}  />  }
        </div>
      </div>

    </div>
    
  )    
  
}

export default Header