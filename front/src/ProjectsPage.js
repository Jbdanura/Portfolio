import React,{useEffect,useState} from 'react'
import Projects from './Projects'
import "./Projects.css"

const ProjectsPage = ({translations}) => {

  const [show,setShow] = useState(false)

  useEffect(()=>{
    setTimeout(()=>{
        setShow(true)
    },1)
  },[])

  return (
    <div className={show ? "projects-page-active" : "projects-page"}>
        <div className='projects-intro'>
            <h3>{translations.myProjects}</h3>
            <p style={{marginBottom:"15px"}}>
            {translations.projectsJourney}
            </p>
        </div>
        <Projects translations={translations}/>
      </div>
  )
}

export default ProjectsPage