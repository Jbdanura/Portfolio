import React,{useState,useEffect} from 'react'
import "./Contact.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons'

const Contact = () => {
  const [show,setShow] = useState(false)

  useEffect(()=>{
    setTimeout(()=>{
        setShow(true)
    },1)
  },[])

  return (
    <div className={show ? "contact-active" : "contact"}>
      <h1>Let's get in touch</h1>
      <p>For inquiries, collaborations, or just to say hello, feel free to reach out. 
        I'm always open to connecting with new people and exploring exciting opportunities. </p>
        <div className="contact-container">
            <a href="https://github.com/Jbdanura" target="_blank"><FontAwesomeIcon icon={faGithub} className="github-icon"/>
            <p>Contact me on GitHub</p></a> 
            <a href="mailto:danurabe@gmail.com" target="_blank"><FontAwesomeIcon icon={faEnvelopeOpen}/><p>danurabe@gmail.com</p></a> 
        </div>
    </div>
  )
}

export default Contact