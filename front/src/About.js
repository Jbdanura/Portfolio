import React,{useState,useEffect} from 'react'
import "./About.css"
import Me from "./images/me.png"

const About = () => {
  const [show,setShow] = useState(false)

  useEffect(()=>{
    setTimeout(()=>{
        setShow(true)
    },1)
  },[])

  return (
    <div className={show ? "about-active" : "about"}>
      <div className="about-top">
        <div className="info">
          <h1>I'm <span style={{color:'#ff7676'}}>Bautista Danura</span>. I am 23 years old and I live in <span style={{color:'rgb(193 255 255)'}}>Arg</span>
          <span style={{color:'white'}}>e</span><span style={{color:'#ffffb6'}}>n</span><span style={{color:'white'}}>t</span><span style={{color:'rgb(193 255 255)'}}>ina</span></h1>
          <p> 
          With a diverse portfolio ranging from social media platforms to e-commerce applications,
          and actively participating in Capture the Flag (CTF) competitions and cybersecurity challenges,
            I've honed my skills in both web development and cybersecurity. I've also completed 
            <a href="https://github.com/Jbdanura/odin-project" target="_blank" style={{color:'red'}}> the Odin Project</a> and
            <a href="https://github.com/Jbdanura/fullstackopen" target="_blank" style={{color:'red'}}> Fullstackopen</a> bootcamps, 
            along with engaging in learning through <a href="https://tryhackme.com/p/danurabe" target="_blank" style={{color:'red'}}> TryHackMe </a> 
            and <a href="https://app.hackthebox.com/users/1484721" target="_blank" style={{color:'red'}}> HackTheBox</a> platforms. My expertise lies in crafting secure web applications and 
            conducting penetration testing to ensure their robustness against potential threats. You're welcome to explore my work and projects on
            <a href="https://github.com/jbdanura" target="_blank" style={{color:'red'}}> my GitHub</a>.
          </p>
        </div>
        <img src={Me}/>
      </div>

    </div>
  )
}

export default About