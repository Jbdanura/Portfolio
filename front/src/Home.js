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

const Home = () => {
  const [active,setActive] = useState("home")

  return (
    <div className="home">
        <Router>
            <Header active={active} setActive={setActive}/>
            <Routes>
                <Route path="/projects" element={<ProjectsPage/>}/>
                <Route path="/skills" element={<SkillsPage/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/contact" element={<Contact/>}/>
            </Routes>
            {active === "home" && <div className="home-active">
              <HomeContent/>
            </div>}
            <Footer/>
        </Router>
  </div>
  )
}

export default Home