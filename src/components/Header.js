import { LOGO_URL } from "../Utils/constant";

const Header = () => {
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
            </div>
        </div>
    )
}

export default Header;

