import React from 'react'
import './intro.css';
import bg from '../../assets/image.png'
import btnImg from '../../assets/hireme.png';
import sar from '../../assets/sarun.png'
import {Link} from 'react-scroll';


function Intro() {
  return (
    <section id='intro'>
        <div className='introContent'>
            <span className='hello'>Hello,</span>
            <span className='introText'>I'm <span className='introName'>Sarun Kooloth</span> <br></br>
            Web Developer
            </span>
            <p className='introPara'>I am a skilled web devloper with experience in creating <br/> visually appealing and user friendly website.</p>
                <Link><button className='btn'><img src={btnImg} alt='btnimage' className='btnimage'></img>Hire me</button></Link>
        </div>
        <img src={sar} alt='Profie' className='bg'></img>


    </section>
  )
}

export default Intro