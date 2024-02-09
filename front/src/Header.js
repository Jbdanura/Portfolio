import React from 'react'
import "./Header.css"
import {Link} from "react-router-dom";

const Header = ({active,setActive}) => {
  return (
    <div className="header">
        <img></img>
        <div className="pages">
            <Link to="/" className={active == "home" && "active"} onClick={()=>setActive("home")}>Home</Link>
            <Link to="/projects" className={active == "projects" && "active"} onClick={()=>setActive("projects")}>Projects</Link>
            <Link to="/skills" className={active == "skills" && "active"} onClick={()=>setActive("skills")}>Skills</Link>
            <Link to="/about" className={active == "about" && "active"} onClick={()=>setActive("about")}>About</Link>
            <Link to="/contact"className={active == "contact" && "active"} onClick={()=>setActive("contact")}>Contact</Link>
        </div>
    </div>
  )
}

export default Header