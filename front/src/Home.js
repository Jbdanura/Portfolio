import React, { useState ,useEffect} from 'react'
import Header from './Header'
import "./Home.css"
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Projects from './Projects'
import Skills from "./Skills"
import About from "./About"
import Contact from "./Contact"
import Footer from "./Footer"
import HomeContent from './HomeContent';
import ProjectsPage from './ProjectsPage';
import SkillsPage from './SkillsPage';
import translationsJson from "./translations.json"

const Home = () => {
  const [active,setActive] = useState("home")
  const [language,setLanguage] = useState("en")
  const [translations,setTranslations] = useState([])
  const [showLanguages,setShowLanguages] = useState(false)

  useEffect(()=>{
    language == "es" ? setTranslations(translationsJson.Spanish) : setTranslations(translationsJson.English)
  },[language])

  const backToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' 
  })};

  return (
    <div className="home">
        <Router>
            <Header active={active} setActive={setActive} language={language}/>
            <Routes>
                <Route path="/projects" element={<ProjectsPage translations={translations}/>}/>
                <Route path="/skills" element={<SkillsPage translations={translations}/>}/>
                <Route path="/about" element={<About language={language}/>}/>
                <Route path="/contact" element={<Contact translations={translations}/>}/>
            </Routes>
            {active === "home" && <div className="home-active">
              <HomeContent translations={translations}/>
            </div>}
            <div className="language-container">
              <button className="back-top" onClick={()=>backToTop()}>↑</button>
              <button className={language == "es" ? "language-btn-active language-btn" : "language-btn"} onClick={()=>setLanguage("es")}>ES</button>
              <button className={language == "en" ? "language-btn-active language-btn" : "language-btn"}onClick={()=>setLanguage("en")}>EN</button>
            </div>
            <Footer/>
        </Router>
  </div>
  )
}

export default Home