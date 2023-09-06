
import { Link, NavLink, useNavigate } from "react-router-dom";
import { UserName } from "../profile/Profile";
import profile from "../profile/Profile";
import imagePreview from '../profile/Profile'
import { RESET, logout } from '../../redux/features/auth/AuthSlice';
import { useDispatch } from 'react-redux';
import {AdminAuthorLink, Verified} from "../../components/protect/HiddenLink"
import { useSelector } from 'react-redux';
import { selectUser } from '../../redux/features/auth/AuthSlice';
import useRedirectLogoutUser from '../../customHook/useRedirectLogoutUser'



import "../../components/Buy&SellStyles.css";

const Sidebar = () => {
  useRedirectLogoutUser("/login")
  const navigate = useNavigate()
  const handleToggleClick = () => {
    const sidebar = document.querySelector(".sidebar");
    sidebar.classList.toggle("open");
  };

  const dispatch = useDispatch()

  const user = useSelector(selectUser);
  const logoutUser = async () =>  {
    dispatch(RESET());
    await dispatch(logout());
    navigate("/")
};
  

  return (


<div className="body">
<div className="sidebar">
      <div className="logo_details">
        {/* <i className="bx bxl-audible icon"></i> */}
    <Link to='/'>
    <div className="logo_name">OPAPAY</div>
    </Link>
        <i className="bx bx-chevron-right toggle" id="btn" onClick={handleToggleClick}></i>
      </div>
      <ul className="nav-list">
        <li>
          <i className="bx bx-search"></i>
          <input type="text" placeholder="Search..." />
          <span className="tooltip">Search</span>
        </li>
     <AdminAuthorLink>
     <li>
         
            <Link to="/users">
            <i className="bx bx-grid-alt"></i>
            <span className="link_name">Admin Dashboard</span>
            </Link>
        
          <span className="tooltip">Admin Dashboard</span>
        </li>
     </AdminAuthorLink>
     <Verified>

        <li>
        
           <Link to='/buyCrypto'>
           <i className="bx bx-bitcoin"></i>
            <span className="link_name">Buy Crypto</span>
           </Link>
        
          <span className="tooltip">Buy Crypto</span>
        </li>
        <li>
         
           <NavLink to = '/sellCrypto'>
           <i className="bx bx-money"></i>
            <span className="link_name">Sell Crypto</span>
           </NavLink>
        
          <span className="tooltip">Sell Crypto</span>
        </li>
     </Verified>
        <li>
        
            
         <NavLink to='/profile'>
         <i className="bx bx-user"></i>
            <span className="link_name">Profile</span>
         </NavLink>
       
          
          <span className="tooltip">Profile</span>
        </li>
        <li>
        
          <Link to='/changePassword'>
          <i className="bx bx-cog"></i>
            <span className="link_name">Settings</span>
          </Link>
          
          <span className="tooltip">Settings</span>
        </li>
        <li className="profile">
          <div className="profile_details">
            <img src={user?.photo }alt="profile image" />
            <div className="profile_content">
              <div className="name"> <UserName/> </div>
              <div className="designation">{profile?.role}</div>
            </div>
          </div>
          <i className="bx bx-log-out" id="log_out" onClick={logoutUser}></i>
        </li>
      </ul>
    </div>
</div>
  );
};

export default Sidebar