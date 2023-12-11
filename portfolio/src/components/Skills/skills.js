import React from 'react'
import './skills.css';
import uiDesign from '../../assets/ui-design.png';
import webDesign from '../../assets/website-design.png';
import AppDesign from '../../assets/app-design.png';
import App from '../../App';
function Skills() {
  return (
    <section id='skills'>
        <span className='skillsTitile'>What I do</span>
        <span className='skillsDesc'>I am a skilled and passionat web developer with experience in creating visually appealing and user friendly website. I have a strong understanding of design and a keen eye for detail. I am proficient in React, HTML, CSS, and JavaScript. </span>
        <div className='skillsBars'>
            <div className='skillBar'>
                <img src={uiDesign} alt='uiDesign' className='skillBarImg'/>
                 <div className='skillBarText'>
                    <h2>UI/UX Design</h2>
                    <p>this is demo text</p>
                </div>   
            </div>

            <div className='skillBar'>
                <img src={webDesign} alt='webDesign' className='skillBarImg'/>
                 <div className='skillBarText'>
                    <h2>Web Design</h2>
                    <p>this is demo text</p>
                </div>   
            </div>

            <div className='skillBar'>
                <img src={AppDesign} alt='AppDesig' className='skillBarImg'/>
                 <div className='skillBarText'>
                    <h2>App Design</h2>
                    <p>this is demo text</p>
                </div>   
            </div>

        </div>
    </section>
    
  )
}

export default Skills