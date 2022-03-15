import React from 'react'
import { ProjectData } from '../../common/social-contact/data/projects'
import Seperator from '../../common/social-contact/seperator'
import ProjectCard from './projects-card'
import "./projects.css"
function Projects() {
  const data =ProjectData
  return (
    <div className='projects' >
      <Seperator/>
      <label className='section-title'>
        Project
      </label>
      <div>
        {data.map((project)=>{
            return <ProjectCard project = {project} />
        })}
      </div>
    </div>
  )
}

export default Projects;