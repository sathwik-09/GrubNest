import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {

  const [btnName, setBtnName] = useState("Login");

  return (
    <div className="header">
      <div className="logo-container">
        <img
          src={LOGO_URL}
          className="logo"
        ></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact us</li>
          <li>Cart</li>
          <button className="login" onClick={()=>{
            btnName==="Login" ? setBtnName("Logout") : setBtnName("Login");
          }}>{btnName}</button>
        </ul>
      </div>
    </div>
  );
};

export default Header;