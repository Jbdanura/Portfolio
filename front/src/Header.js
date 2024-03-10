import React from 'react'
import "./Header.css"
import {Link} from "react-router-dom";

const Header = ({active,setActive,language}) => {
  return (
    <div className="header">
        <img></img>
        <div className="pages">
            <Link to="/" className={active == "home" && "active"} onClick={()=>setActive("home")}>{language == "es" ? "Inicio" : "Home"}</Link>
            <Link to="/projects" className={active == "projects" && "active"} onClick={()=>setActive("projects")}>{language == "es" ? "Proyectos" : "Projects"}</Link>
            <Link to="/skills" className={active == "skills" && "active"} onClick={()=>setActive("skills")}>{language == "es" ? "Habilidades" : "Skills"}</Link>
            <Link to="/about" className={active == "about" && "active"} onClick={()=>setActive("about")}>{language == "es" ? "Acerca" : "About"}</Link>
            <Link to="/contact"className={active == "contact" && "active"} onClick={()=>setActive("contact")}>{language == "es" ? "Contacto" : "Contact"}</Link>
        </div>
    </div>
  )
}

export default Header