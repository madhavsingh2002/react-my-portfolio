import React from "react"
import "./projects-card.css";
import {AiOutlineGlobal} from "react-icons/ai"
function ProjectCard({project}){
    return (
        <div className="project-card">
            <div className="project-info">
                <label className="project-title">
                    {project.title}
                </label>
                <div className="project-links">
                    {project.demo && (
                        <a className="project-link" href= {project.demo}>
                            <div className="link-button">
                            <AiOutlineGlobal /> demo
                                
                            </div>
                        </a>
                    )}
                    {project.github && (
                        <a className="project-link" href={project.github} >
                            <div className="link-button">
                                Github
                            </div>
                        </a>
                    )}
                </div>
                <p> {project.about} </p>
                <div className="project-tags">
                        {project.tags.map((tag)=>{
                            return <label className="tag" > {tag} </label>
                        })}
                </div>
            </div>
            
            <img src ={project.image} className = "project-photo"/>
        </div>
    )
}
export default ProjectCard;
