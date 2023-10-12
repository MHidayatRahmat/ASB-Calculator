import React from "react";
import logo from "./Logo ASB.png";
import "./Header.css"

const Header =()=>{
    return(
        <div>
            <header className="header">
                <img src={logo} alt="logo" />
                <h1>ASB Investment Calculator</h1>
            </header> 
        </div>
    );
}
export default Header;