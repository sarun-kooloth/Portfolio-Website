import React from 'react';
import './portfolio.css';
import uiDesign from '../../assets/ui-design.png';
import webDesign from '../../assets/website-design.png';
import AppDesign from '../../assets/app-design.png';


function Portfolio() {
  return (
    <div className='portdiv1'>
    <span className='portskillsTitile'>Portfolio</span>
    <div className='portdiv2'>
        
    <section id='portskills'>
        
        <div className='portskillsBars'>
            <div className='skillBar'>
                <img src={uiDesign} alt='uiDesign' className='skillBarImg'/>
                 <div className='portskillBarText'>
                    <h2>Restaurants Website</h2>
                    <p>this is demo text</p>
                </div>   
            </div>

            <div className='skillBar'>
                <img src={webDesign} alt='webDesign' className='skillBarImg'/>
                 <div className='portskillBarText'>
                    <h2>Birthday Cards</h2>
                    <p>this is demo text</p>
                </div>   
            </div>

            <div className='skillBar'>
                <img src={AppDesign} alt='AppDesig' className='skillBarImg'/>
                 <div className='portskillBarText'>
                    <h2>Netflix Copy</h2>
                    <p>this is demo text</p>
                </div>   
            </div>

        </div>
    </section>

    <section id='portskills'>
        
        <div className='portskillsBars'>
            <div className='skillBar'>
                <img src={uiDesign} alt='uiDesign' className='skillBarImg'/>
                 <div className='portskillBarText'>
                    <h2>UI/UX Design</h2>
                    <p>this is demo text</p>
                </div>   
            </div>

            <div className='skillBar'>
                <img src={webDesign} alt='webDesign' className='skillBarImg'/>
                 <div className='portskillBarText'>
                    <h2>Web Design</h2>
                    <p>this is demo text</p>
                </div>   
            </div>

            <div className='skillBar'>
                <img src={AppDesign} alt='AppDesig' className='skillBarImg'/>
                 <div className='portskillBarText'>
                    <h2>App Design</h2>
                    <p>this is demo text</p>
                </div>   
            </div>

        </div>
    </section>
    </div>
    </div>
  )
}

export default Portfolio