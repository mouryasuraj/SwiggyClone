
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from 'react-redux'
// import offers from '../assets/offers.png'
// import logo from '../assets/Logo.jpg'



const Header = () => {

    const [logIn, setLogIn] = useState(true);

    const cartItems = useSelector((store) => store.cart.items);

    //HandleLogIn Btn
    const handleLogIn = () => {
        setLogIn(!logIn)
    }
    return (
        <div className="header">
            {/* Logo Container */}
            <nav>
                <div className="">
                    {/* <Link className="logo-container" to='/'><img src={logo} alt="" /></Link> */}
                </div>
                {/* Nav Items */}
                <div className="nav-items">
                    <ul>
                        <NavLink className={({ isActive }) => `${isActive ? 'active' : 'li'}`} to='/search' >
                            <div className="icons-container">
                                <i className="fa-solid fa-magnifying-glass"></i>
                                Search
                            </div>
                        </NavLink>
                        <NavLink className={({ isActive }) => `${isActive ? 'active' : 'li'}`} to='/offers'>
                            <div className="icons-container">
                                {/* <img src={offers} alt="" /> */}
                                Offers
                            </div>
                        </NavLink>
                        <NavLink className={({ isActive }) => `${isActive ? 'active' : 'li'}`} to='/help'>
                            <div className="icons-container">
                                <i className="fa-solid fa-circle-question"></i>
                                Help
                            </div>
                        </NavLink>
                        <NavLink className={({ isActive }) => `${isActive ? 'active' : 'li'}`} to='/profile'>
                            <div className="icons-container">
                                <i className="fa-regular fa-user"></i>
                                Suraj Mourya
                            </div>
                        </NavLink>
                        <Link className='cart' to='/cart'><i className="fa-solid fa-cart-shopping"></i><span className='item-length'>{cartItems.length}</span></Link>
                    </ul>
                    <button onClick={handleLogIn} className={`${logIn ? "loginBtn" : "signOut"}`}>{logIn ? "Log In" : "Sign Out"}</button>
                </div>
            </nav>
        </div>
    )
}

export default Header;

