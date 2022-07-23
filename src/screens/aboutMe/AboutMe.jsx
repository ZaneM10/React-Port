import React from 'react'
import './aboutMe.css'
import meee from '../../images/projectsicon/meee.jpeg'

function AboutMe() {
  return (
    <div className="about__container" id="about-me">
     <div>
      <img src={meee} alt="person icon"/>
     </div>
     <div className="about__text">
       <h1>ABOUT ME</h1>
       <p>I'm a fullstack web devloper. I began learning and graduated from SMU's coding bootcamp. I have a few things I like to do in my free time playing soccer, video games ,also joy rides with the window down.</p>
     </div>
    </div>
  )
}

export default AboutMe
