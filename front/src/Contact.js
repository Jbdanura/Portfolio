import React,{useState,useEffect} from 'react'
import "./Contact.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub,faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons'

const Contact = ({translations}) => {
  const [show,setShow] = useState(false)

  useEffect(()=>{
    setTimeout(()=>{
        setShow(true)
    },1)
  },[])

  return (
    <div className={show ? "contact-active" : "contact"}>
      <h1>{translations.contactIntro}</h1>
      <p>{translations.contactDesc} </p>
        <div className="contact-container">
            <a href="https://github.com/Jbdanura" target="_blank"><FontAwesomeIcon icon={faGithub} className="github-icon"/>
            <p>{translations.contactGit}</p></a> 
            <a href="https://www.linkedin.com/in/bautista-danura-52a0042b8/" target="_blank"><FontAwesomeIcon icon={faLinkedin} /><p>{translations.contactLn}</p></a>
            <a href="mailto:jbdanura@hotmail.com" target="_blank"><FontAwesomeIcon icon={faEnvelopeOpen}/><p>jbdanura@hotmail.com</p></a> 
            
        </div>
    </div>
  )
}
export default Contact