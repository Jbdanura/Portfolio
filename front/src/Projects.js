import React, { useEffect } from 'react'
import projects from "./ProjectsInfo"
import "./Projects.css"

const Projects = () => {
  return (
    <div className="projects-container">
      {projects && projects.map(project=>{
        return <div className="project">
          <h2>{project.title}</h2>
          <p>{project.content}</p>
        </div>
      })}
    </div>
  )
}

export default Projects