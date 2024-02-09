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

const Home = () => {
  const [active,setActive] = useState("home")

  return (
    <div className="home">
        <Router>
            <Header active={active} setActive={setActive}/>
            <Routes>
                <Route path="/projects" element={<Projects setActive={setActive}/>}/>
                <Route path="/Skills" element={<Skills setActive={setActive}/>}/>
                <Route path="/about" element={<About setActive={setActive}/>}/>
                <Route path="/contact" element={<Contact setActive={setActive}/>}/>
            </Routes>
            {active === "home" && <div className="home-active">
              <HomeContent/>
              <Projects/>
            </div>}
            <Footer/>
        </Router>
  </div>
  )
}

export default Home