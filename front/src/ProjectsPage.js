import React,{useEffect,useState} from 'react'
import Projects from './Projects'
import "./Projects.css"

const ProjectsPage = () => {

  const [show,setShow] = useState(false)

  useEffect(()=>{
    setTimeout(()=>{
        setShow(true)
    },1)
  },[])

  return (
    <div className={show ? "projects-page-active" : "projects-page"}>
        <div className='projects-intro'>
            <h3>My projects</h3>
            <p>
            In my journey as a web developer, I've had the opportunity to work on a variety of projects that 
            showcase my skills and expertise. From developing interactive social media platforms to building robust e-commerce solutions, 
            each project has been a learning experience that has honed my abilities in crafting scalable and secure web applications.
            Below, you'll find a selection of projects that highlight my problem-solving approach, attention to detail, and commitment to delivering
            high-quality results.
            </p>
        </div>
        <Projects/>
      </div>
  )
}

export default ProjectsPage