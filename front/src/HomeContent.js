import React, { useState,useEffect } from 'react'
import Me from "./images/me.png"
import htb from "./images/hackthebox.jpg"
import thm from "./images/tryhackme.png"
import leetcode from "./images/leetcode.png"
import "./HomeContent.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelopeOpen,faBriefcase} from '@fortawesome/free-solid-svg-icons'

const HomeContent = ({translations}) => {

  const [show,setShow] = useState(false)

  useEffect(()=>{
    setTimeout(()=>{
        setShow(true)
    },1)
  },[])

  return (
    <div className={show ? "home-content-active" : "home-content"}>
        <div className="home-main">
            <div className="left">
                <img src={Me} className="left-img"/>
                <h1>{translations.homeTop}</h1>
                <p>{translations.homeDesc}</p>
                <div className="links">
                    <a href="https://github.com/Jbdanura" target="_blank"><FontAwesomeIcon icon={faGithub} className="github-icon"/></a> 
                    <a href="mailto:danurabe@gmail.com" target="_blank"><FontAwesomeIcon icon={faEnvelopeOpen}/></a> 
                    <a href="https://app.hackthebox.com/users/1484721" target="_blank"><img src={htb}/></a> 
                    <a href="https://tryhackme.com/p/danurabe" target="_blank"><img src={thm}/></a> 
                    <a href="https://leetcode.com/Jbdanura/" target="_blank"><img src={leetcode}/></a> 
                </div>
            </div>
            <div className='right'>
                <img src={Me}/>
            </div>
        </div>
        <div className='work-container'>
          <h3><FontAwesomeIcon icon={faBriefcase}/> {translations.work}</h3>
          <div className="jobs">
            <div className="job">
              <h4>{translations.ai}</h4>
              <p>Remotasks</p>
              <p>{translations.past}</p>
            </div>
            <div className="job">
              <h4>{translations.ai}</h4>
              <p>Outlier</p>
              <p>{translations.pastTwo}</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default HomeContent