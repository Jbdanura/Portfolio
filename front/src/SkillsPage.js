import React,{useEffect,useState} from 'react'
import Skills from './Skills'
import "./skills.css"

const SkillsPage = ({translations}) => {
  const [show,setShow] = useState(false)

  useEffect(()=>{
    setTimeout(()=>{
        setShow(true)
    },1)
  },[])

  return (
    <div className={show ? "skills-page-active" :"skills-page"}>
        <h3 style={{fontSize:'29px',textAlign:'center',marginTop:'50px'}}>{translations.skillsIntro}</h3>
        <Skills translations={translations}/>
    </div>
  )
}

export default SkillsPage