import React, { useEffect } from 'react'
import projects from "./ProjectsInfo"
import "./Projects.css"
import img1 from "./images/1.png"
import img2 from "./images/2.png"
import img3 from "./images/3.png"
import img4 from "./images/4.png"
import img5 from "./images/5.png"

const Projects = () => {
  const imgs = [img1,img2,img3,img4,img5]
  
  return (
    <div className="projects-container">
      {projects && projects.map((project,index)=>{
        return <div className="project">
          <div className="left"></div>
          <h2>{project.title}</h2>
          <p>{project.content}</p>
          <img className="project-img" src={imgs[index]}/>
          <a className="visit-site" href={project.link} target='_blank'>&gt; Visit site</a>
        </div>
      })}
    </div>
  )
}

export default Projects