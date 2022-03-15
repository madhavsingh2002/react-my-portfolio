import React from 'react'
import "./work.css";
import Seperator from '../../common/social-contact/seperator';
import WorkCard from './work-card';
import {WorkData} from "../../common/social-contact/data/work"
function Work() {
  const data = WorkData;
  return (
    <div className='work'>
    <Seperator/>
    <label className='section-title'>
        WORK.
    </label>
    <div className='work-list'>
        {data.map((item)=>{
          return (
            <WorkCard item={item}/>
          )

          
        })}
    </div>
    </div>
  );
}

export default Work