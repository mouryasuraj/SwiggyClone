import { LOGO_URL } from "../Utils/constant";
import { useState } from "react";

const Header = () => {

    const [logIn, setLogIn] = useState(true);

    //HandleLogIn Btn
    const handleLogIn = () =>{
        setLogIn(!logIn)
    }
    return (
        <div className="header">
            {/* Logo Container */}
            <div className="logo-container">
                <img className="logo" src={LOGO_URL} alt="Logo" />
            </div>
            {/* Nav Items */}
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
                <button onClick={handleLogIn} className={`${logIn ? "loginBtn" : "signOut"}`}>{logIn ? "Log In" : "Sign Out"}</button>
            </div>
        </div>
    )
}

export default Header;

