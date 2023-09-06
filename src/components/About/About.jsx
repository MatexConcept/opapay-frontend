import './AboutStyle.css'
import AboutImg from '../../assets/vecteezy_cryptocurrency-3d-illustration_11064633_632.png'

import { Link } from'react-router-dom';  
const About = () => {
  return (
    <div className='AboutSection'>
          <div className='Aboutcontent'>
            <div className='content'>
                    <h1>Our  <span>Mission</span></h1>
                    <p>Our aim is to facilitate the widespread acceptance of cryptocurrency 
                     worldwide through user-friendly payment solutions that bridge the 
                     gap between traditional fiat economies and the world of crypto.</p>

        
                  <Link to='/contact'>
                  <button className='AboutBtn'>Contact Us</button>
                  </Link>
            </div>
                    
            <div className='imgCont'>
                    <img src={AboutImg} alt='crypto' className='Abt-img'/>
            </div>
          </div>

            
    </div>
  )
}

export default About