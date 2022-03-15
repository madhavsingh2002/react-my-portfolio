import React from 'react'
import SocialContact from '../../common/social-contact';
import "./about.css";
function About() {
  return (
    <div className='about'>
        <div className='about-top'>
            <div className='about-info'>
                Hello , everyone 🙂 
                <br/>
                <span id='nameinfo'>
                    I am Madhav singh. 
                </span>
            </div>
            <div className='about-photo'>
                <img
                    src={require('../../../assets/image.png')}
                    className ="picture"
                />
            </div>
        </div>
        <SocialContact/>
    </div>
  )
}

export default About