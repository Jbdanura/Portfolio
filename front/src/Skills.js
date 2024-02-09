import React,{useState} from 'react'
import img1 from "./images/skills/1.svg"
import img2 from "./images/skills/2.svg"
import img3 from "./images/skills/3.svg"
import img4 from "./images/skills/4.svg"
import img5 from "./images/skills/5.svg"
import img6 from "./images/skills/6.svg"
import img7 from "./images/skills/7.svg"
import img8 from "./images/skills/8.svg"
import img9 from "./images/skills/9.svg"
import img10 from "./images/skills/4.png"
import img11 from "./images/skills/11.svg"
import img12 from "./images/skills/12.svg"
import img13 from "./images/skills/13.svg"
import img14 from "./images/skills/10.svg"
import img15 from "./images/skills/5.png"
import "./skills.css"

const Skills = () => {
  const imgs = [img1,img2,img3,img4,img5,img6,img7,img8,img9,img10,img11,img12,img13,img14,img15]
  const [skills,setSkills] = useState(["HTML","CSS","JavaScript","React","Node.js","Express","Sequelize",
  "PostgreSQL","MongoDB","Mongoose","Python","Wordpress","WooCommerce","Bootstrap","Git"])
  return (
    <div className="skills-container">
      <h4>Web dev/Programming &gt;</h4>
      <div className='dev-skills'>
        {imgs.map((img,index)=>{
          return <div className="skill">
            <img src={imgs[index]}/>
            <p>{skills[index]}</p>
          </div>
        })}
      </div>
    </div>
  )
}

export default Skills