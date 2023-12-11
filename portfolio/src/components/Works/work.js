import React from 'react';
import './work.css';
import portfolio1 from '../../assets/portfolio-1.png';
import portfolio2 from '../../assets/portfolio-2.png';
import portfolio3 from '../../assets/portfolio-3.png';
import portfolio4 from '../../assets/portfolio-4.png';
import portfolio5 from '../../assets/portfolio-5.png';
import portfolio6 from '../../assets/portfolio-6.png';


function Work() {
  return (
    <section id='works'>
        <h2 className='worksTitle'>My Portfolio</h2>
        <p className='worksDesc'>I take ptide in paying attention to the smallest details and making sure that my work is perfect. Iam excited to bring my skills and experience to help businesses to achive their goals and create a strong online presence.   </p>
        <div className='worksImages'>
            <img src={portfolio1} alt='' className='worksImg'></img>
            <img src={portfolio2} alt='' className='worksImg'></img>
            <img src={portfolio3} alt='' className='worksImg'></img>
            <img src={portfolio4} alt='' className='worksImg'></img>
            <img src={portfolio5} alt='' className='worksImg'></img>
            <img src={portfolio6} alt='' className='worksImg'></img>
        </div>
        <button className='worksBtn'>See More</button>
    </section>
  )
}

export default Work