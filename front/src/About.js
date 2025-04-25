import React,{useState,useEffect} from 'react'
import "./About.css"
import Me from "./images/me.png"
import certI from "./images/certI.png"
import certII from "./images/certII.png"
import certIII from "./images/certIII.png"
import certIV from "./images/certIV.png"


const About = ({language}) => {
  const [show,setShow] = useState(false)
  const certificates = []

  useEffect(()=>{
    setTimeout(()=>{
        setShow(true)
    },1)
  },[])

  return (
    <div className={show ? "about-active" : "about"}>
      <div className="about-top">
        {language == "es" ? 
          <div className="info">
          <h1>Soy<span style={{color:'#ff7676'}}> Bautista Danura</span>. Tengo 25 años y vivo en <span style={{color:'rgb(193 255 255)'}}>Arg</span>
          <span style={{color:'white'}}>e</span><span style={{color:'#ffffb6'}}>n</span><span style={{color:'white'}}>t</span><span style={{color:'rgb(193 255 255)'}}>ina</span></h1>
          <p> 
          Con un portafolio diverso que se extiende desde aplicaciones de red social hasta soluciones e-commerce,
          y activamente participando en competiciones de Capture the Flag (CTF) y desafíos de ciberseguridad,
          he ido forjando mis habilidades de programacion y ciberseguridad. También completé los bootcamps de  
            <a href="https://github.com/Jbdanura/odin-project" target="_blank" style={{color:'red'}}> the Odin Project</a> y 
            <a href="https://github.com/Jbdanura/fullstackopen" target="_blank" style={{color:'red'}}> Fullstackopen</a>, 
            y aprendí a través de las plataformas  <a href="https://tryhackme.com/p/danurabe" target="_blank" style={{color:'red'}}> TryHackMe </a> 
            y <a href="https://app.hackthebox.com/users/1484721" target="_blank" style={{color:'red'}}> HackTheBox</a>, haciendo más de 100 CTFs y
             desafíos. Mi experiencia radica en crear aplicaciones web seguras y realizar pruebas de penetración para aplicaciones y sistemas, 
             garantizando su resistencia contra posibles amenazas. Te invito a explorar mi trabajo y proyectos en
            <a href="https://github.com/jbdanura" target="_blank" style={{color:'red'}}> mi GitHub</a>.
            <p style={{fontWeight:"bolder"}}>Entre 2023 y 2025 trabajé como entrenador de inteligencia artificial en las empresas Remotasks y Outlier, contribuyendo al desarrollo y entrenamiento de modelos de IA.
            </p>
          </p>
        </div> : 
        <div className="info">
          <h1>I'm <span style={{color:'#ff7676'}}>Bautista Danura</span>. I am 25 years old and I live in <span style={{color:'rgb(193 255 255)'}}>Arg</span>
          <span style={{color:'white'}}>e</span><span style={{color:'#ffffb6'}}>n</span><span style={{color:'white'}}>t</span><span style={{color:'rgb(193 255 255)'}}>ina</span></h1>
          <p> 
          With a diverse portfolio ranging from social media platforms to e-commerce applications,
          and actively participating in Capture the Flag (CTF) competitions and cybersecurity challenges,
            I've honed my skills in both web development and cybersecurity. I've also completed 
            <a href="https://github.com/Jbdanura/odin-project" target="_blank" style={{color:'red'}}> the Odin Project</a> and
            <a href="https://github.com/Jbdanura/fullstackopen" target="_blank" style={{color:'red'}}> Fullstackopen</a> bootcamps, 
            along with engaging in learning through <a href="https://tryhackme.com/p/danurabe" target="_blank" style={{color:'red'}}> TryHackMe </a> 
            and <a href="https://app.hackthebox.com/users/1484721" target="_blank" style={{color:'red'}}> HackTheBox</a> platforms, doing 100+ CTFs and challenges. My expertise lies
             in crafting secure web applications and conducting penetration testing
             for applications and systems, ensuring their resilience against potential threats. 
             You're welcome to explore my work and projects on
            <a href="https://github.com/jbdanura" target="_blank" style={{color:'red'}}> my GitHub</a>.
          </p>
          <p style={{fontWeight:"bolder"}}>From 2023 to 2025, I worked as an AI trainer at Remotasks and Outlier, contributing to the development and training of machine learning models.
          </p>
        </div>}
        <img src={Me}/>
      </div>
    </div>
  )
}

export default About