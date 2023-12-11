import React from 'react'
import './contact.css'
import wllmart from '../../assets/walmart.png';
import microsoft from '../../assets/microsoft.png';
import adobe from '../../assets/adobe.png';
import facebook from '../../assets/facebook.png';
import facebookIcon from '../../assets/facebook-icon.png';
import twitterIcon from '../../assets/twitter.png';
import instaIcon from '../../assets/instagram.png';
import youtubIcon from '../../assets/youtube.png';


function Contact() {

    
  return (
    <section id='ContactPage'>
        <div id='clients'>
            <h1 className='clienttTitle'>My Clients</h1>
            <p className='clientDesc'>I have had the opportunity to worrk with diverse group of companies. Some of the notable companies I have worked with includes. </p>
            <div className='clintImgs'>
                <img src={wllmart} alt='client' className='clientImg'></img>
                <img src={facebook} alt='client' className='clientImg'></img>
                <img src={microsoft} alt='client' className='clientImg'></img>
                <img src={adobe} alt='client' className='clientImg'></img>
            </div>
        </div>
        <div id='contact'>
            <h1 className='contactTitile'>Contact Me</h1>
            <span className='contactDesc'>Please fill the form below to discuss any work opportunities.</span>
            <form className='contactForm' >
                <input type='text' className='name' placeholder='Your Name'></input>
                <input type='email' className='email' placeholder='Your Email'></input>
                <textarea name='message' rows={5} placeholder='Your Message' className='msg'></textarea>
                <button className='submitBtn' type='submit' value='send'>Submit</button>
                
                <div className='links'>
                    <img src={facebookIcon} alt='fb' className='linkImg'></img>
                    <img src={youtubIcon} alt='youtube' className='linkImg'></img>
                    <img src={instaIcon} alt='insta' className='linkImg'></img>
                    <img src={twitterIcon} alt='twitter' className='linkImg'></img>
                </div>
            </form>
        </div>

    </section>
  )
}

export default Contact