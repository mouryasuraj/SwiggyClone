import { LOGO_URL } from "../Utils/constant";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {

    const [logIn, setLogIn] = useState(true);

    //HandleLogIn Btn
    const handleLogIn = () => {
        setLogIn(!logIn)
    }
    return (
        <div className="header">
            {/* Logo Container */}
            <nav>
                <div className="logo-container">
                    <img className="logo" src={LOGO_URL} alt="Logo" />
                </div>
                {/* Nav Items */}
                <div className="nav-items">
                    <ul>
                        <Link className="li" to='/'>Home</Link>
                        <Link className="li" to='/about'>About</Link>
                        <Link className="li" to='/contact'>Contact</Link>
                        <Link className="li" to='/cart'>Cart</Link>
                    </ul>
                    <button onClick={handleLogIn} className={`${logIn ? "loginBtn" : "signOut"}`}>{logIn ? "Log In" : "Sign Out"}</button>
                </div>
            </nav>
            <div className="blur1"></div>
            <div className="blur2"></div>
        </div>
    )
}

export default Header;

