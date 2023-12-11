import React, { useState } from 'react'
import './navbar.css';
import logo from '../../assets/logo.png';
import contactImg from '../../assets/contact.png';
import {Link} from 'react-scroll';
import menu from '../../assets/menu.png';


function Navbar() {

  const [showMenu,setshowMenu] = useState(false);

  return (

    <nav className='navbar'>
        <img src={logo} alt='logo' className='logo'></img>
        <div className='desktopMenu'>
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuItemList'>Home</Link>
            <Link ctiveClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuItemList'>About</Link>
            <Link ctiveClass='active' to='works' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuItemList'>Portfolio</Link>
            <Link ctiveClass='active' to='clients' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuItemList'>Clients</Link>
        </div>
        <button className='desktopMenuButton' onClick={()=>{
          document.getElementById('contact').scrollIntoView({behavior:'smooth'});
        }}>
            <img src={contactImg} alt='' className='desktopMenuImg'></img>Contact Me
        </button>

        <img src={menu} alt='menu' className='mobMenu' onClick={()=>setshowMenu(!showMenu)}></img>
        <div className='navMenu' style={{display: showMenu ? 'flex' : 'none'}}>
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-50} duration={500} className='ItemList' onClick={()=>setshowMenu(false)} >Home</Link>
            <Link ctiveClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className='ItemList' onClick={()=>setshowMenu(false)}>About</Link>
            <Link ctiveClass='active' to='works' spy={true} smooth={true} offset={-100} duration={500} className='ItemList' onClick={()=>setshowMenu(false)}>Portfolio</Link>
            <Link ctiveClass='active' to='clients' spy={true} smooth={true} offset={-50} duration={500} className='ItemList' onClick={()=>setshowMenu(false)}>Clients</Link>
            <Link ctiveClass='active' to='contact' spy={true} smooth={true} offset={-50} duration={500} className='ItemList' onClick={()=>setshowMenu(false)}>Contact</Link>

        </div>

    </nav>
  )
}

export default Navbar