import React from 'react';
import { ImCancelCircle } from "react-icons/im";
import { AiFillEdit, AiOutlineLaptop } from "react-icons/ai";
import { GiSuitcase} from "react-icons/gi";
import { BsPeople} from "react-icons/bs";
import "./mobile.css"

function Mobile({ isOpen, setIsOpen }) {
  return (
    <div className='mobile'>
      <div className='close-icon ' onClick={() => setIsOpen(!isOpen)}>
        <ImCancelCircle />
      </div>
      <div className='mobile-options'>
        <div className='mobile-option'>
          <div>
            <a href='#project'>
              <AiFillEdit /> projects
            </a>
          </div>

        </div>
        <div className='mobile-option'>

          <div>
            <a href='#skills'>
              <AiOutlineLaptop /> Skills
            </a>

          </div>
        </div>
        <div className='mobile-option'>
          <div>
            <a href='#work'>
              <GiSuitcase /> Work
            </a>
          </div>

        </div>
        <div className='mobile-option'>
          <div>
            <a href='#contact'>
              <BsPeople />  contact
            </a>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Mobile