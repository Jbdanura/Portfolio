import React, { useEffect } from 'react'
import projects from "./ProjectsInfo"
import "./Projects.css"
import img1 from "./images/1.png"
import img2 from "./images/2.png"
import img3 from "./images/3.png"

const Projects = ({translations}) => {
  const imgs = [img1,img2,img3]
  
  return (
    <div className="projects-container">
      {projects && projects.map((project,index)=>{
        if(index != 0){
        return <div className="project">
          <div className="left"></div>
          <h2>{project.title}</h2>
          <p>{translations.projects[index]}</p>
          <img className="project-img" src={imgs[index]}/>
          <a className="visit-site" href={project.link} target='_blank'>&gt; {translations.visitSite}</a>
        </div>
        } else {
          return <div className="project project-highlight">
          <div className="left"></div>
          <h2>{project.title}</h2>
          <p>{translations.projects[index]}</p>
          <img className="project-img" src={imgs[index]}/>
          <a className="visit-site" href={project.link} target='_blank'>&gt; {translations.visitSite}</a>
        </div>
        }

      })}
    </div>
  )
}

export default Projects