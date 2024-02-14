import React,{useState,useEffect} from 'react'
import "./Contact.css"

const Contact = () => {
  const [show,setShow] = useState(false)

  useEffect(()=>{
    setTimeout(()=>{
        setShow(true)
    },1)
  },[])

  return (
    <div className={show ? "contact-active" : "contact"}>Contact</div>
  )
}

export default Contact