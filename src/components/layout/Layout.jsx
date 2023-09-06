import React from "react";
import BuySell from '../../pages/auth/BuySell' 

const Layout = ({ children }) => {
  return (
    <>
     <div  style={{backgroundColor: "#adb5bd"}}>
     <BuySell />
      <div style={{ minHeight: "100vh"}}>
        {children}
      </div>
     </div>
     
    </>
  );
};

export default Layout;
