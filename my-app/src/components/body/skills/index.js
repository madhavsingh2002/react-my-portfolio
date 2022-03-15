import React from 'react'
import { SkillsData } from '../../common/social-contact/data/skills'
import Seperator from '../../common/social-contact/seperator'
import SkillCard from './skillCard';
import "./skills.css";
function Skills (){
  const data = SkillsData;
  return(
    <div className='skills'>
      <Seperator/>
      <label className='section-title'>
        Skills 
      </label>
      <div className='skills-container'>
        {data.map((item)=>{
          return(
            <>
              <div className='skills-section'>
                <label className='skills-section-title'>
                  {item.type}
                </label>
                <div className='skill-list'>
                  {item.list.map((skill)=>{
                    return <SkillCard skill ={skill} />

                    
                  })}
                </div>
              </div>
            </>
          )
        })}
      </div>
    </div>

  )
}
export default Skills;