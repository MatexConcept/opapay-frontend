import React from "react";
import { NavLink } from "react-router-dom";
import {AdminAuthorLink} from "../../components/protect/HiddenLink"
// import BuySell from "../../pages/auth/BuySell";

const PageMenu = () => {
  return (
    <div>
    {/* <BuySell/> */}
      <nav className="--btn-google --p --mb">
        <ul className="home-links">
          <li>
            <NavLink to="/profile">Profile</NavLink>
          </li>
          <li>
            <NavLink to="/changePassword">Change Password</NavLink>
          </li>
        <AdminAuthorLink>
        <li>
              <NavLink to="/users">Users</NavLink>
            </li>
        </AdminAuthorLink>
           
         
        </ul>
      </nav>
    </div>
  );
};

export default PageMenu;
