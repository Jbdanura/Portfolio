import React,{useEffect,useState} from 'react'
import Skills from './Skills'
import "./skills.css"

const SkillsPage = () => {
  const [show,setShow] = useState(false)

  useEffect(()=>{
    setTimeout(()=>{
        setShow(true)
    },1)
  },[])

  return (
    <div className={show ? "skills-page-active" :"skills-page"}>
        <h3 style={{fontSize:'29px',textAlign:'center',marginTop:'50px'}}>Things I've learned through my journey</h3>
        <Skills/>
    </div>
  )
}

export default SkillsPage