

import { Link, NavLink, useNavigate } from'react-router-dom';  

import "./NavbarStyles.css"
import { useDispatch } from 'react-redux';
import { RESET, logout } from '../../redux/features/auth/AuthSlice';
import { ShowOnLogin, ShowOnLogout } from '../protect/HiddenLink';


import {FaBars, FaTimes} from 'react-icons/fa'
import { useState } from "react"
import logo from '../../assets/logo.svg'


const activeLink = ({isActive}) => (isActive ? "active" : "" );

const Navbar = () => {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click)

    const [color, setColor] = useState(false);

    const changeColor = () => {
        if(window.screenY >=100){
            setColor(true)
        }else{
            setColor(false)
        }
    }

    window.addEventListener('scroll', changeColor)

    const navigate = useNavigate()
      const dispatch = useDispatch()
    
         const goHome = () => {
            navigate("/")
         }
    
         const logoutUser = async () =>  {
             dispatch(RESET());
             await dispatch(logout());
             navigate("/login")
         };
  return (
    <div className={color ? 'header header-bg' : 'header'}>
             <div className="logo" onClick={goHome}>
            <img src={logo}/>
        </div>
        <ul  id="navbar" className={click ? 'nav-menu active' : 'nav-menu'}>

        <ShowOnLogin>
        {/* <li className='--flex-center'>
               
             <UserName/>
                </li> */}
        </ShowOnLogin>
        <li>
                 <Link to= '/about'>About</Link>
             </li>

              <li>
                 <Link to= '/contact'>Contact</Link>
              </li>

              <ShowOnLogin>
            {/* <li>
              <NavLink to="/profile" className={activeLink}>
                Profile
              </NavLink>
            </li> */}

            <li>
              <NavLink to="/buyCrypto" className={activeLink}>
                Buy&Sell
              </NavLink>
            </li>
            <li>
              {/* <button  className="">
                Logout
              </button> */}
              <button class="signupBtn" onClick={logoutUser}>
  SIGN OUT
  <span class="arrow">
     <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512" fill="rgb(183, 128, 255)"><path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"></path></svg>
  </span>
</button>
            </li>
          </ShowOnLogin>

              

                <ShowOnLogout>
            
               <li>
               <Link to='/login'>
               <button class="signupBtn">
  SIGN UP
  <span class="arrow">
     <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512" fill="rgb(183, 128, 255)"><path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"></path></svg>
  </span>
</button>


                    </Link>
               </li>
              
                </ShowOnLogout>
        </ul>

        <div className="hamburger" onClick={handleClick}>
        {click ? (<FaTimes size={20} style={{color: '#fff'}}/>
        ) : (  <FaBars size={20} style={{color: '#fff'}}/>) }
            
        </div>
    </div>
  )
   
}

export default Navbar