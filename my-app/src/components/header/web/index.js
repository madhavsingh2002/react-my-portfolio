import React from 'react'
import { AiFillEdit, AiOutlineLaptop } from "react-icons/ai";
import { GiSuitcase} from "react-icons/gi";
import { BsPeople} from "react-icons/bs";
import "./web.css"
function Web() {
  return (
    <div className='web'>
      <div className='web-option'> 
        <div>
        <a href='#project'>
          <AiFillEdit/> projects
        </a>
        </div>
        
      </div> 
      <div className='web-option'> 

        <div>
        <a href='#skills'>
          <AiOutlineLaptop/> Skills
        </a>
        
        </div>
      </div> 
      <div className='web-option'> 
        <div>
        <a href='#work'>
          <GiSuitcase/> Work
        </a>
        </div>
        
      </div> 
      <div className='web-option'> 
        <div>
        <a href='#contact'>
          <BsPeople/>  contact
        </a>
        </div>
        
      </div>  
    </div>
  )
}

export default Web